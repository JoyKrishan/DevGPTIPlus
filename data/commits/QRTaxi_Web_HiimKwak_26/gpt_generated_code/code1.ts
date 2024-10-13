async function example() {
  const requestData = { /* ... */ };

  try {
    const response = await fetchData(requestData);
    
    if ('status' in response) {
      // Success response
      if (response.status === 'success') {
        const successData = response.data;
        // 성공 데이터 사용
      }
    } else {
      // Failed response
      const errorMessage = response.message;
      // 실패 메시지 사용
    }
  } catch (error) {
    // 예외 처리
    console.error('An error occurred:', error);
  }
}

example();