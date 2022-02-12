import { RootReducerType } from "../types";

export const getMemesData = (state: RootReducerType) => state.memes.memes;

export const getMemesIsLoading = (state: RootReducerType) =>
  state.memes.isLoading;

export const getMemeAuth = (state: RootReducerType) => state.memes.authMeme;

export const getNewMeme = (state: RootReducerType) => state.memes.newMeme;
