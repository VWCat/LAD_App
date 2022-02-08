import React from "react";
import styled from "styled-components";

type ErrorPropsType = {
  imgURL: string;
  errCode: number;
};

const StyledError = styled.img`
  width: 100%;
  /* background-color: var(--sub-color); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 50px;
`;

const Error: React.FC<ErrorPropsType> = (props) => {
  const { imgURL, errCode } = props;

  return <StyledError src={imgURL} alt={`Error ${errCode}`} />;
};
export default Error;
