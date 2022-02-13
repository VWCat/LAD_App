import { Dispatch } from "react";
import makeMemesRequest from "../../network";
import { MemesActionsType, ActionsType, CreateMemeType } from "./types";

export const fetchMemesDataAction = () => {
  return async (dispatch: Dispatch<ActionsType>) => {
    dispatch({ type: MemesActionsType.setMemesLoadingTrue });
    const { data, success } = await makeMemesRequest();

    if (success) {
      dispatch({ type: MemesActionsType.fetchMemesData, payload: data });
    } else {
      dispatch({ type: MemesActionsType.setMemesLoadingFalse });
    }
  };
};

export const postMemeDataAction = (
  id: string,
  user: string,
  pass: string,
  topText: string,
  bottomText: string
) => {
  return async (dispatch: Dispatch<ActionsType>) => {
    dispatch({ type: MemesActionsType.setMemeSendingTrue });
    const { data, success } = await makeMemesRequest("POST", {
      template_id: id,
      username: user,
      password: pass,
      text0: topText,
      text1: bottomText,
    });

    if (success) {
      dispatch({ type: MemesActionsType.fetchNewMemeData, payload: data });
    } else {
      dispatch({ type: MemesActionsType.setMemeSendingFalse });
    }
  };
};

export const saveNewMemeDataAction = (newMeme: CreateMemeType) => {
  return {
    type: MemesActionsType.setNewMemeData,
    payload: newMeme,
  };
};

// export const clearNewMemeAction = () => {
//   return {
//     type: MemesActionsType.clearNewMemeData,
//   };
// };
