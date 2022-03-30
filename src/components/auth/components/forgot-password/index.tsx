import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { MainTextField, PrimaryButton } from 'src/components/common';
import { authActionCreator } from 'src/store/actions';
import type { RootState } from 'src/store/store';
import * as S from '../../styles';

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
});

const ForgotPassword: React.FC = () => {
  const dispatch = useDispatch();
  const { sendPasswordResetEmailStatus } = useSelector((state: RootState) => state.auth);
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: (value) => {
      dispatch(authActionCreator.clearStatuses());
      dispatch(authActionCreator.sendPasswordResetEmail(value.email));
    },
  });

  useEffect(() => {
    return () => {
      dispatch(authActionCreator.clearStatuses());
    };
  }, [dispatch]);

  return (
    <>
      {sendPasswordResetEmailStatus !== 'sent' && (
        <S.AuthForm onSubmit={handleSubmit}>
          <S.Title>{`Can't log in?`}</S.Title>
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
          <PrimaryButton fullWidth type="submit">
            Send reset link
          </PrimaryButton>
        </S.AuthForm>
      )}
      {sendPasswordResetEmailStatus === 'sent' && (
        <S.Sent>Recovery email has been sent to your email</S.Sent>
      )}
    </>
  );
};

export default ForgotPassword;
