import { z } from 'zod';

export type UserState = {
  username?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  bio?: string;
};

//registration
export const RegisterSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be 3 characters long.' }),
  password: z
    .string()
    .refine(
      (val) =>
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(
          val,
        ),
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.',
    ),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

export type RegisterSchemaInputs = z.infer<typeof RegisterSchema>;

//login
export const LoginSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be 3 characters long.' }),
  password: z
    .string()
    .refine(
      (val) =>
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(
          val,
        ),
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.',
    ),
});

export type LoginSchemaInputs = z.infer<typeof LoginSchema>;