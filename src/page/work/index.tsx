import { Box, Grid } from "@mui/material";
import React from "react";
import { Color } from "../../theme/colors";
import { Typography } from "./../../component/global-styles/typography";
import styled from "styled-components";
import Button from "../../component/global-styles/button";
import { breakpoint } from "../../constant/breakpoints";
import MyWorkCard from "../../component/my-work-card";
import Blogcard from "../../component/blog-card";
import { Link } from "react-router-dom";
import SpiderOptions from "../../component/spider-options";
import LocationMap from "../../component/location-map";
const HomePage = () => {
  return (
    <div>
      <Herosection>
        <Grid
          container
          sx={{ height: "100%" }}
          className="px-4 sm-ps-6"
          alignItems={"center"}
        >
          <Grid item>
            <Box></Box>
          </Grid>
        </Grid>
      </Herosection>
      {/* work section */}
    </div>
  );
};

export default HomePage;

const Herosection = styled.section`
  background-color: ${Color.dark2};
  height: 100vh;
  min-height: fit-content;

  .blast {
    &:hover {
      color: ${Color.primary};
    }
  }
`;

const Worksection = styled.section`
  background-color: ${Color.dark2};
  padding: 0px 0px 50px 0px;
  position: relative;
  z-index: 1;
  &:before {
    content: "Work";
    position: absolute;
    font-size: 25rem;
    font-weight: 700;
    padding: 0;
    color: ${Color.grey + 10};
    height: fit-content;
    margin: 0;
    z-index: -1;
    top: -150px;
    letter-spacing: 0;
    right: -10%;
    @media screen and (max-width: ${breakpoint.md}px) {
      font-size: 15rem;
    }
    @media screen and (max-width: ${breakpoint.sm}px) {
      font-size: 8rem;
      top: -50px;
    }
  }
`;

const Blogsection = styled.section`
  background-color: ${Color.dark2};
  padding: 50px 0px 50px 0px;
  position: relative;
  z-index: 1;
  /* overflow: hidden; */
  &:before {
    content: "Blog";
    position: absolute;
    font-size: 25rem;
    font-weight: 700;
    padding: 0;
    color: ${Color.grey + 10};
    height: fit-content;
    margin: 0;
    z-index: -1;
    top: -150px;
    letter-spacing: 0;
    left: 0;
    @media screen and (max-width: ${breakpoint.md}px) {
      font-size: 15rem;
    }
    @media screen and (max-width: ${breakpoint.sm}px) {
      font-size: 8rem;
      top: -50px;
    }
  }
`;

const Contactmesection = styled.section`
  background-color: ${Color.dark2};
  padding: 50px 0px 50px 0px;
  position: relative;
  z-index: 1;
  /* overflow: hidden; */
  &:before {
    content: "Contact";
    position: absolute;
    font-size: 22rem;
    font-weight: 700;
    padding: 0;
    color: ${Color.grey + 10};
    height: fit-content;
    margin: 0;
    z-index: -1;
    top: -150px;
    letter-spacing: 0;
    right: -20%;
    @media screen and (max-width: ${breakpoint.md}px) {
      font-size: 15rem;
    }
    @media screen and (max-width: ${breakpoint.sm}px) {
      font-size: 8rem;
      top: -50px;
    }
  }
`;
