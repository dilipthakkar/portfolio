import { Grid } from '@mui/material';
import React from 'react'
import styled from "styled-components";
import { Typography } from '../../component/global-styles/typography';
import { Color } from '../../theme/colors';
const AboutPage = () => {
  return (
    <div>
      <Herosection>
        <Grid container spacing={2}>
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
                  &nbsp;
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
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Herosection>
    </div>
  );
}

export default AboutPage

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