const onClick = async () => {
        if (exporting) return;
        setExporting(true);
        try {
            if (props.parseDslType === "server") {
                await communicationStore.comm?.sendMsg("export_dataframe_by_payload", {
                    payload: {
                        workflow: storeRef.current?.workflow,
                    },
                    encodings: storeRef.current?.currentVis.encodings,
                });
            } else {
                const sql = parser_dsl_with_meta(
                    "pygwalker_mid_table",
                    JSON.stringify({workflow: storeRef.current?.workflow}),
                    JSON.stringify({"pygwalker_mid_table": props.fieldMetas})
                );
                await communicationStore.comm?.sendMsg("export_dataframe_by_sql", {
                    sql: sql,
                    encodings: storeRef.current?.currentVis.encodings
                });
            }
            exportSuccess();
        } catch (_) {
            setExporting(false);
    return {
        key: "export_dataframe",
        label: "export_dataframe",
        icon: (iconProps?: any) => {
            return exporting ? <LoadingIcon width={36} height={36} /> : <DocumentArrowDownIcon {...iconProps} />
        },
        onClick: onClick,
    }
}