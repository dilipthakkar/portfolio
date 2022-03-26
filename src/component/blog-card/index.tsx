import React from "react";
import styled from "styled-components";
import { Color } from "../../theme/colors";
import { Typography } from "../global-styles/typography";
const Blogcard = (props: {
  title: string;
  heading: string;
  text: string;
  color?: string;
}) => {
  const { title, heading, text, color } = props;
  return (
    <MyBlogCardWrapper color={color || ""}>
      <Typography
        variant="body1"
        color={color}
        sx={{ textTransform: "uppercase" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        color={"white"}
        sx={{ textTransform: "uppercase" }}
      >
        {heading}
      </Typography>
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
  min-width: 200px;
  padding : 30px 15px;
  background-color: ${Color.dark2};
  -webkit-box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%),
    0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
    border-top : ${props => props.color ? `2px solid ${props.color}` : "2px solid #fff"};
`;

const ParaDiv = styled.div`
  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
