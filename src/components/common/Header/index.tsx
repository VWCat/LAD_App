import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { logOutUserDataAction } from "../../../store/User/actions";
import { getUser } from "../../../store/User/selectors";

const StyledHeader = styled.header`
  width: 100%;
  min-height: 80px;
  background-color: var(--sub-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;
const StyledLogo = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
`;
const StyledNav = styled.nav`
  ul {
    width: 400px;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
`;

const Header: React.FC = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <StyledLogo>
        <NavLink to="/">
          <img src="/logo.png" alt="logo" />
        </NavLink>
      </StyledLogo>
      <StyledNav>
        <ul>
          <li>
            <NavLink to="/">Домой</NavLink>
          </li>
          <li>
            <NavLink to="/memes">Мемасики</NavLink>
          </li>
          <li>
            <NavLink to="/2">Сюда</NavLink>
          </li>
          <li>
            <NavLink to="/3">Ещё тудее</NavLink>
          </li>
          <li>
            <NavLink to="/4">Ещё сюдее</NavLink>
          </li>
        </ul>
      </StyledNav>
      {user.name ? (
        <div>
          {user.name}
          <button
            type="button"
            onClick={() => dispatch(logOutUserDataAction())}
          >
            ❌
          </button>
        </div>
      ) : (
        <NavLink to="/login">Войти</NavLink>
      )}
    </StyledHeader>
  );
};
export default Header;
