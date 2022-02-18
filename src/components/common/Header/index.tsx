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
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    min-height: 50px;
    padding: 0 5px;
  }
`;
const StyledLogo = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
  @media only screen and (max-width: 768px) {
    img {
      width: 30px;
      height: 30px;
    }
  }
`;
const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  ul {
    width: 100%;
    margin: 0 20px;
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  @media only screen and (max-width: 768px) {
    ul {
      margin: 0 5px;
    }
  }
`;

const StyledUser = styled.div`
  display: flex;
  justify-content: end;

  button {
    width: 24px;
    height: 24px;
    background-color: var(--sub-color);
    border: none;
    margin-left: 5px;
    padding: 0;
  }

  @media only screen and (max-width: 768px) {
    button {
      width: 16px;
      height: 16px;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

const Header: React.FC = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <StyledLogo>
        <NavLink to="/">
          <img src="/logo.svg" alt="logo" />
        </NavLink>
      </StyledLogo>
      <StyledNav>
        <ul>
          <li>
            <NavLink to="/">Домой</NavLink>
          </li>
          <li>
            <NavLink to="/memes">Создать мемасик</NavLink>
          </li>
          <li>
            <NavLink to="/mymemes">Мои мемасики</NavLink>
          </li>
        </ul>
      </StyledNav>
      <StyledUser>
        {user.name ? (
          <>
            {user.name}
            <button
              type="button"
              onClick={() => dispatch(logOutUserDataAction())}
            >
              <img src="/logout.svg" alt="exit" />
            </button>
          </>
        ) : (
          <NavLink to="/login">Войти</NavLink>
        )}
      </StyledUser>
    </StyledHeader>
  );
};
export default Header;
