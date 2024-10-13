/**
 * Export Dataframe Function
 *
 * This function represents the logic for exporting data frames based on the provided configuration.
 * It checks the `parseDslType` to determine whether to export data using a server request or client-side DSL parsing.
 * The function is designed to be used as part of a UI component or functionality.
 *
 * @async
 * @function
 * @returns {Object} Configuration object for the export button with properties:
 *   - key: A unique identifier for the export functionality.
 *   - label: A label for the export functionality.
 *   - icon: A loading or arrow-down icon based on the exporting state.
 *   - onClick: The function to be executed when the button is clicked, handling the export logic.
 */
const exportDataframe = async () => {
    // Check if an export is already in progress, if yes, prevent multiple export attempts
    if (exporting) return;

    // Set exporting state to true to indicate the start of the export process
    setExporting(true);

    try {
        // Determine the export method based on the parseDslType
        if (props.parseDslType === "server") {
            // Server export: Send a message to the server with payload and encodings
            await communicationStore.comm?.sendMsg("export_dataframe_by_payload", {
                payload: {
                    workflow: storeRef.current?.workflow,
                },
                encodings: storeRef.current?.currentVis.encodings,
            });
        } else {
            // Client export: Generate SQL query and send a message to export data
            const sql = parser_dsl_with_meta(
                "pygwalker_mid_table",
                JSON.stringify({ workflow: storeRef.current?.workflow }),
                JSON.stringify({ "pygwalker_mid_table": props.fieldMetas })
            );
            await communicationStore.comm?.sendMsg("export_dataframe_by_sql", {
                sql: sql,
                encodings: storeRef.current?.currentVis.encodings,
            });
        }

        // Handle export success
        exportSuccess();
    } catch (error) {
        // Handle export failure: Set exporting state back to false
        setExporting(false);
    }
};

/**
 * Export Dataframe Button Configuration
 *
 * This object contains the configuration for a button that triggers the exportDataframe function.
 * It provides key information such as label, icon, and onClick handler for rendering the UI component.
 *
 * @constant
 * @type {Object}
 */
const exportButtonConfig = {
    key: "export_dataframe",
    label: "Export Dataframe",
    icon: (iconProps?: any) => {
        // Display loading icon if exporting, otherwise, display arrow-down icon
        return exporting ? <LoadingIcon width={36} height={36} /> : <DocumentArrowDownIcon {...iconProps} />;
    },
    onClick: exportDataframe,
};

// Return the export button configuration
export default exportButtonConfig;