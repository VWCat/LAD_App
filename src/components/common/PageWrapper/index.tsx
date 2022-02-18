import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../../../containers/SideBar";
import Footer from "../Footer";
import Header from "../Header";

type StyledPagePropsType = { viewPortHeight: number };

const StyledPage = styled.div`
  --true-vh: ${(props: StyledPagePropsType) => props.viewPortHeight / 100};

  display: flex;
  flex-direction: column;
  max-width: 100vw;
  height: 100vh;
  height: calc(var(--true-vh) * 100px);
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
  overflow-y: auto;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  padding: 60px 20px;
  align-items: flex-start;
  justify-content: center;
  flex-grow: 1;
`;

const StyledOutlet = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 150px);
  justify-content: center;
  height: 1px;
  min-height: 100%;

  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// const StyledSideBar = styled.div

type PageWrapperPropsType = {
  isSideBar: boolean;
  viewPortHeight: number;
};

const PageWrapper: React.FC<PageWrapperPropsType> = (props) => {
  const { isSideBar, viewPortHeight } = props;

  return (
    <StyledPage viewPortHeight={viewPortHeight}>
      <Header />
      <StyledContent>
        <StyledContainer>
          <StyledOutlet>
            <Outlet />
          </StyledOutlet>
          {isSideBar && (
            <StyledSideBar>
              <SideBar />
            </StyledSideBar>
          )}
        </StyledContainer>
      </StyledContent>
      <Footer />
    </StyledPage>
  );
};

export default PageWrapper;
