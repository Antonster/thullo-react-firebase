import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import * as authAPI from 'src/api/auth';
import { IUserData, IResetPassword } from 'src/interfaces';
import { ActionType } from './common';

export const createUser = createAsyncThunk(
  ActionType.CREATE_USER,
  async ({ email, password }: IUserData) => {
    const result = await authAPI.createUser(email, password);

    return { result };
  },
);

export const signIn = createAsyncThunk(
  ActionType.SIGN_IN,
  async ({ email, password }: IUserData) => {
    const result = await authAPI.signIn(email, password);

    return { result };
  },
);

export const signOut = createAsyncThunk(ActionType.SIGN_OUT, async () => {
  const result = await authAPI.signOut();

  return { result };
});

export const sendPasswordResetEmail = createAsyncThunk(
  ActionType.SEND_MAIL,
  async (email: string) => {
    await authAPI.sendPasswordResetEmail(email);
  },
);

export const verifyCode = createAsyncThunk(ActionType.VERIFY_CODE, async (actionCode: string) => {
  await authAPI.verifyCode(actionCode);
});

export const resetPassword = createAsyncThunk(
  ActionType.RESET_PASSWORD,
  async ({ actionCode, newPassword }: IResetPassword) => {
    await authAPI.resetPassword(actionCode, newPassword);
  },
);

export const clearStatuses = createAction(ActionType.CLEAR_ERRORS);
