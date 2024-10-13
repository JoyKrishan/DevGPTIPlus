            chatgpt.getAccessToken().then(token => { // get access token
                getChatNode(token).then(node => { // get chat node
                    initShare(token, node).then(data => { // initialize share
                        confirmShareChat(token, data).then(() => { // confirm share
                            return resolve(detailsToReturn); // resolve main Promise returning the requested data
                        return resolve(JSON.parse(xhr.responseText).current_node); // chat messages until now
                        return resolve(JSON.parse(xhr.responseText)); // return untouched data needed for confirmShareChat
                    xhr.send(JSON.stringify( // request body
                            current_node_id: node, // by getChatNode
                            conversation_id: chat.id, // current chat id
                            is_anonymous: anonymous // show user name in the conversation or not
                    return resolve(); // the response has nothing useful, so return nothing
                xhr.send(JSON.stringify( // request body
                    { // parse data from initShare