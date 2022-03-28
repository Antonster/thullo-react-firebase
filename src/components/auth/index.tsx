import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Outlet, useLocation } from 'react-router-dom';

import { MainWrapper, MainLink } from 'src/components/common';
import * as S from './styles';

const Auth: React.FC = () => {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <S.Auth>
      <MainWrapper
        width={isMobile ? '100%' : '500px'}
        height={isMobile ? '100%' : undefined}
        padding="36px"
      >
        <Outlet />
        <Divider />
        <S.Footer>
          <S.LinksContainer>
            {pathname === '/auth' && (
              <>
                <MainLink to="/auth/reset-password">{`Can't login?`}</MainLink>
                <MainLink to="/auth/new-user">Sign up for an account</MainLink>
              </>
            )}
            {pathname === '/auth/new-user' && (
              <MainLink to="/auth">Do you already have an account? Sign in</MainLink>
            )}
            {pathname === '/auth/reset-password' && <MainLink to="/auth">Back to sign in</MainLink>}
          </S.LinksContainer>
        </S.Footer>
      </MainWrapper>
    </S.Auth>
  );
};

export default Auth;
