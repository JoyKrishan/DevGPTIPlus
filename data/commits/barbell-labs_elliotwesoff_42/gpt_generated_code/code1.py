from collections import deque

class Graph:
    def __init__(self, edges, num_vertices):
        # Initialize adjacency list for the graph
        self.adj_list = [[] for _ in range(num_vertices)]
        # Populate adjacency list based on provided edges
        for src, dest in edges:
            self.adj_list[src].append(dest)
            self.adj_list[dest].append(src)

    def bfs(self, start_vertex):
        # Initialize a boolean array to keep track of visited vertices
        visited = [False] * len(self.adj_list)
        # Initialize a queue for BFS traversal
        queue = deque()

        # Mark the starting vertex as visited and enqueue it
        visited[start_vertex] = True
        queue.append(start_vertex)

        # BFS traversal loop
        while queue:
            # Dequeue a vertex from the front of the queue and print it
            vertex = queue.popleft()
            print(vertex, end=' ')

            # Visit all adjacent vertices of the dequeued vertex
            for neighbor in self.adj_list[vertex]:
                if not visited[neighbor]:
                    # Mark the neighbor as visited and enqueue it
                    visited[neighbor] = True
                    queue.append(neighbor)

# Example usage:
if __name__ == "__main__":
    # Example graph edges and number of vertices
    edges = [(0, 1), (0, 2), (1, 3), (1, 4), (2, 5), (2, 6)]
    num_vertices = 7
    # Create a graph object
    graph = Graph(edges, num_vertices)
    # Perform BFS traversal starting from vertex 0
    print("BFS Traversal:")
    graph.bfs(0)