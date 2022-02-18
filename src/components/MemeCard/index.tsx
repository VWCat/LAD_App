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

const StyledMemeCard = styled.li<StyledMemeCardPropsType>`
  height: ${(p) => (p.isSmall ? "auto" : "240px")};
  width: ${(p) => (p.isSmall ? "150px" : "200px")};
  margin: 20px;
  justify-content: center;
  text-align: center;
  img {
    height: ${(p) => (p.isSmall ? "auto" : "200px")};
    width: ${(p) => (p.isSmall ? "150px" : "200px")};
    object-fit: contain;
  }

  @media screen and (max-width: 768px) {
    height: 160px;
    width: 120px;
    margin: 5px;
    img {
      height: 120px;
      width: 120px;
    }
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
