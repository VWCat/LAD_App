import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  min-height: 50px;
  width: 100%;
  background-color: var(--sub-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
  @media only screen and (max-width: 768px) {
    min-height: 30px;
    padding: 5px;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p className="left">SPA на React для Frontend-стажировки в Lad</p>
      <p className="right">&copy; VWCat, 2022</p>
    </StyledFooter>
  );
};
export default Footer;
