import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  min-height: 80px;
  width: 100%;
  background-color: var(--sub-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>SPA на React для Frontend-стажировки в Lad</p>
      <h3>&copy; VWCat, 2022</h3>
    </StyledFooter>
  );
};
export default Footer;
