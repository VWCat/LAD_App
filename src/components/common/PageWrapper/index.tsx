import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import SideBar from "../SideBar";

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
  width: 100%;
  max-width: 1280px;
  padding: 60px 0;
  align-items: center;
  justify-content: end;
  flex-grow: 1;
`;

const PageWrapper: React.FC = () => {
  return (
    <StyledPage>
      <Header />
      <StyledContent>
        <StyledContainer>
          <div
            style={{
              display: "flex",
              width: "calc(100% - 150px)",
              justifyContent: "center",
            }}
          >
            <h1>Здесь будет какой-нибудь контент</h1>
          </div>

          <SideBar />
        </StyledContainer>
      </StyledContent>
      <Footer />
    </StyledPage>
  );
};

export default PageWrapper;
