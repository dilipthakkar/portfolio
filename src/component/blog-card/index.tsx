import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoint } from "../../constant/breakpoints";
import { Color } from "../../theme/colors";
import { Typography } from "../global-styles/typography";
const Blogcard = (props: {
  title: string;
  heading: string;
  text: string;
  color?: string;
  link?: string;
}) => {
  const { title, heading, text, color , link } = props;
  return (
    <MyBlogCardWrapper color={color || ""}>
      <Typography
        variant="body1"
        color={color}
        sx={{ textTransform: "uppercase" }}
      >
        {title}
      </Typography>
      <HeadingLink to={link || ""}>
        <Typography
          variant="h5"
          component="h5"
          color={"white"}
          sx={{ textTransform: "uppercase" , textDecoration : "none" }}
        >
          {heading}
        </Typography>
      </HeadingLink>
      <ParaDiv>
        <Typography variant="body1" color={"rgba(255,255,255,0.6)"}>
          {text}
        </Typography>
      </ParaDiv>
    </MyBlogCardWrapper>
  );
};

export default Blogcard;

const MyBlogCardWrapper = styled.div<{color : string}>`
  width: 100%;
  height: 100%;
  min-height: 200px;
  min-width: 150px;
  padding : 30px 15px;
  display : flex;
  flex-direction : column;
  gap : 0.4rem;
  background-color: ${Color.dark2};
  -webkit-box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%),
    0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
    border-top : ${props => props.color ? `2px solid ${props.color}` : "2px solid #fff"};
    @media screen and (max-width: ${breakpoint.md}px) { 
        gap : 0.2rem;
    }
`;

const ParaDiv = styled.div`
  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const HeadingLink = styled(Link)`
  text-decoration: none;
  &:hover {
    h5 {
      color: ${Color.primary};
    }
  }
`;
