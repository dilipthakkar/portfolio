import { Box, Grid } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Button from "../../component/global-styles/button";
import InputField from "../../component/global-styles/input";
import * as Yup from "yup";
import { sendMessage } from "../../features/contact/actions";
import { useDispatch } from "react-redux";
// type of initialValue of form
interface InitialvalueType {
  name: string;
  email: string;
  message: string;
  subject: string;
}

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValue: InitialvalueType = {
    name: "",
    email: "",
    message: "",
    subject: "",
  };
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  const onSubmit = async(values, setSubmitting) => {
    setSubmitting(true);
    console.log(await dispatch(sendMessage(values)));
    setSubmitting(false);
  };
  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema={ContactSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 500);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setSubmitting,
          /* and other goodies */
        }) => (
          <form name="contact-form">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputField
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.name && touched.name && errors.name)}
                ></InputField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputField
                  placeholder="Email"
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.email && touched.email && errors.email)}
                ></InputField>
              </Grid>
              <Grid item xs={12}>
                <InputField
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    errors.subject && touched.subject && errors.subject
                  )}
                ></InputField>
              </Grid>
              <Grid item xs={12}>
                <InputField
                  placeholder="Message"
                  type="textarea"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    errors.message && touched.message && errors.message
                  )}
                ></InputField>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ float: "right" }}>
                  <Button
                    type={"submit"}
                    onSubmit={() => {
                      onSubmit(values, setSubmitting);
                    }}
                    loading={isSubmitting}
                  >
                    Send Message!
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
