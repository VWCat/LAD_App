import React from "react";
import styled from "styled-components";

type ErrorPropsType = {
  imgURL: string;
  errCode: number;
  goBackHandler: () => void;
};

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  img {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 50px;
    object-fit: contain;
  }
  button {
    width: 300px;
    background-color: var(--main-color);
    border: 1px solid var(--title-color);
    padding: 5px 50px;
    text-align: center;
    color: var(--title-color);
    font-size: calc(var(--text-size) - 6px);
  }
`;

const Error: React.FC<ErrorPropsType> = (props) => {
  const { imgURL, errCode, goBackHandler } = props;

  return (
    <StyledError>
      <img src={imgURL} alt={`Error ${errCode}`} />
      <button type="button" onClick={goBackHandler}>
        Назад
      </button>
    </StyledError>
  );
};
export default Error;
