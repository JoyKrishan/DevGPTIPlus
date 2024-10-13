import { events as quicEvents } from '@matrixai/quic';
  test('syncNodeGraph handles connection rejections from peer', async () => {
    // Force close connections.
    // @ts-ignore: kidnap protected property
    const quicServer = remotePolykeyAgent1.nodeConnectionManager.quicServer;
    quicServer.addEventListener(
      quicEvents.EventQUICServerConnection.name,
      async (evt: quicEvents.EventQUICServerConnection) => {
        await evt.detail.stop({
          isApp: true,
          errorCode: 42,
          reason: Buffer.from('life the universe and everything'),
          force: true,
        });
      },
    );

    const seedNodes = {
      [remoteNodeIdEncoded1]: remoteAddress1,
    };
    nodeConnectionManager = new NodeConnectionManager({
      keyRing,
      logger: logger.getChild(NodeConnectionManager.name),
      nodeGraph,
      connectionConnectTimeoutTime: 1000,
      tlsConfig,
      seedNodes,
    });
    nodeManager = new NodeManager({
      db,
      gestaltGraph,
      keyRing,
      nodeConnectionManager,
      nodeGraph,
      sigchain,
      taskManager,
      connectionConnectTimeoutTime: 1000,
      logger,
    });
    await nodeManager.start();
    // Add seed nodes to the nodeGraph
    const setNodeProms = new Array<Promise<void>>();
    for (const nodeIdEncoded in seedNodes) {
      const nodeId = nodesUtils.decodeNodeId(nodeIdEncoded);
      if (nodeId == null) utils.never();
      const setNodeProm = nodeManager.setNode(
        nodeId,
        seedNodes[nodeIdEncoded],
        true,
      );
      setNodeProms.push(setNodeProm);
    }
    await Promise.all(setNodeProms);

    await remotePolykeyAgent1.nodeGraph.setNode(remoteNodeId2, remoteAddress2);

    await nodeConnectionManager.start({
      host: localHost as Host,
    });
    await taskManager.startProcessing();

    await nodeManager.syncNodeGraph(true, 2000);

    await nodeConnectionManager.stop();
  });