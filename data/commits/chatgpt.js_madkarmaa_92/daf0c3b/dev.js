    shareChat: function() {
        const validDetails = [ 'is_anonymous', 'is_public', 'is_visible', 'share_id', 'share_url', 'title' ];
        let chatToGet = 1, anonymous = true, detailsToGet = [];
        if (validDetails.includes(arguments[0])) // if 1st arg is detail string
            detailsToGet = Array.from(arguments); // convert to array
        else { // handle chat passed/unpassed + anonymous passes/unpassed + details as array/arg(s)/unpassed
            const chatPassed = Array.isArray(arguments[0]) || !arguments[0] ? false : true;
            const anonPassed = Array.isArray(arguments[1]) || !arguments[1] ? false : true;
            chatToGet = chatPassed ? arguments[0] : 0;
            anonymous = anonPassed ? arguments[1] : true;
            const detailsIdx = arguments[0] === '' ? 2 : +chatPassed+anonPassed; // offset detailsToGet index from chatToGet and anonymous
            detailsToGet = ( !arguments[detailsIdx] ? validDetails // no details passed, populate w/ all valid ones
                    : Array.isArray(arguments[detailsIdx]) ? arguments[detailsIdx] // details array passed, do nothing
                    : Array.from(arguments).slice(detailsIdx) ); // details string(s) passed, convert to array
        }

        return new Promise((resolve) => {
            chatgpt.getAccessToken().then(token => {
                getChatNode(token).then(node => {
                    initShare(token, node).then(data => {
                        confirmShareChat(token, data).then(() => {
                            const detailsToReturn = {};
                            for (const detail of detailsToGet) detailsToReturn[detail] = data[detail];
                            return resolve(detailsToReturn);
                        });
                    });
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

        function initShare(token, node) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                chatgpt.getChatDetails(chatToGet).then(chat => {
                    xhr.open('POST', endpoints.share_create, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                    xhr.onload = () => {
                        if (xhr.status !== 200) return reject('🤖 chatgpt.js >> Request failed. Cannot initialize share chat.');
                        return resolve(JSON.parse(xhr.responseText));
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

        function confirmShareChat(token, data) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('PATCH', `${endpoints.share}/${data.share_id}`, true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                xhr.onload = () => {
                    if (xhr.status !== 200) return reject('🤖 chatgpt.js >> Request failed. Cannot share chat.');
                    return resolve();
                };
                xhr.send(JSON.stringify(
                    {
                        share_id: data.share_id,
                        highlighted_message_id: data.highlighted_message_id,
                        title: data.title,
                        is_public: data.is_public,
                        is_visible: data.is_visible,
                        is_anonymous: anonymous
                    }
                ));
            });
        }
    },
