import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as boardsAPI from 'src/api/boards';
import type { IBoardsReducer, IAddBoardData } from 'src/interfaces';

export const getBoards = createAsyncThunk('boards/get-boards', async () => {
  const result = await boardsAPI.getBoards();

  return result;
});

export const addBoard = createAsyncThunk('boards/add-board', async (data: IAddBoardData) => {
  const { title, description, image } = data;
  const id = await boardsAPI.addBoard(data);
  const imageUrl = image ? URL.createObjectURL(image) : image;

  const result = { id, title, description, image: imageUrl };

  return result;
});

const { reducer } = createSlice({
  name: 'boards',
  initialState: <IBoardsReducer>{
    boards: undefined,
    waiter: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBoards.pending, (state) => {
        state.waiter = true;
      })
      .addCase(getBoards.fulfilled, (state, action) => {
        state.boards = action.payload;
        state.waiter = false;
      })
      .addCase(getBoards.rejected, (state, action) => {
        state.waiter = false;
        alert(action.error.message);
      });

    builder
      .addCase(addBoard.pending, (state) => {
        state.waiter = true;
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        if (state.boards) {
          state.boards = [action.payload, ...state.boards];
        } else {
          state.boards = [action.payload];
        }

        state.waiter = false;
      })
      .addCase(addBoard.rejected, (state, action) => {
        state.waiter = false;
        alert(action.error.message);
      });
  },
});

export default reducer;
