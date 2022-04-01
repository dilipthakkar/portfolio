import { Box, Grid } from "@mui/material";
import React from "react";
import styled, { keyframes } from "styled-components";
import { Typography } from "../../component/global-styles/typography";
import { breakpoint } from "../../constant/breakpoints";
import { Color } from "../../theme/colors";
import selfimage from "../../assets/images/IMG_20210818_131812.jpg";
import CodeSnippet from "../../component/code-snippet";

const AboutPage = () => {
  return (
    <div>
      <Herosection>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Grid className="p-7">
              <Grid item>
                <Typography
                  variant="h2"
                  component="h2"
                  color={Color.primary}
                  fontWeight={900}
                  sx={{ lineHeight: 1 }}
                  className={"h-tag typing-text-animation invisible-element"}
                >
                  <span className="blast">M</span>
                  <span className="blast">e</span>
                  <span className="blast">,</span>
                  &nbsp;
                  <span className="blast">M</span>
                  <span className="blast">y</span>
                  <span className="blast">s</span>
                  <span className="blast">e</span>
                  <span className="blast">l</span>
                  <span className="blast">f</span>
                  &nbsp;
                  <span className="blast">&</span>
                  &nbsp;
                  <span className="blast">I</span>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" color={"white"} className={"p-tag"}>
                  Hello! My name is Dilip and I enjoy creating things that live
                  on the internet. I’m a Software Developer located in India. I
                  have a serious passion for UI effects, animations and creating
                  intuitive, dynamic user experiences.
                  <br />
                  <br />
                  Well-organised person, problem solver, independent employee
                  with high attention to detail. Fan of MMA, outdoor activities,
                  TV series and English literature.
                  <br />
                  <br />
                  Interested in the entire frontend spectrum and working on
                  ambitious projects with positive people.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} className={""}>
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              className="p-7"
            >
              <Grid item>
                <Grid container justifyContent={"center"}>
                  <Grid item>
                    <SelfImage>
                      <img src={selfimage} alt="self" />
                      <span className="before"></span>
                      <span className="after"></span>
                    </SelfImage>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <CodeSnippet>
                  <Typography color={"#BF40BF"} component={"span"}>
                    const &nbsp;
                  </Typography>
                  <Typography color={"#FF5733 "} component={"span"}>
                    name &nbsp;
                  </Typography>
                  <Typography color={"white"} component={"span"}>
                    = &nbsp;
                  </Typography>
                  <Typography color={"#228B22"} component={"span"}>
                    "dilip" &nbsp;
                  </Typography>
                  <Typography color={"white"} component={"span"}>
                    ; &nbsp;
                  </Typography>
                  <br />
                  <Typography color={"#BF40BF"} component={"span"}>
                    const &nbsp;
                  </Typography>
                  <Typography color={"#FF5733 "} component={"span"}>
                    profession &nbsp;
                  </Typography>
                  <Typography color={"white"} component={"span"}>
                    = &nbsp;
                  </Typography>
                  <Typography color={"#228B22"} component={"span"}>
                    "software developer" &nbsp;
                  </Typography>
                  <Typography color={"white"} component={"span"}>
                    ; &nbsp;
                  </Typography>
                  <br />
                  <Typography color={"#BF40BF"} component={"span"}>
                    while
                  </Typography>
                  <Typography color={"skyblue"} component={"span"}>
                    (1)&nbsp;
                  </Typography>
                  <Typography color={Color.lightYellow} component={"span"}>
                    &#123;
                    <br />{" "}
                  </Typography>
                  <Typography color={"#d46626"} component={"span"}>
                    &nbsp;&nbsp;&nbsp;&nbsp; console
                  </Typography>
                  <Typography color={"white"} component={"span"}>
                    .
                  </Typography>
                  <Typography color={"#7a74ca"} component={"span"}>
                    log
                  </Typography>
                  <Typography color={"white"} component={"span"}>
                    (
                  </Typography>
                  <Typography color={"#228B22"} component={"span"}>
                    "code , fuck , lift"
                  </Typography>
                  <Typography color={"white"} component={"span"}>
                    ) ;<br />
                  </Typography>
                  <Typography color={Color.lightYellow} component={"span"}>
                    &#125; ;
                  </Typography>
                </CodeSnippet>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Herosection>
    </div>
  );
};

export default AboutPage;

const Herosection = styled.section`
  background-color: ${Color.dark2};
  height: 100vh;
  min-height: fit-content;
  display: flex;

  .blast {
    &:hover {
      color: ${Color.primary};
    }
  }

  & > div {
    margin: auto;
  }
`;

const SelfImage = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  margin-bottom: 30px;
  img {
    width: 100%;
    height: auto;
    z-index: 4;
  }
  .before {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${Color.primary}60;
  }
  .after {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 20px;
    left: 20px;
    border: ${Color.primary} 3px solid;
    z-index: 0;
    transition: all 300ms ease-in-out;
  }
  &:hover {
    .after {
      top: 0;
      left: 0;
    }
    .before {
      background-color: transparent;
    }
  }

  @media screen and (max-width: ${breakpoint.md}px) {
    width: 250px;
    height: 330px;
    .before {
      width: 100%;
      height: 101%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${Color.primary}60;
    }
    .after {
      width: 100%;
      height: 101%;
      display: block;
      position: absolute;
      top: 20px;
      left: 20px;
      border: ${Color.primary} 3px solid;
      z-index: 0;
      transition: all 300ms ease-in-out;
    }
  }
`;
