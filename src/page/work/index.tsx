import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { Color } from "../../theme/colors";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { Typography } from "../../component/global-styles/typography";
import { workData } from "./data";
import "./style.css";
import WorkCard from "../../component/work-card/work-card";
import ProjectDescription from "./project-description";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const sizeArray = [false, true, false, true, false, false, true, true];

const HomePage = () => {
  shuffle(workData);
  return (
    <div>
      <Herosection>
        <div className="work-grid">
          {workData.map((item, index) => (
            <div className="work-card-container work-card-center">
              <div>
                <WorkCard
                  id={item.id}
                  title={item.title}
                  images={item.images}
                  description={item.description}
                  imageLogo={item.imageLogo}
                  link={item.link}
                  video={item.video}
                />
              </div>
            </div>
          ))}
        </div>
      </Herosection>
    </div>
  );
};

export default HomePage;

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
