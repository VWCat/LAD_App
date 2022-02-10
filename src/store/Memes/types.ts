export enum MemesActionsType {
  // eslint-disable-next-line no-unused-vars
  fetchMemesData = "FETCH_MEMES_DATA",
}

export type OneMemeType = {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
};

export type MemesReducerType = {
  memes: OneMemeType[];
};

type fetchMemesDataActionType = {
  type: MemesActionsType.fetchMemesData;
  payload: OneMemeType[];
};

export type ActionsType = fetchMemesDataActionType;
