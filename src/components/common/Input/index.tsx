import React from "react";
import styled from "styled-components";

type InputPropsType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  type: React.HTMLInputTypeAttribute | undefined;
  title: string;
};

const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: var(--text-size);
  span {
    white-space: nowrap;
  }
  input {
    width: 100%;
    font-size: var(--text-size);
    margin-bottom: 20px;
    margin-left: 20px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    input {
      margin: 5px 0;
      /* margin-top: 5px;
      margin-left: 0; */
    }
  }
`;

const Input: React.FC<InputPropsType> = (props) => {
  const { value, setValue, placeholder, type, title } = props;
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <StyledInput>
      <span>{title}:</span>
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
