import * as yup from 'yup';
import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { Input, FormControl, FormLabel, Button } from '@chakra-ui/react';
import { KeyPersonFormState, CompanyResisterFormErrors } from '../types/interface';
import axios from 'axios';

    const RegistrationForm: React.FC = () => {

    const formSchema = yup.object().shape({
        department: yup.string(),
        post: yup.string(),
        name: yup.string(),
        email: yup.string().email('有効なメールアドレスを入力してください'),
    });
      
    const [formState, setFormState] = useState<KeyPersonFormState>({
        department: '',
        post: '',
        name: '',
        email: '',
    });
    const [errors, setErrors] = useState<CompanyResisterFormErrors>({});
      
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({
        ...formState,
        [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = async () => {
        try {
          await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/key_persons`,{
            key_person: {
              department: formState.department,
              post: formState.post,
              name: formState.name,
              email: formState.email 
            }
          });
        } catch (error) {
          console.error(error);
        }
    };
  
    return (
      <form className='mt-16 mx-80' onSubmit={handleSubmit}>
        <FormControl isInvalid={!!errors.department} mb={5}>
          <FormLabel htmlFor='department'>部署</FormLabel>
          <Input id='department' name='department' type='text' onChange={handleChange} />
        </FormControl>

        <FormControl isInvalid={!!errors.companyWebsite} mb={5}>
          <FormLabel htmlFor='post'>役職</FormLabel>
          <Input id='post' name='post' type='text' onChange={handleChange} />
        </FormControl>

        <FormControl isInvalid={!!errors.name} mb={5}>
          <FormLabel htmlFor='name'>氏名</FormLabel>
          <Input id='name' name='name' type='text' onChange={handleChange} />
        </FormControl>

        <FormControl isInvalid={!!errors.email} mb={5}>
          <FormLabel htmlFor='email'>メールアドレス</FormLabel>
          <Input id='email' name='email' type='text' onChange={handleChange} />
        </FormControl>

        <Button mt={4} colorScheme='blue' type="submit">登録</Button>
        <Button mt={4} ml={6} colorScheme='blue' type="submit">
           <Link href={'/dashbord'}>ダッシュボード</Link>
        </Button>
      </form>
    );
  };

  export default RegistrationForm;