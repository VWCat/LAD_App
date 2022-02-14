import React from "react";
import styled from "styled-components";
import Input from "../common/Input";

type LoginFormPropsType = {
  user: {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    pass: string;
    setPass: React.Dispatch<React.SetStateAction<string>>;
  };
  submit: () => void;
};

const StyledLoginForm = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  p {
    margin: 10px 0;
  }
`;

const LoginForm: React.FC<LoginFormPropsType> = (props) => {
  const {
    user: { name, setName, pass, setPass },
    submit,
  } = props;

  return (
    <StyledLoginForm>
      <h1>Авторизация</h1>
      <p>
        Введите логин и пароль, указанные при регистрации на сайте{" "}
        <a href="https://imgflip.com/">ImgFlip.com</a>.
      </p>
      <Input
        value={name}
        setValue={setName}
        placeholder="Введите имя пользователя"
        type="text"
        title="Login"
      />
      <Input
        value={pass}
        setValue={setPass}
        placeholder="Введите пароль"
        type="password"
        title="Password"
      />
      <button onClick={() => submit()} type="button">
        Войти
      </button>
    </StyledLoginForm>
  );
};

export default LoginForm;
