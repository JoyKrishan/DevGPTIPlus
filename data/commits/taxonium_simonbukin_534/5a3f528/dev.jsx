  const [nodes, setNodes] = useState([]);

  const view = useView({
    settings,
    deckSize,
    deckRef,
    jbrowseRef,
    nodes,
  });
  useMemo(() => setNodes(data), [data]);
