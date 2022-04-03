import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { MainTextField, PrimaryButton } from 'src/components/common';
import { authActionCreator } from 'src/store/actions';
import { resetPasswordStatusMessages } from 'src/constants';
import * as S from '../../styles';

const validationSchema = yup.object({
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
});

const ResetPassword: React.FC = () => {
  const dispatch = useAppDispatch();
  const { resetPasswordStatus } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      password: '',
      passwordConfirmation: '',
    },
    validationSchema,
    onSubmit: (value) => {
      dispatch(authActionCreator.clearStatuses());
      dispatch(
        authActionCreator.resetPassword({
          actionCode: searchParams.get('oobCode') || '',
          newPassword: value.password,
        }),
      );
    },
  });

  useEffect(() => {
    return () => {
      dispatch(authActionCreator.clearStatuses());
    };
  }, [dispatch]);

  useEffect(() => {
    if (searchParams.get('oobCode')) {
      dispatch(authActionCreator.clearStatuses());
      dispatch(authActionCreator.verifyCode(searchParams.get('oobCode') || ''));
    } else {
      navigate('/auth');
    }
  }, [dispatch, navigate, searchParams]);

  return (
    <S.AuthForm onSubmit={handleSubmit}>
      {resetPasswordStatus !== 'changed' && (
        <>
          <S.Title>Enter new password</S.Title>
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
          <MainTextField
            fullWidth
            id="passwordConfirmation"
            name="passwordConfirmation"
            label="Confirm your password"
            type="password"
            value={values.passwordConfirmation}
            onChange={handleChange}
            error={touched.passwordConfirmation && !!errors.passwordConfirmation}
            helperText={touched.passwordConfirmation && errors.passwordConfirmation}
          />
        </>
      )}
      {resetPasswordStatus && resetPasswordStatus !== 'changed' && (
        <S.Message $color="error">{resetPasswordStatusMessages[resetPasswordStatus]}</S.Message>
      )}
      {resetPasswordStatus === 'changed' && (
        <S.Message $color="success">Password has been changed</S.Message>
      )}
      {resetPasswordStatus !== 'changed' && (
        <PrimaryButton fullWidth type="submit">
          Change password
        </PrimaryButton>
      )}
    </S.AuthForm>
  );
};

export default ResetPassword;
