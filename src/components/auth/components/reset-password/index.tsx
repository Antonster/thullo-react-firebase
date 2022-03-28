import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { MainTextField, PrimaryButton } from 'src/components/common';
import { authActionCreator } from 'src/store/actions';
import * as S from '../../styles';

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
});

const ResetPassword: React.FC = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: (value) => {
      dispatch(authActionCreator.resetPassword(value.email));
    },
  });

  return (
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
      <PrimaryButton fullWidth color="primary" variant="contained" type="submit">
        Send link
      </PrimaryButton>
    </S.AuthForm>
  );
};

export default ResetPassword;
