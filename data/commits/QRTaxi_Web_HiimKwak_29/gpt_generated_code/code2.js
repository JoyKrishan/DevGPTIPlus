function handleVisibilityChangeWithCallback(callback) {
    handleVisibilityChange(ws_url, id, navigate)
        .then(() => {
            if (typeof callback === 'function') {
                callback();
            }
        })
        .catch(error => {
            console.error(error);
            if (typeof callback === 'function') {
                callback();
            }
        });
}

document.addEventListener('visibilitychange', () => {
    handleVisibilityChangeWithCallback(() => {
        // 여기에 다음 작업을 수행할 코드 작성
    });
});