                this.emit(Events.Events.networkAddress, payload);
            } else if (object.command === 'concentratorIndCb') {
                const payload: Events.NetworkAddressPayload = {
                    networkAddress: object.payload.srcaddr,
                    ieeeAddr: object.payload.extaddr,
                };