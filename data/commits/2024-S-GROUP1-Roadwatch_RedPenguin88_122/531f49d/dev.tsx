import { useCreateUserMutation } from '@/store';
import { useNavigate } from 'react-router-dom';
import { User } from '@/types';
  const [createUser] = useCreateUserMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<User>({
    phoneNumber: '',
    dob: '',
    createUser(formData)
      .unwrap()
      .then(() => navigate('/'))
      .catch((error) => console.error('rejected', error));
            handleSubmit={handleCreateAccount}
  return <div className={styles['Register']}>{getStepContent()}</div>;