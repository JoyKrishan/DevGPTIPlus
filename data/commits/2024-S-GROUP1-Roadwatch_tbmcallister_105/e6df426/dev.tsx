  const steps = ['General Info', 'Location', 'Create Account'];
  const [currentStep, setCurrentStep] = useState(0);
  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  const handleCreateAccount = () => {
    // TODO: Create the User
    console.log(formData);
    return 'Account Created';
  const getStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <GeneralInfo
            currentStep={currentStep}
            steps={steps}
            updateData={updateFormData}
            handleSubmit={handleNext}
          />
        );
      case 1:
        return (
          <SignUp
            currentStep={currentStep}
            steps={steps}
            updateData={updateFormData}
            handleBack={handleBack}
            handleSubmit={handleNext}
          />
        );
      case 2:
        return (
          <CreateAccount
            currentStep={currentStep}
            steps={steps}
            updateData={updateFormData}
            handleBack={handleBack}
            handleSubmit={handleNext}
          />
        );
      default:
        return;
    }
      {currentStep === steps.length ? (
        <div>{handleCreateAccount()}</div>
      ) : (
        <div>{getStepContent()}</div>
      )}