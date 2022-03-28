import { useFormik } from 'formik';
import * as yup from 'yup';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
  MainWrapper,
  MainTextField,
  PrimaryButton,
  MainLink,
} from 'src/components/common';
import { signUpRoute } from 'src/routesList';
import * as S from './styles';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const SignIn: React.FC = () => {
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (value) => {
      alert(JSON.stringify(value, null, 2));
    },
  });
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <S.SignIn>
      <MainWrapper
        width={isMobile ? '100%' : '500px'}
        height={isMobile ? '100%' : undefined}
        padding="36px"
      >
        <S.SignInForm onSubmit={handleSubmit}>
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
          <PrimaryButton
            fullWidth
            color="primary"
            variant="contained"
            type="submit"
          >
            Sign In
          </PrimaryButton>
        </S.SignInForm>
        <Divider />
        <S.Footer>
          <S.LinksContainer>
            <MainLink to="/">{`Can't log in?`}</MainLink>
            <MainLink to={`/${signUpRoute}`}>Sign up for an account</MainLink>
          </S.LinksContainer>
        </S.Footer>
      </MainWrapper>
    </S.SignIn>
  );
};

export default SignIn;
