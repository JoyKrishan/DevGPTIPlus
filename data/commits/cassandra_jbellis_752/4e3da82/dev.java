import org.apache.cassandra.index.sai.disk.hnsw.VectorMemtableIndex;
    private int globalBruteForceRows; // not final so test can inject its own setting
        globalBruteForceRows = Integer.MAX_VALUE;
            int mbfr = getMaxBruteForceRows(limit);
            int maxBruteForceRows = Math.min(globalBruteForceRows, mbfr);
            if (nRows <= maxBruteForceRows)
    private int getMaxBruteForceRows(int limit)
    {
        // VSTODO the memtable calculation assumes that doing a graph comparison is equally as expensive
        // as a brute force comparison.  This is not correct but I'm not sure by how much.  2x seems like
        // a reasonable minimum factor to increase it by.  (This will change for DiskANN.)
        return 2 * VectorMemtableIndex.getMaxBruteForceRows(limit, indexContext.getIndexWriterConfig().getMaximumNodeConnections(), graph.size());
    }

            int mbfr = getMaxBruteForceRows(limit);
            int[] bruteForceRows = new int[Math.min(globalBruteForceRows, mbfr)];