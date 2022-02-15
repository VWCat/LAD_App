import { RootReducerType } from "../types";

export const getMemesData = (state: RootReducerType) => state.memes.memes;

export const getMemesIsLoading = (state: RootReducerType) =>
  state.memes.isLoading;

export const getNewMeme = (state: RootReducerType) => state.memes.newMeme;

export const getMyMemesData = (state: RootReducerType) => state.memes.myMemes;

export const getMyMemesDatalength = (state: RootReducerType) =>
  state.memes.myMemes.length;
