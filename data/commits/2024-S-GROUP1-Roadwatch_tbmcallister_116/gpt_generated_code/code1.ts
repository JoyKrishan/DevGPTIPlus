async function loginUser() {
  try {
    const response = await axios.post('http://localhost:3000/api/login', {
      userInput: testUserData.userName, // Using the userInput field for login
      password: testUserData.password,
    });

    console.log('Login response status code:', response.status);

    if (response.status === 200) {
      console.log('Login successful');
    } else {
      console.log('Login failed:', response.status);
    }
  } catch (error: any) {
    console.log('Error logging in:', error.message);
  }
}