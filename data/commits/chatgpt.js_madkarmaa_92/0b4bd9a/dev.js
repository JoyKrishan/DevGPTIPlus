    chat: 'https://chat.openai.com/backend-api/conversation',
    share: 'https://chat.openai.com/backend-api/share/create'
    test: function(chatToGet = 1, anonymous = true) {
        return new Promise((resolve) => {
            chatgpt.getAccessToken().then(token => {
                getChatNode(token).then(node => {
                    shareChat(token, node).then(data => { resolve(data); });
                });
            });
        });

        function getChatNode(token) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                chatgpt.getChatDetails(chatToGet).then(chat => {
                    xhr.open('GET', `${endpoints.chat}/${chat.id}`, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                    xhr.onload = () => {
                        if (xhr.status !== 200) return reject('🤖 chatgpt.js >> Request failed. Cannot retrieve chat node.');
                        return resolve(JSON.parse(xhr.responseText).current_node);
                    };
                    xhr.send();
        });});}

        function shareChat(token, node) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                chatgpt.getChatDetails(chatToGet).then(chat => {
                    xhr.open('POST', endpoints.share, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                    xhr.onload = () => {
                        if (xhr.status !== 200) return reject('🤖 chatgpt.js >> Request failed. Cannot retrieve chat details.');
                        const data = JSON.parse(xhr.responseText);
                        console.log(data);
                        return resolve();
                    };
                    xhr.send(JSON.stringify(
                        {
                            current_node_id: node,
                            conversation_id: chat.id,
                            is_anonymous: anonymous
                        }
                    ));
                });
        });}
    },

                        console.log(JSON.parse(xhr.responseText)); // DEBUG