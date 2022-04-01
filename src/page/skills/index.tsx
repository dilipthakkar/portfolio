import { Box, Grid } from "@mui/material";
import React from "react";
import styled, { keyframes } from "styled-components";
import { Typography } from "../../component/global-styles/typography";
import { breakpoint } from "../../constant/breakpoints";
import { Color } from "../../theme/colors";

const technologies = [
  { name: "React", experties: 90, color: Color.primary },
  { name: "Javascript", experties: 80, color: Color.blue1 },
  { name: "React native", experties: 70, color: Color.orange },
  { name: "SQL", experties: 70, color: Color.lightYellow },
  { name: "NodeJs", experties: 80, color: Color.blue2 },
  { name: "MongoDB", experties: 60, color: Color.rose },
  { name: "Java", experties: 70, color: Color.primary },
  { name: "C++", experties: 80, color: Color.blue1 },
];

const experience = [
  {
    title: "ReactJs Developer",
    organization: "Mankkey Electronics",
    time: "July 2021 - November 2021",
    description:
      "Worked on a end to end solution of creating a fully functional web and mobile application for a local vendor with reactJs and react native",
  },
  {
    title: "Software engineer",
    organization: "Metacube software Pvt. Ltd.",
    time: "Feb 2022 - Present",
    description:
      "Full time software engineer, working on many domains including java, nodeJs, react , sql",
  },
];

const MySkillPage = () => {
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
                  <span className="blast">S</span>
                  <span className="blast">k</span>
                  <span className="blast">i</span>
                  <span className="blast">l</span>
                  <span className="blast">l</span>
                  &nbsp;
                  <span className="blast">&</span>
                  <br />
                  <span className="blast">E</span>
                  <span className="blast">x</span>
                  <span className="blast">p</span>
                  <span className="blast">e</span>
                  <span className="blast">r</span>
                  <span className="blast">i</span>
                  <span className="blast">e</span>
                  <span className="blast">n</span>
                  <span className="blast">c</span>
                  <span className="blast">e</span>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" color={"white"} className={"p-tag"}>
                  A small gallery of recent projects chosen by me Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Molestias cupiditate ab aliquid facilis
                  praesentium numquam tempore exercitationem earum, quaerat
                  laudantium ducimus eaque saepe aspernatur cum vero. Maiores
                  reiciendis vero laboriosam officia libero non. Quasi adipisci
                  expedita aperiam deserunt nemo repudiandae temporibus corporis
                  soluta iste ipsam modi magnam, explicabo odio reiciendis.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className="p-7 md-p-1">
            {technologies.map((item, index) => (
              <TechBox
                color={item.color}
                exp={item.experties}
                index={index}
                key={index}
                className={"pt-5"}
              >
                <Typography variant="body1" component="p" color={"white"}>
                  {item.name}
                </Typography>
                <span>
                  <span></span>
                </span>
              </TechBox>
            ))}

            <Grid container spacing={2} className={"pt-7"}>
              {experience.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <ExperiecneCard>
                    <Typography
                      variant="h6"
                      component="h6"
                      color={"white"}
                      fontWeight={700}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      color={Color.grey}
                      className={"pt-2"}
                    >
                      {item.organization}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      color={Color.grey}
                    >
                      {item.time}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      color={Color.grey}
                      className={"pt-2"}
                    >
                      {item.description}
                    </Typography>
                  </ExperiecneCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Herosection>
    </div>
  );
};

export default MySkillPage;

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

const TechAnimation = keyframes`
 0%{
    width : 0%;
 }
 100%{
   width : 100%;
 }
`;

const TechBox = styled.div<{ color: string; exp: number; index: number }>`
  display: flex;
  flex-direction: column;
  span {
    width: 100%;
    height: 2px;
    display: block;
    background-color: #302c2c;
    span {
      width: 0;
      height: 2px;
      background-color: ${(props) => props.color};
      display: block;
      max-width: ${(props) => props.exp}%;
      animation: ${TechAnimation} 2s ease-in-out;
      animation-delay: ${(props) => props.index * 0.2}s;
      animation-fill-mode: forwards;
    }
  }
`;

const ExperiecneCard = styled.div`
  background-color: ${Color.grey}20;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  width: 100%;
`;
