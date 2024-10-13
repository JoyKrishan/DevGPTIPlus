const updateFormData = (field: string, value: string, callback?: () => void) => {
  setFormData((prevData) => {
    const newData = { ...prevData, [field]: value };
    if (callback) {
      callback(newData);
    }
    return newData;
  });
};