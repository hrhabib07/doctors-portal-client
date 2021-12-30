import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import chair from "../../../images/chair.png";
import bannerBg from "../../../images/bg.png";
import { Box } from "@mui/system";
const bannerBackground = {
  background: `url(${bannerBg})`,
  height: "100%",
};
const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <Container style={bannerBackground} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={5}
          style={{ ...verticalCenter, textAlign: "left" }}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br /> Starts Here
            </Typography>
            <Typography
              sx={{ my: 2 }}
              style={{ color: "gray", fontSize: 13, fontWeight: 300 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              asperiores veritatis provident ipsum, eveniet labore perferendis
              voluptate deserunt saepe delectus.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#3EBFA7" }}>
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid style={verticalCenter} item xs={12} md={7}>
          <Grid item xs={12} md={6}>
            <img src={chair} style={{ height: "90%", width: "100%" }} alt="" />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
