    it('Concentrator Callback Indication', async () => {
        basicMocks();
        await adapter.start();
        let networkAddress;
        const object = {type: Type.AREQ, subsystem: Subsystem.ZDO, command: 'concentratorIndCb', payload: {srcaddr: 124, extaddr: '0x123'}};
        adapter.on("networkAddress", (p) => {networkAddress = p;})
        znpReceived(object);
        expect(networkAddress).toStrictEqual({ieeeAddr: '0x123', networkAddress: 124});
    });
