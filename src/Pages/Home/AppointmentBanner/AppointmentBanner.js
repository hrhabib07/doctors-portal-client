import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import doctorBg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";
const appointmentBg = {
  background: `url(${doctorBg})`,
  marginTop: "170px",
  backgroundColor: "rgba(71, 104, 141 , .9)",
  backgroundBlendMode: "darken, luminosity",
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "100%", marginTop: "-170px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            textAlign: "left",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h6" style={{ color: "#3EBFA7" }}>
              Appointment
            </Typography>
            <Typography variant="h4" sx={{ my: 3 }} style={{ color: "white" }}>
              {" "}
              Make an Appointment Today
            </Typography>
            <Typography
              variant="h6"
              style={{ color: "white", fontSize: 14, fontWeight: 300 }}
              sx={{ mb: 3 }}
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              facere totam aliquam praesentium vel. Amet veniam odio vero
              doloremque laborum.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#3EBFA7" }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
