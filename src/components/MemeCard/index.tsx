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
  isRemote,
  children,
}: {
  to: string;
  isRemote: boolean;
  children: React.ReactNode;
}) =>
  isRemote ? <a href={to}>{children}</a> : <Link to={to}>{children}</Link>;

const MemeCard: React.FC<MemeCardPropsType> = (props) => {
  const { src, url, name = "", size, key } = props;
  return (
    <StyledMemeCard isSmall={size === "small"} key={key}>
      <CustomLink to={url} isRemote={/^https?:\/\//.test(url)}>
        <img src={src} alt="Мемечик" />
        {name && <p>{name}</p>}
      </CustomLink>
    </StyledMemeCard>
  );
};

export default MemeCard;