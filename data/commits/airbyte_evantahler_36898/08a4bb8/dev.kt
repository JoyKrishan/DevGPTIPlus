import org.jooq.impl.DSL.table
                    return@supplyAsync getAllDestinationStates()
    @Throws(SQLException::class)
    protected fun getAllDestinationStates(): Map<AirbyteStreamNameNamespacePair, DestinationState> {
        try {
                        quotedName(rawTableSchemaName, DESTINATION_STATE_TABLE_NAME),
                        SQLDataType.VARCHAR,
                        SQLDataType.VARCHAR,
                        SQLDataType.TIMESTAMPWITHTIMEZONE,
                    .getSQL(ParamType.INLINED),
                            field(quotedName(DESTINATION_STATE_TABLE_COLUMN_STATE)),
                            field(quotedName(DESTINATION_STATE_TABLE_COLUMN_UPDATED_AT)),
                        .sql,
                .map { recordJson: JsonNode ->

                    record
                .sortedBy {
                    // Sort by updated_at, so that if there are duplicate state,
                    // the most recent state is the one that gets used.
                    // That shouldn't typically happen, but let's be defensive.
                    val updatedAt = it.get(DESTINATION_STATE_TABLE_COLUMN_UPDATED_AT)?.asText()
                    if (updatedAt != null) {
                        OffsetDateTime.parse(updatedAt)
                    } else {
                        OffsetDateTime.MIN
                    }
                }
                .associate {
                    val stateTextNode: JsonNode? = it.get(DESTINATION_STATE_TABLE_COLUMN_STATE)
                    val stateNode =
                        if (stateTextNode != null) Jsons.deserialize(stateTextNode.asText())
                        else Jsons.emptyObject()
                    val airbyteStreamNameNamespacePair =
                        AirbyteStreamNameNamespacePair(
                            it.get(DESTINATION_STATE_TABLE_COLUMN_NAME)?.asText(),
                            it.get(DESTINATION_STATE_TABLE_COLUMN_NAMESPACE)?.asText(),
                        )

                    airbyteStreamNameNamespacePair to toDestinationState(stateNode)
                }
        } catch (e: Exception) {
            LOGGER.warn("Failed to retrieve destination states", e)
            return emptyMap()
    }
            toJdbcTypeName(Struct(LinkedHashMap<String, AirbyteType>())) ==
    private fun existingSchemaMatchesStreamConfig(
                    JavaBaseConstants.V2_FINAL_TABLE_METADATA_COLUMNS.stream().noneMatch {
                        airbyteColumnName: String ->
                        airbyteColumnName == column.key
                    }
                        map: LinkedHashMap<String?, String>,
                    { obj: LinkedHashMap<String?, String>, m: LinkedHashMap<String?, String>? ->
        try {
            if (destinationStates.isEmpty()) {
                return
            }
            // Delete all state records where the stream name+namespace match one of our states
            val deleteStates =
                dslContext
                    .deleteFrom(table(quotedName(rawTableSchemaName, DESTINATION_STATE_TABLE_NAME)))
                    .where(
                        destinationStates.keys
                            .stream()
                            .map { streamId: StreamId ->
                                field(quotedName(DESTINATION_STATE_TABLE_COLUMN_NAME))
                                    .eq(streamId.originalName)
                                    .and(
                                        field(quotedName(DESTINATION_STATE_TABLE_COLUMN_NAMESPACE))
                                            .eq(streamId.originalNamespace)
                                    )
                            }
                            .reduce(DSL.falseCondition()) { obj: Condition, arg2: Condition? ->
                                obj.or(arg2)
                            }
                    )
                    .getSQL(ParamType.INLINED)
            // Reinsert all of our states
            var insertStatesStep =
                dslContext
                    .insertInto(table(quotedName(rawTableSchemaName, DESTINATION_STATE_TABLE_NAME)))
                    .columns(
                        field(quotedName(DESTINATION_STATE_TABLE_COLUMN_NAME), String::class.java),
                        field(
                            quotedName(DESTINATION_STATE_TABLE_COLUMN_NAMESPACE),
                            String::class.java
                        ),
                        field(
                            quotedName(DESTINATION_STATE_TABLE_COLUMN_STATE),
                            String::class.java
                        ), // This field is a timestamptz, but it's easier to just insert a string
                        // and assume the destination can cast it appropriately.
                        // Destination-specific timestamp syntax is weird and annoying.
                        field(
                            quotedName(DESTINATION_STATE_TABLE_COLUMN_UPDATED_AT),
                            String::class.java
                        )
            for ((streamId, value) in destinationStates) {
                val stateJson = Jsons.serialize(value)
                insertStatesStep =
                    insertStatesStep.values(
                        streamId.originalName,
                        streamId.originalNamespace,
                        stateJson,
                        OffsetDateTime.now().toString()
                    )
            }
            val insertStates = insertStatesStep.getSQL(ParamType.INLINED)
            jdbcDatabase.executeWithinTransaction(listOf(deleteStates, insertStates))
        } catch (e: Exception) {
            LOGGER.warn("Failed to commit destination states", e)
        }
                    val columnDefinitions = LinkedHashMap<String?, ColumnDefinition>()