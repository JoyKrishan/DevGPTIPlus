const handleVisibilityChange = async (
) => {
        `동일한 ws_url로 웹소켓이 재연결되었습니다. 연결이 끊어진 공백기간 동안 상태에 변화가 있는지 확인합니다. ${ws_url}`,
        if (
          !window.location.pathname.includes(status) &&
          !['failed', 'finish', 'cancel'].includes(status)
        ) {
          // 현재 라우트 pathname과 실제 상태가 일치하지 않고, 배정실패/하차/호출취소가 아닌 상태에서만 리다이렉션 발생
        } else
          console.log(`${status} 상태이므로 소켓 재연결을 시도하지 않습니다.`);
};
  const listener = () => {
  };
    // 화면 꺼짐/켜짐 상태 감지
    document.addEventListener('visibilitychange', listener);
      document.removeEventListener('visibilitychange', listener); // 정상적으로 연결이 종료되었을 때만 화면 꺼짐/켜짐 상태 감지 이벤트리스너 제거