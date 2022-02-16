import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MemeCard from "../../components/MemeCard";
import { getMyMemesData } from "../../store/Memes/selectors";

const StyledList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;

  li {
    width: 100%;
    margin: 5px 0;
    img {
      width: 150px;
      object-fit: contain;
    }
  }
`;

const SideBar: React.FC = () => {
  const myMemes = useSelector(getMyMemesData);

  return (
    <>
      <p>Мои последние мемы</p>
      <StyledList>
        {myMemes.slice(0, 5).map((el) => (
          <MemeCard
            src={el.url}
            url={el.page_url}
            name=""
            size="small"
            key={el.id}
          />
          // <li>
          //   <a href={el.page_url}>
          //     <img src={el.url} alt="My meme" />
          //   </a>
          // </li>
        ))}
      </StyledList>
    </>
  );
};

export default SideBar;
