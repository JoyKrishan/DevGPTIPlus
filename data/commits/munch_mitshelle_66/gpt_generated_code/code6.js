export async function loadDataSource(props: IDataSourceProps): Promise<IRow[]> {
    const { dataSourceId } = props;

    return new Promise((resolve, reject) => {
        const data = new Array<IRow>();
        const TIMEOUT_DURATION = 100_000;
        let timer = setTimeout(timeout, TIMEOUT_DURATION);

        const timeout = () => {
            reject("timeout");
        };

        const onmessage = (ev: MessageEvent<MessagePayload>) => {
            if (Object.is(ev.data.dataSourceId, dataSourceId)) {
                clearTimeout(timer);
                timer = setTimeout(timeout, TIMEOUT_DURATION);

                if (ev.data.action === "postData") {
                    handlePostData(ev.data);
                } else if (ev.data.action === "finishData") {
                    handleFinishData();
                }
            }
        };

        window.addEventListener("message", onmessage);
    });
}

const handlePostData = (eventData: MessagePayload) => {
    commonStore.setInitModalOpen(true);
    commonStore.setInitModalInfo({
        total: eventData.total,
        curIndex: eventData.curIndex,
        title: "Loading Data",
    });
    for (const row of eventData.data ?? []) {
        data.push(row);
    }
};

const handleFinishData = () => {
    window.removeEventListener("message", onmessage);
    resolve(data);
};