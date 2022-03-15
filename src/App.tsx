/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Header, ContentWrapper } from 'src/components';

import 'src/firebase';
import { authActionCreator } from 'src/store/actions';

import type { RootState } from 'src/store/store';

const App: React.FC = () => {
  const { login } = useSelector((root: RootState) => root.auth);
  const dispatch = useDispatch();

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
      <ContentWrapper>
        <Routes>
          {login ? (
            <>
              <Route path="boards">
                <Route index element={<div>boards</div>} />
                <Route path=":boardId" element={<div>board/123</div>} />
              </Route>
              <Route path="/" element={<Navigate to="boards" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<div>main</div>} />
              <Route path="sign-in" element={<div>sign-in</div>} />
              <Route path="sign-up" element={<div>sign-up</div>} />
            </>
          )}
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </ContentWrapper>
    </>
  );
};

export default App;
