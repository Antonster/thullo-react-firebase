import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { MainTextField, MainButton } from 'src/components/common';
import { authActionCreator } from 'src/store/actions';
import { forgotPasswordStatusMessages } from 'src/constants';
import * as S from '../../styles';

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
});

const ForgotPassword: React.FC = () => {
  const dispatch = useAppDispatch();
  const { sendPasswordResetEmailStatus } = useAppSelector((state) => state.auth);
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
          <MainButton
            $fullWidth
            $size="big"
            $style="primary"
            type="submit"
            text="Send reset link"
          />
        </S.AuthForm>
      )}
      {sendPasswordResetEmailStatus && sendPasswordResetEmailStatus !== 'sent' && (
        <S.Message $color="error">
          {forgotPasswordStatusMessages[sendPasswordResetEmailStatus]}
        </S.Message>
      )}
      {sendPasswordResetEmailStatus === 'sent' && (
        <S.Message $color="success">Recovery email has been sent to your email address</S.Message>
      )}
    </>
  );
};

export default ForgotPassword;
