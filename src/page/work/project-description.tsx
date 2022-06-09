import { Button, Grid } from "@mui/material";
import React from "react";
import { Typography } from "../../component/global-styles/typography";
import { Color } from "../../theme/colors";
import { workData } from "./data";
import styled from "styled-components";
import ReactPlayer from "react-player";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface ProjectDescriptionProp {
  id: number;
}

const findProject = (id: number) => {
  const project = workData.find((item) => item.id === id);
  return project;
};

const splitTitleInArray = (title: string) => {
  const titleArray = title.split("");
  return titleArray;
};

const ProjectDescription = (props: ProjectDescriptionProp) => {
  const { id } = props;
  const { title, description, images, link, video } = findProject(id);

  return (
    <MainContainer>
      <Grid container>
        <Grid item>
          <Grid container direction={"column"} spacing={3}>
            <Grid item>
              <Typography
                variant="h2"
                component="h2"
                color={Color.primary}
                fontWeight={900}
                sx={{ lineHeight: 1 }}
                className={"h-tag typing-text-animation invisible-element"}
              >
                {splitTitleInArray(title).map((char, index) =>
                  char === " " ? (
                    <span key={index}> &nbsp;</span>
                  ) : (
                    <span className="blast" key={index}>
                      {char}
                    </span>
                  )
                )}
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item sx={{ mr: 7 }}>
                  <Carousel width={500} swipeable>
                    {images.map((image, index) => (
                      <SliderImage src={image} alt="proj" key={index} />
                    ))}
                  </Carousel>
                </Grid>
                <Grid item>
                  <VideoPlayerContainer
                    url={video}
                    controls
                    volume={0.6}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                variant="h5"
                component="h5"
                color={Color.grey}
                fontWeight={500}
                sx={{ lineHeight: 1.2 }}
                className={"p-tag"}
              >
                {description}
              </Typography>
            </Grid>

            <Grid item>
              <Grid container spacing={6}>
                <Grid item>
                  <SeeProject>
                    <LanguageIcon />
                    <Typography variant="h6" component="h6" sx={{ pl: 1 }}>
                      Live link
                    </Typography>
                  </SeeProject>
                </Grid>
                <Grid item>
                  <CodeLink>
                    <CodeIcon />
                    <Typography variant="h6" component="h6" sx={{ pl: 1 }}>
                      Code
                    </Typography>
                  </CodeLink>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default ProjectDescription;

const MainContainer = styled.div`
  padding: 40px;
`;

const SliderImage = styled.img`
  width: 400px;
  height: 360px;
`;

const SeeProject = styled(Button)`
  background-color: white;
  width : 140px;
  color: ${Color.dark2};
  &:hover {
    background-color: white;
  }
`;

const CodeLink = styled(Button)`
  background-color: white;
  width: 140px;

  color: ${Color.dark2};
  &:hover {
    background-color: white;
  }
`;

const VideoPlayerContainer = styled(ReactPlayer)`
  background-color: ${Color.dark2};
  -webkit-box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%),
    0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
`;

