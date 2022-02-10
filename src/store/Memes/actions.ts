import { OneMemeType, MemesActionsType } from "./types";

const fetchMemesDataAction = (data: OneMemeType[]) => {
  return {
    type: MemesActionsType.fetchMemesData,
    payload: data,
  };
};

export default fetchMemesDataAction;
