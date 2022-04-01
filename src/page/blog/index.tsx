import { Grid } from '@mui/material';
import React from 'react'
import styled from "styled-components";
import { Typography } from '../../component/global-styles/typography';
import { Color } from '../../theme/colors';
const BlogPage = () => {
  return (
    <div>
      <Herosection>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              component="h2"
              color={Color.primary}
              fontWeight={900}
              align={"center"}
              sx={{ lineHeight: 1 }}
              className={"h-tag typing-text-animation invisible-element"}
            >
              <span className="blast">C</span>
              <span className="blast">o</span>
              <span className="blast">m</span>
              <span className="blast">m</span>
              <span className="blast">i</span>
              <span className="blast">n</span>
              <span className="blast">g</span>
              &nbsp;
              <span className="blast">S</span>
              <span className="blast">o</span>
              <span className="blast">o</span>
              <span className="blast">n</span>
            </Typography>
          </Grid>
        </Grid>
      </Herosection>
    </div>
  );
}

export default BlogPage


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
