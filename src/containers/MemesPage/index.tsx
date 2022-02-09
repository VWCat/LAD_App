import React, { useEffect, useState } from "react";

type MemeType = {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
};

const MemesPage: React.FC = () => {
  const [memes, setMemes] = useState<MemeType[]>([]);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        setMemes(data.data.memes);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>LOADING</p>
      ) : (
        <ul>
          {memes.map((el: MemeType) => (
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
      )}
    </div>
  );
};

export default MemesPage;
