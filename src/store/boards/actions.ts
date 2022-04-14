/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import * as boardsAPI from 'src/api/boards';
import { IAddBoardData } from 'src/interfaces';
import { ActionType } from './common';

export const getBoards = createAsyncThunk(ActionType.GET_BOARDS, async () => {
  const result = await boardsAPI.getBoards();

  return { result };
});

export const addBoard = createAsyncThunk(ActionType.ADD_BOARD, async (data: IAddBoardData) => {
  const { title, description, image } = data;
  const id = await boardsAPI.addBoard({ title, description });
  const imageUrl = await boardsAPI.uploadImage(image, id);

  const result = { id, title, description, image: imageUrl };

  return { result };
});
