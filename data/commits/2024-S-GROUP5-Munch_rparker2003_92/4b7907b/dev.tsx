import { Dispatch, SetStateAction, createContext } from 'react';
import { UserType } from '../types/firebaseTypes';
  user_data: UserType;
  user_loading?: boolean;
  user_data: {} as UserType,