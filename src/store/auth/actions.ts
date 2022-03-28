import { createAsyncThunk } from '@reduxjs/toolkit';

import * as authAPI from 'src/api/auth';
import { ActionType } from './common';

interface UserData {
  email: string;
  password: string;
}

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
