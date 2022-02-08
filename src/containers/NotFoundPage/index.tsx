import React from "react";
import Error from "../../components/common/Error";

const NotFoundPage: React.FC = () => {
  return <Error imgURL="https://http.cat/404" errCode={404} />;
};

export default NotFoundPage;
