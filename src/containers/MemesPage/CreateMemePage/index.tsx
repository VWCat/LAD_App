import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import CreateMeme from "../../../components/CreateMeme";
import {
  postMemeDataAction,
  saveNewMemeDataAction,
} from "../../../store/Memes/actions";
import { getMemesData, getNewMeme } from "../../../store/Memes/selectors";
import { getUser } from "../../../store/User/selectors";

const CreateMemePage: React.FC = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const user = useSelector(getUser);
  const meme = useSelector(getMemesData).find((el) => el.id === id);
  const newMeme = useSelector(getNewMeme);

  const [topText, setTopText] = useState(
    id === newMeme.id ? newMeme.topText : ""
  );
  const [bottomText, setBottomText] = useState(
    id === newMeme.id ? newMeme.bottomText : ""
  );

  const createMemeHandler = () => {
    if (user.name) {
      dispatch(
        postMemeDataAction(meme!.id, user.name, user.pass, topText, bottomText)
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
