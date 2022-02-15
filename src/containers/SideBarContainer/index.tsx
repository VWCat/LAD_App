import React from "react";
import { useSelector } from "react-redux";
import SideBar from "../../components/common/SideBar";
import { getMyMemesData } from "../../store/Memes/selectors";

const SideBarContainer: React.FC = () => {
  const myMemes = useSelector(getMyMemesData);

  return <SideBar caption="Мои последние мемы" list={myMemes} />;
};

export default SideBarContainer;
