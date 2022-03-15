import { createReducer } from '@reduxjs/toolkit';

import { createUser, signIn, signOut } from './actions';

interface Auth {
  login: boolean;
  waiter: boolean;
}

const initialState: Auth = {
  login: false,
  waiter: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createUser.pending, (state) => {
      state.waiter = true;
    })
    .addCase(createUser.fulfilled, (state, action) => {
      const { login } = action.payload;

      state.login = login;
      state.waiter = false;
    })
    .addCase(createUser.rejected, (state, action) => {
      state.waiter = false;
      alert(action.error.message);
    })

    .addCase(signIn.pending, (state) => {
      state.waiter = true;
    })
    .addCase(signIn.fulfilled, (state, action) => {
      const { login } = action.payload;

      state.login = login;
      state.waiter = false;
    })
    .addCase(signIn.rejected, (state, action) => {
      state.waiter = false;
      alert(action.error.message);
    })

    .addCase(signOut.pending, (state) => {
      state.waiter = true;
    })
    .addCase(signOut.fulfilled, (state) => {
      state.login = false;
      state.waiter = false;
    })
    .addCase(signOut.rejected, (state, action) => {
      state.waiter = false;
      alert(action.error.message);
    });
});

export { reducer };
