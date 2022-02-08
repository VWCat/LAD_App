import React from "react";
import { Route, Routes } from "react-router-dom";
import PageWrapper from "../../components/common/PageWrapper";
import MainPage from "../MainPage";
import NotFoundPage from "../NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
