import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { MainTextField, MainButton } from 'src/components/common';
import { authActionCreator } from 'src/store/actions';
import { signInStatusMessages } from 'src/constants';
import * as S from '../../styles';

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const { signInStatus } = useAppSelector((state) => state.auth);
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
      {signInStatus && <S.Message $color="error">{signInStatusMessages[signInStatus]}</S.Message>}
      <MainButton $fullWidth $size="big" $style="primary" type="submit" text="Sign In" />
    </S.AuthForm>
  );
};

export default SignIn;
