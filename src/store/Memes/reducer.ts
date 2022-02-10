import {
  ActionsType,
  OneMemeType,
  MemesReducerType,
  MemesActionsType,
} from "./types";

const initialState: MemesReducerType = {
  memes: [] as OneMemeType[],
};

const MemesReducer = (
  state = initialState,
  action: ActionsType
): MemesReducerType => {
  switch (action.type) {
    case MemesActionsType.fetchMemesData: {
      return { ...state, memes: action.payload };
    }
    default:
      return state;
  }
};

export default MemesReducer;
