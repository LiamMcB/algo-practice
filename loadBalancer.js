const body = require('body-parser');
const { error } = require('console');
const express = require('express');
const request = require('request');
const { pipeline } = require('stream');

// Node to represent one server 
class Node {
  constructor(PORT) {
    this.app = express();
    this.PORT = PORT;
    this.app.use(body.json()); // Parse incoming requests to this server
    this.app.use('*', handler); // use load balancer handler for all requests
    this.app.listen(() => console.log('Server listening on PORT', PORT), PORT);
  }
}
// Hashmap to hold all server nodes with keys as endpoints
class Servers {
  constructor() {
    this.serverNodes = {};
    this.nodeList = []; // For round robin approach
  }
  addNode(PORT) {
    // Create new node and add if it doesn't already exist
    if (!this.serverNodes[PORT]) {
      this.serverNodes[PORT] = new Node(PORT);
      this.nodeList.push(PORT);
      console.log(`Server node added at PORT ${PORT}.`);
    } else {
      console.log('Server node already exists at PORT.')
    }
  }
  deleteNode(PORT) {
    // Delete node if it exists at port, else return message
    if (this.serverNodes[PORT]) {
      delete this.serverNodes[PORT];
      let serverIndex; 
      this.nodeList.forEach((el, ind) => {
        if (el === PORT) serverIndex = ind;
      });
      this.nodeList.splice(ind, 1);
      console.log(`Server node deleted at PORT ${PORT}.`);
    } else {
      console.log('No server exists at PORT.');
    }
  }
  roundRobin() {
    // Shift from front of node list
    const serverPort = this.nodeList.shift();
    // Push to end of nodelist
    this.nodeList.push(serverPort);
    // Return node at server port
    return this.serverNodes[serverPort];
  }
}

// Handler to handle load balancing
const handler = (req, res) => {
  // Pipe node request into server then pipe response back to user
  const _req = pipe(request({ url: Servers.roundRobin().PORT + req.url })).on('error', error =>{
    res.status(500).send(error.message); // Handles errors if request to server times out, etc.
  });
  req.pipe(_req).pipe(res);
}

const servers = new Servers();
servers.addNode(3000);
servers.addNode(3001); 