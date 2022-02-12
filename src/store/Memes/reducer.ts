import {
  ActionsType,
  OneMemeType,
  MemesReducerType,
  MemesActionsType,
} from "./types";

const initialState: MemesReducerType = {
  memes: [] as OneMemeType[],
  isLoading: false,
  newMeme: {
    id: "",
    topText: "",
    bottomText: "",
  },
  authMeme: {
    user: "",
    pass: "",
  },
};

const MemesReducer = (
  state = initialState,
  action: ActionsType
): MemesReducerType => {
  switch (action.type) {
    case MemesActionsType.fetchMemesData: {
      return { ...state, memes: action.payload, isLoading: false };
    }
    case MemesActionsType.setMemesLoadingTrue: {
      return { ...state, isLoading: true };
    }
    case MemesActionsType.setMemesLoadingFalse: {
      return { ...state, isLoading: false };
    }
    default:
      return state;
  }
};

export default MemesReducer;
