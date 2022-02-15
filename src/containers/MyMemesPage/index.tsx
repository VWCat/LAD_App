import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import MemesList from "../../components/MemesList";
import {
  getMyMemesData,
  getMyMemesDatalength,
} from "../../store/Memes/selectors";

const MyMemesPage: React.FC = () => {
  const isMemesExist = useSelector(getMyMemesDatalength);

  const myMemes = useSelector(getMyMemesData);

  return (
    <div>
      {isMemesExist ? (
        <MemesList memes={myMemes} />
      ) : (
        <>
          <p>У Вас ещё нет Мемасиков :(</p>
          <NavLink to="/memes">
            <h3>Создай свой мемасик!</h3>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default MyMemesPage;
