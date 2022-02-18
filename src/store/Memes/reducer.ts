import {
  ActionsType,
  OneMemeType,
  MemesReducerType,
  MemesActionsType,
  OneMyMemeType,
  CreateMemeType,
} from "./types";

const initialState: MemesReducerType = {
  memes: [] as OneMemeType[],
  myMemes: localStorage.myMemes
    ? [...JSON.parse(localStorage.myMemes).myMemesArr]
    : ([] as OneMyMemeType[]),
  isLoading: false,
  isSending: false,
  newMeme: {} as CreateMemeType,
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
        myMemes: [action.payload, ...state.myMemes],
        newMeme: initialState.newMeme,
        isSending: false,
      };
    }
    case MemesActionsType.setNewMemeData: {
      return { ...state, newMeme: action.payload };
    }
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
