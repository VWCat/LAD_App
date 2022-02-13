import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import CreateMeme from "../../../components/CreateMeme";
import {
  // clearNewMemeAction,
  postMemeDataAction,
  saveNewMemeDataAction,
} from "../../../store/Memes/actions";
import {
  getMemeAuth,
  getMemesData,
  getNewMeme,
} from "../../../store/Memes/selectors";

const CreateMemePage: React.FC = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const auth = useSelector(getMemeAuth);
  const meme = useSelector(getMemesData).find((el) => el.id === id);
  const newMeme = useSelector(getNewMeme);

  const [topText, setTopText] = useState(
    id === newMeme.id ? newMeme.topText : ""
  );
  const [bottomText, setBottomText] = useState(
    id === newMeme.id ? newMeme.bottomText : ""
  );

  const createMemeHandler = () => {
    if (auth.user) {
      dispatch(
        postMemeDataAction(meme!.id, auth.user, auth.pass, topText, bottomText)
      );
    } else {
      dispatch(
        saveNewMemeDataAction({
          id: meme!.id,
          topText,
          bottomText,
        })
      );
    }
  };

  return meme ? (
    <CreateMeme
      meme={meme}
      text={{ topText, setTopText, bottomText, setBottomText }}
      createMemeHandler={createMemeHandler}
    />
  ) : (
    <Navigate to="/memes" />
  );
};

export default CreateMemePage;
