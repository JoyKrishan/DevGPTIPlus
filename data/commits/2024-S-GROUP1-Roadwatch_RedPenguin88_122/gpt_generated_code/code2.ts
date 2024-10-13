const handleCreateAccount = () => {
  updateFormData('password', formData.password, (updatedData) => {
    createUser(updatedData)
      .unwrap()
      .then(() => navigate('/'))
      .catch((error) => console.error('rejected', error));
  });
};