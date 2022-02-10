import React from "react";
import { OneMemeType } from "../../store/Memes/types";

type MemesListPropsType = {
  memes: OneMemeType[];
};

const MemesList: React.FC<MemesListPropsType> = (props) => {
  const { memes } = props;
  return (
    <ul>
      {memes.map((el: OneMemeType) => (
        <li key={el.id}>
          <img
            src={el.url}
            alt={`Мемечик ${el.id}`}
            height="200px"
            width="200px"
            style={{ objectFit: "contain" }}
          />
          <p>{el.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default MemesList;
