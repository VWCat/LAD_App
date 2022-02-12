import React from "react";
import styled from "styled-components";

type InputPropsType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  type: string;
  title: string;
};

const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  font-size: 24px;
  align-self: last baseline;
  input {
    font-size: 24px;
    margin-bottom: 20px;
    margin-left: 20px;
  }
`;

const Input: React.FC<InputPropsType> = (props) => {
  const { value, setValue, placeholder, type, title } = props;
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <StyledInput>
      <span>{title}</span>
      <input
        placeholder={placeholder}
        type={type}
        onChange={changeHandler}
        value={value}
        required={type === "password"}
      />
    </StyledInput>
  );
};

export default Input;
