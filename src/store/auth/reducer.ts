import { createReducer } from '@reduxjs/toolkit';

import { createUser, signIn, signOut } from './actions';

interface Auth {
  login: boolean;
}

const initialState: Auth = {
  login: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createUser.fulfilled, (state, action) => {
      const { login } = action.payload;
      state.login = login;
    })
    .addCase(signIn.fulfilled, (state, action) => {
      const { login } = action.payload;
      state.login = login;
    })
    .addCase(signOut.fulfilled, (state, action) => {
      const { login } = action.payload;
      state.login = login;
    });
});

export { reducer };
