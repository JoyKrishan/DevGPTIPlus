                // Some routers may change short addresses and the announcement
                // is missed by the coordinator. This can happen when there are
                // power outages or other interruptions in service. They may
                // not send additional announcements, causing the device to go
                // offline. However, those devices may instead send
                // Concentrator Indicator Callback commands, which contain both
                // the short and the long address allowing us to update our own
                // mappings.
                // https://e2e.ti.com/cfs-file/__key/communityserver-discussions-components-files/158/4403.zstacktask.c
                // https://github.com/Koenkk/zigbee-herdsman/issues/74
