import React from "react";
import styled from "styled-components";

const StyledSideBar = styled.aside`
  width: 150px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const StyledNav = styled.nav`
  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
  }
  li {
    border: solid black 1px;
    margin: 3px 0;
    padding: 2px;
  }
`;

const SideBar: React.FC = () => {
  return (
    <StyledSideBar>
      SIDEBAR
      <StyledNav>
        <ul>
          <li>Side content 1</li>
          <li>Side content 2</li>
          <li>Side content 3</li>
          <li>Side content 4</li>
          <li>Side content 5</li>
        </ul>
      </StyledNav>
    </StyledSideBar>
  );
};
export default SideBar;
