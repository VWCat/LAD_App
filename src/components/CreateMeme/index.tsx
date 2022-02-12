import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  postMemeDataAction,
  saveNewMemeDataAction,
} from "../../store/Memes/actions";
import { getMemeAuth, getNewMeme } from "../../store/Memes/selectors";
import { OneMemeType } from "../../store/Memes/types";
import Input from "../common/Input";

type CreateMemePropsType = {
  meme: OneMemeType;
};

const StyledCreateMeme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 50%;
    margin: 20px;
  }
`;

const CreateMeme: React.FC<CreateMemePropsType> = (props) => {
  const { meme } = props;

  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  const auth = useSelector(getMemeAuth);
  const newMeme = useSelector(getNewMeme);

  const dispatch = useDispatch();

  const createMemeHandler = () => {
    if (auth.user) {
      dispatch(
        postMemeDataAction(meme.id, auth.user, auth.pass, topText, bottomText)
      );
    } else {
      dispatch(
        saveNewMemeDataAction({
          id: meme.id,
          topText,
          bottomText,
        })
      );
    }
  };

  return (
    <StyledCreateMeme>
      {meme.name}
      <img src={meme.url} alt="Шаблон мемасика" />
      <Input
        value={topText}
        setValue={setTopText}
        placeholder="Введите подпись для верхней части мема"
        type="text"
        title="Top Text"
      />
      <Input
        value={bottomText}
        setValue={setBottomText}
        placeholder="Введите подпись для нижней части мема"
        type="text"
        title="Bottom Text"
      />
      <button onClick={createMemeHandler} type="submit">
        Создать мемасик
      </button>
    </StyledCreateMeme>
  );
};

export default CreateMeme;
