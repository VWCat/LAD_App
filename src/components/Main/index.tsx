import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;

  a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: bold;
    :hover {
      color: var(--title-color);
    }
  }
  code {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const Main: React.FC = () => {
  return (
    <StyledMain>
      <h1>MemeGenerator 3000</h1>
      <br />
      <p>
        Приложение для создания мемов с помощью сайта{" "}
        <a href="https://imgflip.com/">ImgFlip.com</a>. Для создания своего мема
        Вам необходимо зарегистрироваться на сайте{" "}
        <a href="https://imgflip.com/">ImgFlip</a> и авторизоваться здесь с
        помощью указанных при регистрации логина/пароля. Выберите шаблон мема,
        введите текст в соответствующие поля (пока поддерживается создание
        мемеов только с двумя полями) и нажмите кнопку{" "}
        <code>Создать мемасик</code>. Созданные мемы сохраняются в{" "}
        <code>localStorage</code> (ссылки на саму картинку и на соответствующую
        страничку сайта <a href="https://imgflip.com/">ImgFlip</a>) и доступны к
        просмотру на страничке <NavLink to="/memes">Мои мемасики</NavLink>.
      </p>
      <br />
      <NavLink to="/memes">
        <h3>Создай свой мемасик!</h3>
      </NavLink>
    </StyledMain>
  );
};

export default Main;
