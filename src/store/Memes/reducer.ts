import {
  ActionsType,
  OneMemeType,
  MemesReducerType,
  MemesActionsType,
  OneMyMemeType,
} from "./types";

const initialState: MemesReducerType = {
  memes: [] as OneMemeType[],
  myMemes: [] as OneMyMemeType[],
  isLoading: false,
  isSending: false,
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
    case MemesActionsType.fetchNewMemeData: {
      return {
        ...state,
        myMemes: [...state.myMemes, action.payload],
        newMeme: initialState.newMeme,
        isSending: false,
      };
    }
    case MemesActionsType.setNewMemeData: {
      return { ...state, newMeme: action.payload };
    }
    // case MemesActionsType.clearNewMemeData: {
    //   return { ...state, newMeme: initialState.newMeme };
    // }
    case MemesActionsType.setMemesLoadingTrue: {
      return { ...state, isLoading: true };
    }
    case MemesActionsType.setMemesLoadingFalse: {
      return { ...state, isLoading: false };
    }
    case MemesActionsType.setMemeSendingTrue: {
      return { ...state, isSending: true };
    }
    case MemesActionsType.setMemeSendingFalse: {
      return { ...state, isSending: false };
    }
    default:
      return state;
  }
};

export default MemesReducer;
