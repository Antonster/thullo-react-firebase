import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import 'src/firebase';
import { Auth } from 'src/components';
import { SignIn, SignUp, ForgotPassword, ResetPassword } from 'src/components/auth/components';
import { Header, ContentContainer, Waiter } from 'src/components/common';

import type { RootState } from 'src/store/store';

const App: React.FC = () => {
  const { login, waiter } = useSelector((root: RootState) => root.auth);

  return (
    <>
      <Header />
      <ContentContainer>
        <Routes>
          {login ? (
            <>
              <Route index element={<Navigate to="/boards" />} />
              <Route path="auth" element={<Navigate to="/boards" />} />
              <Route path="boards">
                <Route index element={<div>boards</div>} />
                <Route path=":boardId" element={<div>board/123</div>} />
              </Route>
            </>
          ) : (
            <>
              <Route index element={<div>main</div>} />
              <Route path="auth" element={<Auth />}>
                <Route index element={<SignIn />} />
                <Route path="new-user" element={<SignUp />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="reset-password" element={<ResetPassword />} />
              </Route>
            </>
          )}
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </ContentContainer>
      {waiter && <Waiter size="30px" />}
    </>
  );
};

export default App;
