import React from "react";
import { useNavigate } from "react-router-dom";
import Error from "../../components/common/Error";

const NotFoundPage: React.FC = () => {
  const nav = useNavigate();
  const goBack = () => nav(-1);

  return (
    <Error imgURL="https://http.cat/404" errCode={404} goBackHandler={goBack} />
  );
};

export default NotFoundPage;
