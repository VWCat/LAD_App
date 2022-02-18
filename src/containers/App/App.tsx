import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import PageWrapper from "../../components/common/PageWrapper";
import { getMyMemesDatalength } from "../../store/Memes/selectors";
import LoginPage from "../LoginPage";
import MainPage from "../MainPage";
import MemesPage from "../MemesPage";
import CreateMemePage from "../MemesPage/CreateMemePage";
import MyMemesPage from "../MyMemesPage";
import NotFoundPage from "../NotFoundPage";

const App = () => {
  const isSideBar = !!useSelector(getMyMemesDatalength);
  const [viewPortHeight, setViewPortHeight] = useState(window.innerHeight);

  const resizeHandler = () => {
    setViewPortHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageWrapper isSideBar={isSideBar} viewPortHeight={viewPortHeight} />
        }
      >
        <Route path="/" element={<MainPage />} />
        <Route path="/memes" element={<MemesPage />} />
        <Route path="/memes/:id" element={<CreateMemePage />} />
        <Route path="/mymemes" element={<MyMemesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
