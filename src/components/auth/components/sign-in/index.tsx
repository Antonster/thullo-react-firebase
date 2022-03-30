import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { MainTextField, PrimaryButton, ErrorMessage } from 'src/components/common';
import { authActionCreator } from 'src/store/actions';
import type { RootState } from 'src/store/store';
import * as S from '../../styles';

export interface ISignInStatusMessages {
  [key: string]: string;
}

const statusMessages: ISignInStatusMessages = {
  'auth/invalid-email': 'Invalid email',
  'auth/user-disabled': 'User disabled',
  'auth/user-not-found': 'User not found',
  'auth/wrong-password': 'Wrong password',
};

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const { signInStatus } = useSelector((state: RootState) => state.auth);
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (value) => {
      dispatch(authActionCreator.clearStatuses());
      dispatch(
        authActionCreator.signIn({
          email: value.email,
          password: value.password,
        }),
      );
    },
  });

  useEffect(() => {
    return () => {
      dispatch(authActionCreator.clearStatuses());
    };
  }, [dispatch]);

  return (
    <S.AuthForm onSubmit={handleSubmit}>
      <S.Title>Login to Thullo</S.Title>
      <MainTextField
        fullWidth
        id="email"
        name="email"
        label="Enter your email"
        value={values.email}
        onChange={handleChange}
        error={touched.email && !!errors.email}
        helperText={touched.email && errors.email}
      />
      <MainTextField
        fullWidth
        id="password"
        name="password"
        label="Enter your password"
        type="password"
        value={values.password}
        onChange={handleChange}
        error={touched.password && !!errors.password}
        helperText={touched.password && errors.password}
      />
      {signInStatus && <ErrorMessage>{statusMessages[signInStatus]}</ErrorMessage>}
      <PrimaryButton fullWidth type="submit">
        Sign In
      </PrimaryButton>
    </S.AuthForm>
  );
};

export default SignIn;
