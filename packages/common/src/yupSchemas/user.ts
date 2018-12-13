import * as yup from 'yup';

export const userIdNotLongEnough = 'userId must be at least 3 characters';
export const passwordNotLongEnough = 'password must be at least 3 characters';

export const registerPasswordValidation = yup
  .string()
  .min(3, passwordNotLongEnough)
  .max(255)
  .required();

export const validUserSchema = yup.object().shape({
  password: registerPasswordValidation,
  userId: yup
    .string()
    .min(3, userIdNotLongEnough)
    .max(255)
    .required(),
});