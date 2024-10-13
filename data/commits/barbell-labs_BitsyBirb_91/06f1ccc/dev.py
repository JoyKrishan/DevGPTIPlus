import heapq
import math

class Node:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.g = 0  # cost from start to current node
        self.h = 0  # heuristic (estimated cost from current node to goal)
        self.parent = None

    def f(self):
        return self.g + self.h

def heuristic(a, b):
    return abs(a.x - b.x) + abs(a.y - b.y)

# More useful in scenarios that we can have diagonal movements, not just ones in cardinal directions.
# def euclidean_distance(a, b):
#    return math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2)


def astar(grid, start, goal):
    open_set = []
    closed_set = set()

    heapq.heappush(open_set, (start.f(), start))
    
    while open_set:
        _, current = heapq.heappop(open_set)

        if current.x == goal.x and current.y == goal.y:
            # Reconstruct the path from the goal to the start
            path = []
            while current:
                path.append((current.x, current.y))
                current = current.parent
            return path[::-1]

        closed_set.add((current.x, current.y))

        # Generate neighbors
        neighbors = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # Right, Down, Left, Up

        for nx, ny in [(current.x + dx, current.y + dy) for dx, dy in neighbors]:
            if 0 <= nx < len(grid) and 0 <= ny < len(grid[0]) and grid[nx][ny] == 0 and (nx, ny) not in closed_set:
                neighbor = Node(nx, ny)
                neighbor.g = current.g + 1
                neighbor.h = heuristic(neighbor, goal)
                neighbor.parent = current

                heapq.heappush(open_set, (neighbor.f(), neighbor))
                
    # If no path is found, return an empty list
    return []

# Example usage
grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
]

start = Node(0, 0)
goal = Node(3, 4)

path = astar(grid, start, goal)

# Print the path
print(path)