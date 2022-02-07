import React from "react";
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
        <img src="/logo.png" alt="logo" />
      </StyledLogo>
      <StyledNav>
        <ul>
          <li>
            <a href="/">Домой</a>
          </li>
          <li>
            <a href="/">Туда</a>
          </li>
          <li>
            <a href="/">Сюда</a>
          </li>
          <li>
            <a href="/">Ещё тудее</a>
          </li>
          <li>
            <a href="/">Ещё сюдее</a>
          </li>
        </ul>
      </StyledNav>
      HEADER
    </StyledHeader>
  );
};
export default Header;
