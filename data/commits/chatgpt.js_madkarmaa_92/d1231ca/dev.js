    shareChat: function(chatToGet) {
                    makeChatToShare(token, node).then(data => {
                        confirmShareChat(token, data).then(() => {
                            resolve();
                            // window.open(data.share_url, '_blank');
        function makeChatToShare(token, node) {
                        console.log(JSON.parse(xhr.responseText)); // DEBUG
                        return resolve(JSON.parse(xhr.responseText)); // return untouched data
                            is_anonymous: true // show user name in the conversation or not
                    console.log(JSON.parse(xhr.responseText)); // DEBUG
                    return resolve(); // the response has nothing useful
                    {
                        is_anonymous: data.is_anonymous