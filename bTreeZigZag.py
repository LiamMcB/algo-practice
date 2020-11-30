# GTCI Tree BFS 2: Given the head of a binary tree, populate an array to represent its level-by-level traversal in zigzag order (alternating)
class TreeNode:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None

def traverse(root):
  result = []
  if root is None:
    return result
  queue = []
  queue.append(root)
  left_right = True
  while len(queue) > 0:
    level_size = len(queue)
    current_level = []
    for i in range(level_size):
      current_node = queue.pop(0)
      # Add node to current level based on traverse direction
      if left_right == True:
        current_level.append(current_node.value)
      elif left_right == False:
        current_level.insert(0, current_node.value)
      # If either the left or right node exist, push them to the queue
      if current_node.left != None:
        queue.append(current_node.left)
      if current_node.right != None:
        queue.append(current_node.right)
    # Switch direction and append current level
    left_right = not left_right
    result.append(current_level)
  return result

# Tests:
bst = TreeNode(1)
bst.left = TreeNode(2)
bst.right = TreeNode(3)
bst.left.left = TreeNode(4)
bst.left.right = TreeNode(5)
bst.right.left = TreeNode(6)
bst.right.right = TreeNode(7)
print(traverse(bst))
