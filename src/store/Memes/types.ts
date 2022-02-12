/* eslint-disable no-unused-vars */
export enum MemesActionsType {
  fetchMemesData = "FETCH_MEMES_DATA",
  setMemesLoadingTrue = "SET_MEMES_LOADING_TRUE",
  setMemesLoadingFalse = "SET_MEMES_LOADING_FALSE",
  saveNewMemeData = "SAVE_NEW_MEME_DATA",
}

export type OneMemeType = {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
};

export type CreateMemeType = {
  id: string;
  topText: string;
  bottomText: string;
};

export type MemeAuthType = {
  user: string;
  pass: string;
};

export type MemesReducerType = {
  memes: OneMemeType[];
  isLoading: boolean;
  newMeme: CreateMemeType;
  authMeme: MemeAuthType;
};

export type fetchMemesDataActionType = {
  type: MemesActionsType.fetchMemesData;
  payload: OneMemeType[];
};

export type setMemesLoadingActionType = {
  type:
    | MemesActionsType.setMemesLoadingTrue
    | MemesActionsType.setMemesLoadingFalse;
};

export type ActionsType = fetchMemesDataActionType | setMemesLoadingActionType;
