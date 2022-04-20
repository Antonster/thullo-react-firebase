import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as authAPI from 'src/api/auth';
import type { IUserData, IResetPassword, IAuthReducer } from 'src/interfaces';

export const createUser = createAsyncThunk(
  'auth/create-user',
  async ({ email, password }: IUserData) => {
    const result = await authAPI.createUser(email, password);

    return result;
  },
);

export const signIn = createAsyncThunk('auth/sign-in', async ({ email, password }: IUserData) => {
  const result = await authAPI.signIn(email, password);

  return result;
});

export const signOut = createAsyncThunk('auth/sign-out', async () => {
  await authAPI.signOut();
});

export const sendPasswordResetEmail = createAsyncThunk('auth/send-mail', async (email: string) => {
  await authAPI.sendPasswordResetEmail(email);
});

export const verifyCode = createAsyncThunk('auth/verify-code', async (actionCode: string) => {
  await authAPI.verifyCode(actionCode);
});

export const resetPassword = createAsyncThunk(
  'auth/reset-password',
  async ({ actionCode, newPassword }: IResetPassword) => {
    await authAPI.resetPassword(actionCode, newPassword);
  },
);

const { reducer, actions } = createSlice({
  name: 'auth',
  initialState: <IAuthReducer>{
    login: undefined,
    createUserStatus: undefined,
    signInStatus: undefined,
    signOutStatus: undefined,
    sendPasswordResetEmailStatus: undefined,
    resetPasswordStatus: undefined,
    waiter: true,
    initialLoading: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.login = action.payload;
      state.waiter = false;
      state.initialLoading = false;
    },
    clearStatuses: (state) => {
      state.createUserStatus = undefined;
      state.signInStatus = undefined;
      state.signOutStatus = undefined;
      state.sendPasswordResetEmailStatus = undefined;
      state.resetPasswordStatus = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.waiter = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.login = action.payload;
        state.waiter = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.waiter = false;
        state.createUserStatus = action.error.code;
      });

    builder
      .addCase(signIn.pending, (state) => {
        state.waiter = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.login = action.payload;
        state.waiter = false;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.waiter = false;
        state.signInStatus = action.error.code;
      });

    builder
      .addCase(signOut.pending, (state) => {
        state.waiter = true;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.login = undefined;
        state.waiter = false;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.waiter = false;
        state.signOutStatus = action.error.code;
      });

    builder
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
      });

    builder
      .addCase(verifyCode.pending, (state) => {
        state.waiter = true;
      })
      .addCase(verifyCode.fulfilled, (state) => {
        state.waiter = false;
      })
      .addCase(verifyCode.rejected, (state, action) => {
        state.waiter = false;
        state.resetPasswordStatus = action.error.code;
      });

    builder
      .addCase(resetPassword.pending, (state) => {
        state.waiter = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.waiter = false;
        state.resetPasswordStatus = 'changed';
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.waiter = false;
        state.resetPasswordStatus = action.error.code;
      });
  },
});

export default reducer;
export const { setUser, clearStatuses } = actions;
