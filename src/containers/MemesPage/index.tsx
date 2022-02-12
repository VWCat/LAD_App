import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemesList from "../../components/MemesList";
import { fetchMemesDataAction } from "../../store/Memes/actions";
import { getMemesData, getMemesIsLoading } from "../../store/Memes/selectors";

const MemesPage: React.FC = () => {
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  const isLoading = useSelector(getMemesIsLoading);

  const memes = useSelector(getMemesData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMemesDataAction());
    // setIsLoading(false);
    // fetch("https://api.imgflip.com/get_memes")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     dispatch(fetchMemesDataAction(data.data.memes));
    //
    //   });
  }, []);

  return <div>{isLoading ? <p>LOADING</p> : <MemesList memes={memes} />}</div>;
};

export default MemesPage;
