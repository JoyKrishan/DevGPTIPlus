async function example() {
  const requestData = { /* ... */ };

  try {
    const response = await fetchData(requestData);
    
    if ((response as SuccessResponse).status === 'success') {
      const successData = (response as SuccessResponse).data;
      // 성공 데이터 사용
    } else {
      const errorMessage = (response as FailedResponse).message;
      // 실패 메시지 사용
    }
  } catch (error) {
    // 예외 처리
    console.error('An error occurred:', error);
  }
}

example();