import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bg from "../../../images/appointment-bg.png";

const bgImage = {
  background: `url(${bg})`,
  backgroundColor: "rgba(9, 66, 109 ,.85)",
  backgroundBlendMode: "darken, luminosity",
};

const ContactUs = () => {
  return (
    <Box style={bgImage} sx={{ my: 2, py: 4, color: "white" }}>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={12} md={6}>
          <Container sx={{ mx: "auto", width: "100%" }}>
            <Typography variant="h5" sx={{ fontWeight: 600, color: "#12CEA1" }}>
              Contact us
            </Typography>
            <Typography variant="h4" sx={{ my: 2 }}>
              Always connect with us
            </Typography>
            <form>
              <TextField
                required
                id="filled-basic"
                label="Email Address"
                variant="filled"
                type="email"
                sx={{ width: "90%", mt: 2, mb: 1, background: "white" }}
              />
              <TextField
                required
                id="filled-basic"
                label="Subject"
                variant="filled"
                sx={{ width: "90%", my: 1, background: "white" }}
              />
              <TextField
                required
                id="filled-basic"
                label="Your message"
                multiline
                rows={4}
                variant="filled"
                sx={{ width: "90%", my: 1, background: "white" }}
              />
              <Button
                variant="contained"
                sx={{ backgroundColor: "#12CEA1", my: 2 }}
              >
                Submit
              </Button>
            </form>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
