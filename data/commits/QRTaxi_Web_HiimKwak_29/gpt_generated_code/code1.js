document.addEventListener('visibilitychange', (async () => {
    await handleVisibilityChange(ws_url, id, navigate);
})());