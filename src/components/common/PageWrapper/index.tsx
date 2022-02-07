import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import SideBar from "../SideBar";

const Page = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const PageWrapper: React.FC = () => {
  return (
    <Page>
      <Header />
      <Content>
        <SideBar />
        <h1>lkasdgh</h1>
      </Content>
      <Footer />
    </Page>
  );
};

export default PageWrapper;
