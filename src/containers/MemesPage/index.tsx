import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemesList from "../../components/MemesList";
import makeRequest from "../../network";
import fetchMemesDataAction from "../../store/Memes/actions";
import getMemesData from "../../store/Memes/selectors";

const MemesPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const memes = useSelector(getMemesData);

  const dispatch = useDispatch();

  useEffect(() => {
    makeRequest({ url: "get_memes" });
    // fetch("https://api.imgflip.com/get_memes")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     dispatch(fetchMemesDataAction(data.data.memes));
    //     setIsLoading(false);
    //   });
  }, []);

  return <div>{isLoading ? <p>LOADING</p> : <MemesList memes={memes} />}</div>;
};

export default MemesPage;
