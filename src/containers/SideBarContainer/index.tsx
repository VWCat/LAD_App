import React from "react";
import { useSelector } from "react-redux";
import SideBar from "../../components/common/SideBar";
import { getMyMemesData } from "../../store/Memes/selectors";
// import { OneMyMemeType } from "../../store/Memes/types";

const SideBarContainer: React.FC = () => {
  const myMemes = useSelector(getMyMemesData);

  // const data: { caption?: string; list?: OneMyMemeType[] } = {};

  // if (myMemes) data.caption = "Мои последние мемы";

  return <SideBar caption="Мои последние мемы" list={myMemes} />;
};

export default SideBarContainer;
