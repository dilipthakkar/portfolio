import { Box, Container, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../../component/side-bar";
import { Color } from "../../theme/colors";
import { Typography } from "./../../component/global-styles/typography";
import styled from "styled-components";
import Button from "../../component/global-styles/button";
import { breakpoint } from "../../constant/breakpoints";
import MenuIcon from "@mui/icons-material/Menu";
import MyWorkCard from "../../component/my-work-card";
import { myBlogs, myWork } from "./static-data";
import Blogcard from "../../component/blog-card";
import { Link } from "react-router-dom";
import ContactForm from "./contact-form";
import SpiderOptions from "../../component/spider-options";
const HomePage = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <div>
      <Grid container wrap="nowrap" className="main">
        <Grid item>
          <Sidebar open={sideBarOpen} onClose={() => setSideBarOpen(false)} />
        </Grid>
        <RightSection item sx={{ flex: 1 }}>
          {/* spider options div */}
          <SpiderOptionWrapper>
            <SpiderOptions />
          </SpiderOptionWrapper>

          {/* hero section */}
          <Herosection>
            <MenuIconDiv onClick={() => setSideBarOpen(true)}>
              <IconButton>
                <MenuIcon />
              </IconButton>
            </MenuIconDiv>
            <Grid
              container
              sx={{ height: "100%" }}
              className="px-4 sm-ps-6"
              alignItems={"center"}
            >
              <Grid item>
                <Box>
                  <Grid container direction={"column"} spacing={3}>
                    <Grid item>
                      <Typography
                        variant="h1"
                        component="h1"
                        color={"white"}
                        fontWeight={900}
                        sx={{ lineHeight: 1 }}
                        className={"h-tag"}
                      >
                        <span className="blast">H</span>
                        <span className="blast">i</span>
                        <span className="blast">,</span>
                        <br />
                        <span className="blast">I</span>
                        <span className="blast">'</span>
                        <span className="blast">m</span>
                        &nbsp;
                        <span
                          className="blast"
                          style={{ color: Color.primary }}
                        >
                          D
                        </span>
                        <span className="blast">i</span>
                        <span className="blast">l</span>
                        <span className="blast">i</span>
                        <span className="blast">p</span>
                        <br />
                        <span className="blast">S</span>
                        <span className="blast">o</span>
                        <span className="blast">f</span>
                        <span className="blast">t</span>
                        <span className="blast">w</span>
                        <span className="blast">a</span>
                        <span className="blast">r</span>
                        <span className="blast">e</span>
                        &nbsp;
                        <span className="blast">E</span>
                        <span className="blast">n</span>
                        <span className="blast">g</span>
                        <span className="blast">i</span>
                        <span className="blast">n</span>
                        <span className="blast">e</span>
                        <span className="blast">e</span>
                        <span className="blast">r</span>
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography
                        variant="h6"
                        color={Color.grey}
                        className={"p-tag"}
                      >
                        Web Developer & Computer Engineer
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button>Contact me</Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Herosection>
          {/* work section */}
          <Worksection>
            <Grid container className="px-4 sm-ps-6">
              <Grid item md={12}>
                <Typography
                  variant="h2"
                  component="h2"
                  color={Color.primary}
                  fontWeight={900}
                  sx={{ lineHeight: 1 }}
                  className={"h-tag"}
                >
                  <span className="blast">M</span>
                  <span className="blast">y</span>
                  &nbsp;
                  <span className="blast">P</span>
                  <span className="blast">o</span>
                  <span className="blast">r</span>
                  <span className="blast">t</span>
                  <span className="blast">f</span>
                  <span className="blast">o</span>
                  <span className="blast">l</span>
                  <span className="blast">i</span>
                  <span className="blast">o</span>
                </Typography>
              </Grid>
              <Grid item md={12}>
                <Grid container alignItems={"end"}>
                  <Grid item md={8}>
                    <Typography
                      variant="body1"
                      color={"white"}
                      className={"p-tag"}
                    >
                      A small gallery of recent projects chosen by me Lorem
                      ipsum dolor sit amet. Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Molestias cupiditate ab
                      aliquid facilis praesentium numquam tempore exercitationem
                      earum, quaerat laudantium ducimus eaque saepe aspernatur
                      cum vero. Maiores reiciendis vero laboriosam officia
                      libero non. Quasi adipisci expedita aperiam deserunt nemo
                      repudiandae temporibus corporis soluta iste ipsam modi
                      magnam, explicabo odio reiciendis.
                    </Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Box sx={{ float: "right", pr: 5 }}>
                      <Button>See More!</Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box className="section-tag pt-8">
              <Grid container>
                {myWork.slice(0, 8).map((item) => (
                  <Grid item xs={6} sm={4} md={3} sx={{ height: "300px" }}>
                    <MyWorkCard image={item.image} link={item.link} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Worksection>
          {/* Blog section */}
          <Blogsection>
            <Grid container>
              {myBlogs.map((item) => (
                <Grid item xs={12} sm={6} md={4} className="px-5 pt-7 sm-pt-5">
                  <Blogcard
                    title={item.title}
                    heading={item.heading}
                    color={item.color}
                    text={item.text}
                  />
                </Grid>
              ))}
            </Grid>
            <Box className="pt-5 sm-pt-7">
              <Link to="" style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  color={Color.primary}
                  // style={{ textAlign: "center" }}
                  center
                >
                  See All Articals....
                </Typography>
              </Link>
            </Box>
          </Blogsection>
          {/* contact section */}
          <Contactmesection>
            <Grid container>
              <Grid item xs={12} md={7} className="px-5 sm-px-6">
                <Grid container>
                  <Grid item>
                    <Typography
                      variant="h2"
                      component="h2"
                      color={Color.primary}
                      fontWeight={900}
                      sx={{ lineHeight: 1 }}
                      className={"h-tag"}
                    >
                      <span className="blast">C</span>
                      <span className="blast">o</span>
                      <span className="blast">n</span>
                      <span className="blast">t</span>
                      <span className="blast">a</span>
                      <span className="blast">c</span>
                      <span className="blast">t</span>
                      &nbsp;
                      <span className="blast">M</span>
                      <span className="blast">e</span>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      component="p"
                      color={Color.grey}
                      sx={{ lineHeight: 1 }}
                      className={"p-tag"}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit nulla corporis exercitationem eius sequi tempore
                      temporibus dolore tempora quam natus? Corrupti, a?
                    </Typography>
                  </Grid>

                  <Grid item className={"pt-6 form-tag"}>
                    <ContactForm />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Contactmesection>
        </RightSection>
      </Grid>
    </div>
  );
};

export default HomePage;

const RightSection = styled(Grid)`
  margin-left: 140px;
  @media screen and (max-width: ${breakpoint.md}px) {
    margin-left: 0px;
  }
`;

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

const MenuIconDiv = styled.div`
  float: right;
  background-color: rgb(128, 128, 128, 0.7);
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 2px;
  display: none;
  @media screen and (max-width: ${breakpoint.md}px) {
    display: block;
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

const SpiderOptionWrapper = styled.div`
  position: absolute;
  right: 0;
  top: -140px;
  transition: top 700ms ease-in-out;
  &:hover {
    top: 0px;
  }
  @media screen and (max-width: ${breakpoint.sm}px) {
    display: none;
  }
`;
