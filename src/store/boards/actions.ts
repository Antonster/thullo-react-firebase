import { createAsyncThunk } from '@reduxjs/toolkit';

import * as boardsAPI from 'src/api/boards';
import { IAddBoardData } from 'src/interfaces';
import { ActionType } from './common';

export const getBoards = createAsyncThunk(ActionType.GET_BOARDS, async () => {
  const result = await boardsAPI.getBoards();

  return { result };
});

export const addBoard = createAsyncThunk(ActionType.ADD_BOARD, async (data: IAddBoardData) => {
  const { title, description, image } = data;
  const id = await boardsAPI.addBoard(data);
  const imageUrl = image ? URL.createObjectURL(image) : image;

  const result = { id, title, description, image: imageUrl };

  return { result };
});
