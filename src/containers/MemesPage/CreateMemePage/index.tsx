import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import CreateMeme from "../../../components/CreateMeme";
import { getMemesData } from "../../../store/Memes/selectors";

const CreateMemePage: React.FC = () => {
  const { id } = useParams();
  const meme = useSelector(getMemesData).find((el) => el.id === id);

  return meme ? <CreateMeme meme={meme} /> : <Navigate to="/memes" />;
};

export default CreateMemePage;
