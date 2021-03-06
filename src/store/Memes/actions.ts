import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
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

    if (
      data.success &&
      "data" in data &&
      data.data instanceof Object &&
      "memes" in data.data
    ) {
      dispatch({
        type: MemesActionsType.fetchMemesData,
        payload: data.data.memes.filter((el) => el.box_count === 2),
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
  bottomText: string,
  navigate: NavigateFunction
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

    if (
      data.success &&
      "data" in data &&
      data.data instanceof Object &&
      "page_url" in data.data
    ) {
      const newMyMeme: OneMyMemeType = {
        id: data.data.page_url.slice(data.data.page_url.lastIndexOf("/") + 1),
        ...data.data,
      };
      const myMemes: { myMemesArr: OneMyMemeType[] } = {
        myMemesArr: [newMyMeme],
      };

      if (localStorage.myMemes)
        myMemes.myMemesArr.push(...JSON.parse(localStorage.myMemes).myMemesArr);

      localStorage.setItem("myMemes", JSON.stringify(myMemes));

      dispatch({
        type: MemesActionsType.fetchNewMemeData,
        payload: newMyMeme,
      });

      navigate("/mymemes");
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
