import { UserStatus } from '@/utils/types/user';
import UserApi from '@/utils/api/user';
async function handleVisibilityChange(
  ws_url: string,
  id: UserStatus['id'],
  navigate: (path: string) => void,
) {
  if (document.hidden) {
    console.log('background');
    // 페이지가 백그라운드로 가려질 때 실행할 로직
  } else {
    console.log('now visible');
    // 기존 소켓이 연결 상태였다가 화면 꺼짐으로 인해 끊어진 상태.
    // id값이 변하지 않았고 다시 같은 url로 소켓 연결하면 됨
    if (!socket) {
      socket = new WebSocket(ws_url);
      console.log(
        `동일한 ws_url로 웹소켓이 재연결되었습니다. 연결이 끊어진 공백기간 동안 상태에 변화가 있는지 확인합니다. id=${id}, url=${ws_url}`,
      );

      const response = await UserApi.postCheckStatus({ assign_id: id });

      if ('status' in response) {
        const { status } = response;
        if (!window.location.pathname.includes(status)) {
          // 현재 라우트 pathname과 실제 상태가 일치하지 않으면 리다이렉션 발생
          console.log(
            `서버 상태와 클라이언트 상태 간 불일치가 감지되었습니다. ${status} 라우트로 이동합니다.`,
          );
          switch (status) {
            case 'success':
              navigate('/success');
              break;
            case 'failed':
              navigate('/failed');
              closeWebSocket();
              break;
            case 'cancel':
              navigate('/cancel');
              closeWebSocket();
              break;
            case 'riding':
              navigate('/riding');
              break;
            case 'finish':
              navigate('/finish');
              closeWebSocket();
              break;
            default:
              console.error(`Invalid message type : ${status}`);
              break;
          }
        }
      } else {
        throw new Error(response.detail);
      }
    } else console.log(`소켓 연결이 살아있는 상태입니다. ${socket.url}`);
  }
}

  // 화면 꺼짐/켜짐 상태 감지
  document.addEventListener('visibilitychange', () => {
    handleVisibilityChange(ws_url, id, navigate).catch(error =>
      console.error(error),
    );
  });

      // 다시호출 시 새로운 id로 새 웹소켓 연결

        `웹소켓 서버가 죽었거나 네트워크 장애로 인해 연결이 종료되었습니다(code=${event.code}).`,
    } else {
      console.log(`연결이 정상적으로 종료되었습니다(code=${event.code})`);
      document.removeEventListener('visibilitychange', () => {
        handleVisibilityChange(ws_url, id, navigate).catch(error =>
          console.error(error),
        );
      }); // 정상적으로 연결이 종료되었을 때만 화면 꺼짐/켜짐 상태 감지 이벤트리스너 제거