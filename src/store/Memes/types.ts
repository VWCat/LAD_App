/* eslint-disable no-unused-vars */
export enum MemesActionsType {
  fetchMemesData = "FETCH_MEMES_DATA",
  fetchNewMemeData = "FETCH_NEW_MEME_DATA",
  setMemesLoadingTrue = "SET_MEMES_LOADING_TRUE",
  setMemesLoadingFalse = "SET_MEMES_LOADING_FALSE",
  setMemeSendingTrue = "SET_MEME_SENDING_TRUE",
  setMemeSendingFalse = "SET_MEME_SENDING_FALSE",
  setNewMemeData = "SET_NEW_MEME_DATA",
  // clearNewMemeData = "CLEAR_NEW_MEME_DATA",
}

export type OneMemeType = {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
};

export type OneMyMemeType = {
  id: string;
  url: string;
  page_url: string;
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
  myMemes: OneMyMemeType[];
  isLoading: boolean;
  isSending: boolean;
  newMeme: CreateMemeType;
  authMeme: MemeAuthType;
};

type fetchMemesDataActionType = {
  type: MemesActionsType.fetchMemesData;
  payload: OneMemeType[];
};

type fetchNewMemeDataActionType = {
  type: MemesActionsType.fetchNewMemeData;
  payload: OneMyMemeType;
};

type setMemesLoadingActionType = {
  type:
    | MemesActionsType.setMemesLoadingTrue
    | MemesActionsType.setMemesLoadingFalse;
};

type setMemeSendingActionType = {
  type:
    | MemesActionsType.setMemeSendingTrue
    | MemesActionsType.setMemeSendingFalse;
};

type setNewMemeDataActionType = {
  type: MemesActionsType.setNewMemeData;
  payload: CreateMemeType;
};

// type clearNewMemDataActionType = {
//   type: MemesActionsType.clearNewMemeData;
// };

export type ActionsType =
  | fetchMemesDataActionType
  | fetchNewMemeDataActionType
  | setMemesLoadingActionType
  | setMemeSendingActionType
  | setNewMemeDataActionType;
// | clearNewMemDataActionType;
