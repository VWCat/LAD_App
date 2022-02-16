import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MemeCard from "../../components/MemeCard";
import {
  getMyMemesData,
  getMyMemesDatalength,
} from "../../store/Memes/selectors";

const StyledMemesList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MyMemesPage: React.FC = () => {
  const isMemesExist = useSelector(getMyMemesDatalength);

  const myMemes = useSelector(getMyMemesData);

  return (
    <div>
      {isMemesExist ? (
        <StyledMemesList>
          {myMemes.map((el) => (
            <MemeCard
              src={el.url}
              url={el.page_url}
              name=""
              size="big"
              key={el.id}
            />
          ))}
        </StyledMemesList>
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
