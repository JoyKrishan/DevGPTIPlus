import { UserContext } from '@/contexts/UserContext';
import axios from 'axios';
import { useContext } from 'react';
  const { token, user_data, user_id: userId } = useContext(UserContext);
        // create userData to pass to backend
        const userData = {
          ...user_data,
          bio: data.bio,
          username: data.username,
        };
        await axios
          .patch(
            `${process.env.EXPO_PUBLIC_IP_ADDR}/api/users/${userId}`, // API route
            userData, // userData to update
            { headers: { Authorization: `Bearer: ${token}` } }, // auth header
          )
          .then(() => user?.update({ username: data.username })) // update user username
          .catch((error) => console.log('error:', error.message)); // console log any errors
      }
                  placeholder={user_data.bio}