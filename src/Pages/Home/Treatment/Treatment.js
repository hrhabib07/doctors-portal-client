import { Button, Container, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import treatment from "../../../images/treatment.png";

const Treatment = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <img src={treatment} style={{ width: "100%" }} alt="" />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            style={{ textAlign: "left", display: "flex", alignItems: "center" }}
          >
            <Box>
              <Typography variant="h3">
                Exceptional Dental <br /> Care, on Your Terms.
              </Typography>
              <Typography
                varian="div"
                style={{ width: "70%", color: "gray" }}
                sx={{ my: 5 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus optio ut soluta nemo id ea tenetur nisi voluptates
                minima, exercitationem aut facere, dolor corporis, doloremque
                quas natus eaque itaque. Vel doloremque sed minus nam amet
                commodi modi eos perspiciatis, aspernatur rerum et, quia
                eligendi aliquam. Delectus omnis ipsa veniam at.
              </Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: "#3EBFA7" }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Treatment;
