  const [, setFormData] = useState<User>({
  // ai-gen start (ChatGPT-3.5, 0)
  const updateFormData = (field: string, value: string, callback?: (data: User) => void) => {
    setFormData((prevData) => {
      const newData = { ...prevData, [field]: value };
      if (callback) {
        callback(newData);
      }
      return newData;
    });
  // ai-gen end
  // ai-gen start (ChatGPT-3.5, 2)
  const handleCreateAccount = (password: string) => {
    updateFormData('password', password, (updatedData) => {
      createUser(updatedData)
        .unwrap()
        .then(() => navigate('/'))
        .catch((error) => console.error('rejected', error));
    });
  // ai-gen end