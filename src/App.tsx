/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import 'src/firebase';
import { authActionCreator } from 'src/store/actions';
import { SignIn, SignUp } from 'src/components';
import { Header, ContentContainer, Waiter } from 'src/components/common';
import {
  mainRoute,
  signInRoute,
  signUpRoute,
  boardsRoute,
} from 'src/routesList';

import type { RootState } from 'src/store/store';

const App: React.FC = () => {
  const { login } = useSelector((root: RootState) => root.auth);
  const dispatch = useDispatch();
  const [waiter, setWaiter] = useState(false);

  // useEffect(() => {
  //   dispatch(
  //     authActionCreator.signIn({
  //       email: 'test1@gmail.com',
  //       password: '123456',
  //     }),
  //   );
  // }, [dispatch]);

  return (
    <>
      <Header />
      <ContentContainer>
        <Routes>
          {login ? (
            <>
              <Route path={boardsRoute}>
                <Route index element={<div>boards</div>} />
                <Route path=":boardId" element={<div>board/123</div>} />
              </Route>
              <Route
                path={mainRoute}
                element={<Navigate to={`/${boardsRoute}`} />}
              />
              <Route
                path={signInRoute}
                element={<Navigate to={`/${boardsRoute}`} />}
              />
              <Route
                path={signUpRoute}
                element={<Navigate to={`/${boardsRoute}`} />}
              />
            </>
          ) : (
            <>
              <Route path={mainRoute} element={<div>main</div>} />
              <Route path={signInRoute} element={<SignIn />} />
              <Route path={signUpRoute} element={<SignUp />} />
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
