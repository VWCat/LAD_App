import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
      HEADER
    </StyledHeader>
  );
};
export default Header;
