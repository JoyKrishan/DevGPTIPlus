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