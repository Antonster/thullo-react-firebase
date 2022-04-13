import { createReducer } from '@reduxjs/toolkit';

import type { IBoardsReducer } from 'src/interfaces';

import { addBoard, getBoards } from './actions';

const initialState: IBoardsReducer = {
  boards: undefined,
  waiter: true,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getBoards.pending, (state) => {
      state.waiter = true;
    })
    .addCase(getBoards.fulfilled, (state, action) => {
      const { result } = action.payload;

      state.boards = result;
      state.waiter = false;
    })
    .addCase(getBoards.rejected, (state, action) => {
      state.waiter = false;
      alert(action.error.code);
    })

    .addCase(addBoard.pending, (state) => {
      state.waiter = true;
    })
    .addCase(addBoard.fulfilled, (state, action) => {
      const { result } = action.payload;

      if (state.boards) {
        state.boards = [result, ...state.boards];
      } else {
        state.boards = [result];
      }

      state.waiter = false;
    })
    .addCase(addBoard.rejected, (state, action) => {
      state.waiter = false;
      alert(action.error.code);
    });
});

export { reducer };
