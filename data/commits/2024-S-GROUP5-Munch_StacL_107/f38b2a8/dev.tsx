import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';
import { router, usePathname } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, set, useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import UserInput from '@/components/UserInput';
import { UserContext } from '@/contexts/UserContext';
import { Byte, Recipe } from '@/types/post';
      Toast.show({text1: 'Post edited!',});
      queryClient.invalidateQueries({ queryKey: [postId] });
      Toast.show({text1: 'Error, post not edited. Please submit a bug report.',});