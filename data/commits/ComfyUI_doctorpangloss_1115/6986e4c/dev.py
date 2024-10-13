    def __lt__(self, other: QueueItem):
        return self.queue_tuple[0] < other.queue_tuple[0]