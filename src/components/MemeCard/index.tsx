/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type MemeCardPropsType = {
  src: string;
  url: string;
  name: string;
  size: "big" | "small";
  // eslint-disable-next-line react/no-unused-prop-types
  key: string;
};

type StyledMemeCardPropsType = { isSmall: boolean };

const StyledMemeCard = styled.li`
  height: ${(props: StyledMemeCardPropsType) =>
    props.isSmall ? "auto" : "240px"};
  width: ${(props: StyledMemeCardPropsType) =>
    props.isSmall ? "150px" : "200px"};
  margin: 20px;
  justify-content: center;
  text-align: center;
  img {
    height: ${(props: StyledMemeCardPropsType) =>
      props.isSmall ? "auto" : "200px"};
    width: ${(props: StyledMemeCardPropsType) =>
      props.isSmall ? "150px" : "200px"};
    object-fit: contain;
  }
`;

const CustomLink = ({
  to,
  isExt,
  children,
}: {
  to: string;
  isExt: boolean;
  children: React.ReactNode;
}) =>
  isExt ? (
    <a href={to} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <Link to={to}>{children}</Link>
  );

const MemeCard: React.FC<MemeCardPropsType> = (props) => {
  const { src, url, name = "", size } = props;
  return (
    <StyledMemeCard isSmall={size === "small"}>
      <CustomLink to={url} isExt={/^https?:\/\//.test(url)}>
        <img src={src} alt="Мемечик" />
        {name && <p>{name}</p>}
      </CustomLink>
    </StyledMemeCard>
  );
};

export default MemeCard;
