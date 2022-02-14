import React from "react";
import { Route, Routes } from "react-router-dom";
import PageWrapper from "../../components/common/PageWrapper";
import LoginPage from "../LoginPage";
import MainPage from "../MainPage";
import MemesPage from "../MemesPage";
import CreateMemePage from "../MemesPage/CreateMemePage";
import NotFoundPage from "../NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/memes" element={<MemesPage />} />
        <Route path="/memes/:id" element={<CreateMemePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
