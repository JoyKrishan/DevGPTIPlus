    document.addEventListener('visibilitychange', function handleVisibilityChange(event) {
        // 처리 로직

        // 이벤트 리스너 제거
        document.removeEventListener('visibilitychange', handleVisibilityChange);
    });