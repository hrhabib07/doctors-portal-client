import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Service = ({ service }) => {
  return (
    <Grid item xs={12} sm={4} md={4}>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardMedia
          component="img"
          style={{ height: "80px", width: "auto", margin: "20px auto" }}
          image={service.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: 500, margin: "10px " }}
          >
            {service.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {service.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
