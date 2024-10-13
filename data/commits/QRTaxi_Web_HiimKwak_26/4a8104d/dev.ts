import { NavigateFunction } from 'react-router-dom';
function switchRoutesByStatus(status: string, navigate: NavigateFunction) {
  switch (status) {
    case 'waiting':
      console.log(`택시기사 배정이 시작되었습니다: ${status}`);
      navigate('/waiting');
      break;

    case 'success':
      console.log(`택시기사 배정이 완료되었습니다: ${status}`);
      navigate('/success');
      break;

    case 'riding':
      console.log(`사용자가 택시에 탑승하였습니다: ${status}`);
      navigate('/riding');
      break;

    case 'failed':
      console.log(`택시 배정에 실패했습니다: ${status}`);
      navigate('/failed');
      closeWebSocket();
      break;

    case 'finish':
      console.log(`운행이 종료되었습니다: ${status}`);
      navigate('/finish');
      closeWebSocket();
      break;

    case 'cancel':
      console.log(`성공적으로 호출을 취소했습니다: ${status}`);
      navigate('/cancel');
      closeWebSocket();
      break;

    default:
      console.error(`Invalid message status : ${status}`);
      break;
  }
}

  navigate: NavigateFunction,
          switchRoutesByStatus(status, navigate);
  navigate: NavigateFunction,
    switchRoutesByStatus(type, navigate);