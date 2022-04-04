import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from 'src/firebase';

import { Auth, Boards } from 'src/components';
import { SignIn, SignUp, ForgotPassword, ResetPassword } from 'src/components/auth/components';
import { Header, ContentContainer, Waiter } from 'src/components/common';
import { authActionCreator } from 'src/store/actions';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { login, waiter, initialLoading } = useAppSelector((root) => root.auth);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        const { uid } = user;
        dispatch(authActionCreator.setUser(uid));
      } else {
        dispatch(authActionCreator.setUser(undefined));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Header />
      <ContentContainer>
        {!initialLoading && (
          <Routes>
            {login ? (
              <>
                <Route index element={<Navigate to="/boards" />} />
                <Route path="auth/*" element={<Navigate to="/boards" />} />
                <Route path="boards">
                  <Route index element={<Boards />} />
                  <Route path=":boardId" element={<div>board/123</div>} />
                </Route>
              </>
            ) : (
              <>
                <Route index element={<div>main</div>} />
                <Route path="boards/*" element={<Navigate to="/" />} />
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
        )}
      </ContentContainer>
      {waiter && <Waiter $size="30px" />}
    </>
  );
};

export default App;
