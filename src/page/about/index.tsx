import { Box, Grid } from "@mui/material";
import React from "react";
import styled, { keyframes } from "styled-components";
import { Typography } from "../../component/global-styles/typography";
import { breakpoint } from "../../constant/breakpoints";
import { Color } from "../../theme/colors";

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
                  I’m a Software Developer located in India. I have a serious
                  passion for UI effects, animations and creating intuitive,
                  dynamic user experiences.
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

          <Grid item xs={12} md={6}>
            <EducationCard>
              <Typography
                variant="h6"
                component="h6"
                color={"white"}
                fontWeight={700}
              >
                Bachelor's Of TechnologyComputer Science
              </Typography>
              <Typography
                variant="body1"
                component="p"
                color={Color.grey}
                className={"pt-2"}
              >
                2018-2022
              </Typography>
              <Typography variant="body1" component="p" color={Color.grey}>
                Computer Science
              </Typography>
              <Typography
                variant="body1"
                component="p"
                color={Color.grey}
                className={"pt-2"}
              >
                Modern institute of technology and research center, Alwar(Raj)
              </Typography>
            </EducationCard>
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

const EducationCard = styled.div`
  background-color: ${Color.grey}20;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  width: 100%;
`;
