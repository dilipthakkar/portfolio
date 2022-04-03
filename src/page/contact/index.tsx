import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Typography } from "../../component/global-styles/typography";
import { Color } from "../../theme/colors";
import ContactForm from "../home/contact-form";
const ContactPage = () => {
  return (
    <div>
      <Herosection>
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
                  className={"h-tag typing-text-animation invisible-element"}
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
                  I’m interested in freelance opportunities – especially
                  ambitious or large projects. However, if you have other
                  request or question, don’t hesitate to use the form.
                </Typography>
              </Grid>

              <Grid item className={"pt-6 form-tag"}>
                <ContactForm />
              </Grid>
            </Grid>
          </Grid>

          <Grid item></Grid>
        </Grid>
      </Herosection>
    </div>
  );
};

export default ContactPage;

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
