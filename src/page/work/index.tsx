import { Box, Grid } from "@mui/material";
import React from "react";
import { Color } from "../../theme/colors";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const projects = [
  {
    image: "https://source.unsplash.com/random/400x400",
    title: "tree visualizer",
    github: "www.github.com/dilipthakkar",
    link: "www.github.com/dilipthakkar",
  },
  {
    image: "https://source.unsplash.com/random/400x400",
    title: "tree visualizer",
    github: "www.github.com/dilipthakkar",
    link: "www.github.com/dilipthakkar",
  },
  {
    image: "https://source.unsplash.com/random/400x400",
    title: "tree visualizer",
    github: "www.github.com/dilipthakkar",
    link: "www.github.com/dilipthakkar",
  },
  {
    image: "https://source.unsplash.com/random/400x400",
    title: "tree visualizer",
    github: "www.github.com/dilipthakkar",
    link: "www.github.com/dilipthakkar",
  },
];

const HomePage = () => {
  return (
    <div>
      <Herosection>
        <Grid container spacing={4} className={"p-5 pt-7"}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} >
              <WorkCard>
                <span className="toolbar">
                  <p>./{project.title}</p>
                  <div>
                    <abbr title="github" className="github">
                      <span>
                        <GitHubIcon className="github-icon" />
                      </span>
                    </abbr>
                    <abbr title="live link" className="web">
                      <span>
                        <LanguageIcon className="web-icon" />
                      </span>
                    </abbr>
                  </div>
                </span>
                <div className="image-div">
                  <img src={project.image} />
                  <span></span>
                </div>
              </WorkCard>
            </Grid>
          ))}
        </Grid>
      </Herosection>
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

const WorkCard = styled.div`
  width: 100%;
  height: 100%;
  min-height: fit-content;
  background-color: ${"#332940"};
  -webkit-box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%),
    0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
  overflow: hidden;
  .image-div {
    width: 100%;
    height: 100%;
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  img + span {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #00000070;
    transition: background-color 1s linear;
    &:hover {
      background-color: #00000000;
    }
  }
  .toolbar {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    height : 40px;
    p {
      color: white;
      text-align: center;
    }
    div {
      position: absolute;
      right: 0;
    }
  }
  .github-icon {
    color: ${Color.lightYellow};
    margin: 4px;
    cursor: pointer;
  }
  .web-icon {
    color: ${Color.blue2};
    margin: 4px;
    cursor: pointer;
  }
`;
