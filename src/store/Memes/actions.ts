import { Dispatch } from "react";
import makeMemesRequest from "../../network";
import {
  MemesActionsType,
  ActionsType,
  CreateMemeType,
  OneMyMemeType,
} from "./types";

export const fetchMemesDataAction = () => {
  return async (dispatch: Dispatch<ActionsType>) => {
    dispatch({ type: MemesActionsType.setMemesLoadingTrue });
    const { data } = await makeMemesRequest();

    if (data.success) {
      dispatch({
        type: MemesActionsType.fetchMemesData,
        payload: data.data.memes,
      });
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
    const { data } = await makeMemesRequest("POST", {
      template_id: id,
      username: user,
      password: pass,
      text0: topText,
      text1: bottomText,
    });

    if (data.success) {
      const newMyMeme: OneMyMemeType = { id, ...data.data };
      const myMemes: { myMemesArr: OneMyMemeType[] } = {
        myMemesArr: [newMyMeme],
      };

      if (localStorage.myMemes)
        myMemes.myMemesArr.push(...JSON.parse(localStorage.myMemes).myMemesArr);

      localStorage.setItem("myMemes", JSON.stringify(myMemes));
      dispatch({
        type: MemesActionsType.fetchNewMemeData,
        payload: { id, ...data.data },
      });
    } else {
      dispatch({ type: MemesActionsType.setMemeSendingFalse });
      alert(data.error_message);
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
