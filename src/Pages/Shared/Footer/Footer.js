import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import bg from "../../../images/footer-bg.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/system";

const footerBg = {
  background: `url(${bg})`,
};
const Footer = () => {
  return (
    <Container style={footerBg} sx={{ my: 2, py: 3 }}>
      <Grid container style={{ textAlign: "left" }}>
        <Grid item sx={6} md={3}></Grid>
        <Grid item sx={6} md={3}>
          <Typography variant="h6" sx={{ color: "#12CEA1" }}>
            Services
          </Typography>
        </Grid>
        <Grid item sx={6} md={3}>
          <Typography variant="h6" sx={{ color: "#12CEA1" }}>
            Our Health
          </Typography>
        </Grid>
        <Grid item sx={6} md={3}>
          <Typography variant="h6" sx={{ color: "#12CEA1" }}>
            Our Address
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ my: 3 }}>
        <Grid item sx={6} md={3} style={{ textAlign: "left" }}>
          <Typography variant="subtitle" sx={{ color: "darkgray", mt: 2 }}>
            Emergency dental care
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ color: "darkgray" }}
          >
            Check Up
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ color: "darkgray" }}
          >
            Treatment of professional diseases
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ color: "darkgray" }}
          >
            Tooth Extraction
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ color: "darkgray" }}
          >
            Check up
          </Typography>
        </Grid>
        <Grid item sx={6} md={3} style={{ textAlign: "left" }}>
          <Typography variant="subtitle" sx={{ color: "darkgray", mt: 2 }}>
            Emergency dental care
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ color: "darkgray" }}
          >
            Check Up
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ color: "darkgray" }}
          >
            Treatment of professional diseases
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ color: "darkgray" }}
          >
            Tooth Extraction
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ color: "darkgray" }}
          >
            Check up
          </Typography>
        </Grid>
        <Grid item sx={6} md={3} style={{ textAlign: "left" }}>
          <Typography variant="subtitle" sx={{ color: "darkgray", mt: 2 }}>
            Emergency dental care
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ color: "darkgray" }}
          >
            Check Up
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ color: "darkgray" }}
          >
            Treatment of professional diseases
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ color: "darkgray" }}
          >
            Tooth Extraction
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ color: "darkgray" }}
          >
            Check up
          </Typography>
        </Grid>
        <Grid item sx={6} md={3} style={{ textAlign: "left" }}>
          <Typography variant="subtitle" sx={{ color: "darkgray", mt: 2 }}>
            New York , 1010 Hudson <br /> Yard
          </Typography>
          <Box sx={{ my: 4 }}>
            <FacebookOutlinedIcon
              sx={{ fontSize: 50, color: "#12CEA1" }}
            ></FacebookOutlinedIcon>
            <GoogleIcon sx={{ fontSize: 50, color: "#12CEA1" }}></GoogleIcon>
            <TwitterIcon
              sx={{
                fontSize: 50,
                color: "#12CEA1",
              }}
            ></TwitterIcon>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
