import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { OneMemeType } from "../../store/Memes/types";
import Input from "../common/Input";

type CreateMemePropsType = {
  meme: OneMemeType;
  text: {
    topText: string;
    setTopText: Dispatch<SetStateAction<string>>;
    bottomText: string;
    setBottomText: Dispatch<SetStateAction<string>>;
  };
  createMemeHandler: () => void;
};

const StyledCreateMeme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  img {
    width: 100%;
    margin: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 75%;
  }
`;

const CreateMeme: React.FC<CreateMemePropsType> = (props) => {
  const {
    meme,
    text: { topText, setTopText, bottomText, setBottomText },
    createMemeHandler,
  } = props;

  return (
    <StyledCreateMeme>
      {meme.name}
      <img src={meme.url} alt="Шаблон мемасика" />
      <Input
        value={topText}
        setValue={setTopText}
        placeholder="Введите первый текст"
        type="text"
        title="First Text"
      />
      <Input
        value={bottomText}
        setValue={setBottomText}
        placeholder="Введите второй текст"
        type="text"
        title="Second Text"
      />
      <button onClick={createMemeHandler} type="submit">
        Создать мемасик
      </button>
    </StyledCreateMeme>
  );
};

export default CreateMeme;
