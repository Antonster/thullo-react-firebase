import { createReducer } from '@reduxjs/toolkit';

import type { IAuthReducer } from 'src/interfaces';

import {
  createUser,
  signIn,
  signOut,
  sendPasswordResetEmail,
  verifyCode,
  resetPassword,
  clearStatuses,
} from './actions';

const initialState: IAuthReducer = {
  login: false,
  createUserStatus: undefined,
  signInStatus: undefined,
  signOutStatus: undefined,
  sendPasswordResetEmailStatus: undefined,
  verifyCodeStatus: undefined,
  resetPasswordStatus: undefined,
  waiter: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createUser.pending, (state) => {
      state.waiter = true;
    })
    .addCase(createUser.fulfilled, (state, action) => {
      const { result } = action.payload;

      state.login = result;
      state.waiter = false;
    })
    .addCase(createUser.rejected, (state, action) => {
      state.waiter = false;
      state.createUserStatus = action.error.code;
    })

    .addCase(signIn.pending, (state) => {
      state.waiter = true;
    })
    .addCase(signIn.fulfilled, (state, action) => {
      const { result } = action.payload;

      state.login = result;
      state.waiter = false;
    })
    .addCase(signIn.rejected, (state, action) => {
      state.waiter = false;
      state.signInStatus = action.error.code;
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
      state.signOutStatus = action.error.code;
    })

    .addCase(sendPasswordResetEmail.pending, (state) => {
      state.waiter = true;
    })
    .addCase(sendPasswordResetEmail.fulfilled, (state) => {
      state.waiter = false;
      state.sendPasswordResetEmailStatus = 'sent';
    })
    .addCase(sendPasswordResetEmail.rejected, (state, action) => {
      state.waiter = false;
      state.sendPasswordResetEmailStatus = action.error.code;
    })

    .addCase(verifyCode.pending, (state) => {
      state.waiter = true;
    })
    .addCase(verifyCode.fulfilled, (state) => {
      state.waiter = false;
    })
    .addCase(verifyCode.rejected, (state, action) => {
      state.waiter = false;
      state.verifyCodeStatus = action.error.code;
    })

    .addCase(resetPassword.pending, (state) => {
      state.waiter = true;
    })
    .addCase(resetPassword.fulfilled, (state) => {
      state.waiter = false;
    })
    .addCase(resetPassword.rejected, (state, action) => {
      state.waiter = false;
      state.resetPasswordStatus = action.error.code;
    })

    .addCase(clearStatuses, (state) => {
      state.createUserStatus = undefined;
      state.signInStatus = undefined;
      state.signOutStatus = undefined;
      state.sendPasswordResetEmailStatus = undefined;
      state.verifyCodeStatus = undefined;
      state.resetPasswordStatus = undefined;
    });
});

export { reducer };
