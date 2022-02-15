import React from "react";
import styled from "styled-components";
import { OneMyMemeType } from "../../../store/Memes/types";

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
type SideBarPropsType = {
  caption: string;
  list: OneMyMemeType[];
};

const SideBar: React.FC<SideBarPropsType> = (props) => {
  const { caption, list } = props;

  return (
    <>
      {caption}
      <StyledList>
        {list.slice(0, 5).map((el) => (
          <li>
            <a href={el.page_url}>
              <img src={el.url} alt="My meme" />
            </a>
          </li>
        ))}
      </StyledList>
    </>
  );
};

export default SideBar;
