import { LogBox } from 'react-native';
  LogBox.ignoreLogs(['??']);

  // validator
  // run when submitted

              <Dialog.Description >
                    key={'description'}
                    placeholder={post.description || ''}
                    sx={{ borderWidth: 1, size: '$5', width: '95%' }}
                    <Button backgroundColor={'$red9'} aria-label='Close' type='submit'>