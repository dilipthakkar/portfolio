import { Box, Grid } from "@mui/material";
import React from "react";
import Button from "../../component/global-styles/button";
import InputField from "../../component/global-styles/input";

const ContactForm = () => {
  return (
    <div>
      <form name="contact-form">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputField placeholder="Name" type="text"></InputField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField placeholder="Email" type="text"></InputField>
          </Grid>
          <Grid item xs={12}>
            <InputField placeholder="Subject" type="text"></InputField>
          </Grid>
          <Grid item xs={12}>
            <InputField placeholder="Message" type="textarea"></InputField>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{float : "right"}}>
              <Button>Send Message!</Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ContactForm;
