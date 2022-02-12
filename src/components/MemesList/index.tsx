import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { OneMemeType } from "../../store/Memes/types";

type MemesListPropsType = {
  memes: OneMemeType[];
};

const StyledMemesList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledMemeCard = styled.li`
  height: 240px;
  width: 200px;
  margin: 20px;
  justify-content: center;
  text-align: center;
  img {
    height: 200px;
    width: 200px;
    object-fit: contain;
  }
`;

const MemesList: React.FC<MemesListPropsType> = (props) => {
  const { memes } = props;
  return (
    <StyledMemesList>
      {memes.map((el: OneMemeType) => (
        <StyledMemeCard key={el.id}>
          <Link to={`/memes/${el.id}`}>
            <img src={el.url} alt={`Мемечик ${el.id}`} />
            <p>{el.name}</p>
          </Link>
        </StyledMemeCard>
      ))}
    </StyledMemesList>
  );
};

export default MemesList;
