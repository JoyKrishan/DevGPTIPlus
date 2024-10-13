const handleOnSubmit = async () => {
    try {
      // Set processing state to true
      setIsProcessing(true);
      // Reset form errors
      setErrors({ form: null });
  
      // Call API to login user
      const { data, error } = await apiClient.loginUser({
        email: form.email,
        password: form.password,
      });
  
      // Handle API error
      if (error) throw new Error(error);
  
      // Set user data and token if login successful
      setUser(data.user);
      apiClient.setToken(data.token);
      // Navigate to trending page
      navigate("/trending");
    } catch (error) {
      // Set form error if login fails
      setErrors({ form: error.message });
    } finally {
      // Set processing state to false regardless of success or failure
      setIsProcessing(false);
    }
  };
  