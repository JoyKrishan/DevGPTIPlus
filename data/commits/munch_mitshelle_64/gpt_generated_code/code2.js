   const exportData = async (messageType, payload) => {
       await communicationStore.comm?.sendMsg(messageType, {
           payload: payload,
           encodings: storeRef.current?.currentVis.encodings,
       });
   };

   const exportServer = async () => {
       const payload = { workflow: storeRef.current?.workflow };
       await exportData("export_dataframe_by_payload", payload);
   };

   const exportClient = async () => {
       const sql = parser_dsl_with_meta(
           "pygwalker_mid_table",
           JSON.stringify({ workflow: storeRef.current?.workflow }),
           JSON.stringify({ "pygwalker_mid_table": props.fieldMetas })
       );
       await exportData("export_dataframe_by_sql", { sql });
   };