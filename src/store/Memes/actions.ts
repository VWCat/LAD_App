import { Dispatch } from "react";
import makeMemesRequest from "../../network";
import { MemesActionsType, ActionsType, CreateMemeType } from "./types";

export const fetchMemesDataAction = () => {
  return async (dispatch: Dispatch<ActionsType>) => {
    dispatch({ type: MemesActionsType.setMemesLoadingTrue });
    const { data, status } = await makeMemesRequest({ url: "get_memes" });
    console.log(status);

    if (status === 200) {
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
    dispatch({ type: MemesActionsType.setMemesLoadingTrue });
    const { data, status } = await makeMemesRequest({
      method: "POST",
      url: "caption_image",
      data: {
        template_id: id,
        username: user,
        password: pass,
        text0: topText,
        text1: bottomText,
      },
    });
    console.log(status);

    if (status === 200) {
      dispatch({ type: MemesActionsType.fetchMemesData, payload: data });
    } else {
      dispatch({ type: MemesActionsType.setMemesLoadingFalse });
    }
  };
};

export const saveNewMemeDataAction = (newMeme: CreateMemeType) => {
  return {
    type: MemesActionsType.saveNewMemeData,
    payload: newMeme,
  };
};
