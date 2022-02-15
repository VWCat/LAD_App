import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBarContainer from "../../../containers/SideBarContainer";
import Footer from "../Footer";
import Header from "../Header";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
`;
const StyledContent = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--main-color);
  // align-items: center;
  justify-content: center;
  flex-grow: 1;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  padding: 60px 20px;
  align-items: flex-start;
  justify-content: end;
  flex-grow: 1;
`;

const StyledOutlet = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 150px);
  justify-content: center;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const StyledSideBar = styled.aside`
  width: 150px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* padding: 10px; */

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

// const StyledSideBar = styled.div

type PageWrapperPropsType = {
  isSideBar: number;
};

const PageWrapper: React.FC<PageWrapperPropsType> = (props) => {
  const { isSideBar } = props;

  return (
    <StyledPage>
      <Header />
      <StyledContent>
        <StyledContainer>
          <StyledOutlet>
            <Outlet />
          </StyledOutlet>
          {isSideBar && (
            <StyledSideBar>
              <SideBarContainer />
            </StyledSideBar>
          )}
        </StyledContainer>
      </StyledContent>
      <Footer />
    </StyledPage>
  );
};

export default PageWrapper;
