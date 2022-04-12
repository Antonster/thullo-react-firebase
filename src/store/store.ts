import { configureStore } from '@reduxjs/toolkit';

import { auth, boards } from './rootReducer';

export const store = configureStore({
  reducer: {
    auth,
    boards,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
