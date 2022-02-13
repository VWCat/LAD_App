import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type ErrorPropsType = {
  imgURL: string;
  errCode: number;
};

const StyledError = styled.img`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 50px;
`;

const Error: React.FC<ErrorPropsType> = (props) => {
  const { imgURL, errCode } = props;

  const nav = useNavigate();
  const goBack = () => nav(-1);

  return (
    <>
      <StyledError src={imgURL} alt={`Error ${errCode}`} />
      <button type="button" onClick={goBack}>
        Назад
      </button>
      ;
    </>
  );
};
export default Error;
