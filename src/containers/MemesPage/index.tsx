import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MemeCard from "../../components/MemeCard";
import { fetchMemesDataAction } from "../../store/Memes/actions";
import { getMemesData, getMemesIsLoading } from "../../store/Memes/selectors";

const StyledMemesList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MemesPage: React.FC = () => {
  const isLoading = useSelector(getMemesIsLoading);

  const memes = useSelector(getMemesData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMemesDataAction());
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>LOADING</p>
      ) : (
        <StyledMemesList>
          {memes.map((el) => (
            <MemeCard
              src={el.url}
              url={`/memes/${el.id}`}
              name={el.name}
              size="big"
              key={el.id}
            />
          ))}
        </StyledMemesList>
      )}
    </div>
  );
};

export default MemesPage;
