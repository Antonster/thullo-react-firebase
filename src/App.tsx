import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import 'src/firebase';
import { authActionCreator } from 'src/store/actions';

import type { RootState } from 'src/store/store';

const App: React.FC = () => {
  const auth = useSelector((root: RootState) => root.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      authActionCreator.signIn({
        email: 'test@gmail.com',
        password: '123456',
      }),
    );
  }, [dispatch]);
  console.log(auth);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
