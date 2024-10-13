        .catch((error) => {
          const errorMsg: Error = error as Error;
          alert(`Unable to create account.\nReason: ${errorMsg.message}`);
        });