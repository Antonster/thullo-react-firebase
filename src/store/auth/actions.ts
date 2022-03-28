import { createAsyncThunk } from '@reduxjs/toolkit';

import * as authAPI from 'src/api/auth';
import { UserData } from 'src/interfaces';
import { ActionType } from './common';

export const createUser = createAsyncThunk(
  ActionType.CREATE_USER,
  async ({ email, password }: UserData) => {
    const login = await authAPI.createUser(email, password);

    return { login };
  },
);

export const signIn = createAsyncThunk(
  ActionType.SIGN_IN,
  async ({ email, password }: UserData) => {
    const login = await authAPI.signIn(email, password);

    return { login };
  },
);

export const signOut = createAsyncThunk(ActionType.SIGN_OUT, async () => {
  const login = await authAPI.signOut();

  return { login };
});

export const resetPassword = createAsyncThunk(ActionType.RESET_PASSWORD, async (email: string) => {
  await authAPI.resetPassword(email);
});
