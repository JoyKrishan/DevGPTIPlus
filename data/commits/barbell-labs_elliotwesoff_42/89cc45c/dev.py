
    def __init__(self, edges, num_vertices):
        self.adj_list = [[] for _ in range(num_vertices)]
        for src, dest in edges:
            self.adj_list[src].append(dest)
            self.adj_list[dest].append(src)

    def bfs(self, start_vertex):
        visited = [False] * len(self.adj_list)
        queue = deque()

        visited[start_vertex] = True
        queue.append(start_vertex)

        while queue:
            vertex = queue.popleft()
            print(vertex, end=' ')

            for neighbor in self.adj_list[vertex]:
                if not visited[neighbor]:
                    visited[neighbor] = True
                    queue.append(neighbor)