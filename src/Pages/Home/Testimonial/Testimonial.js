import { Avatar, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";

const Testimonial = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "left", my: 5 }}>
        <Typography variant="h6" style={{ color: "#11d0db", fontWeight: 600 }}>
          Testimonial
        </Typography>
        <Typography variant="h4" style={{ fontWeight: 500 }}>
          What our patients <br /> Says
        </Typography>
      </Box>
      <Box flexGrow={1}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: "left" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores quisquam doloribus animi voluptates dicta perferendis
                  vero ut eum earum unde beatae natus provident, reprehenderit
                  cumque magni, ullam architecto quae adipisci perspiciatis enim
                  commodi repellat! Dolorum iure labore vitae assumenda
                  cupiditate.
                </Typography>
                <Box
                  sx={{
                    my: 1,
                  }}
                >
                  <Grid container>
                    <Grid xs={2}>
                      <Avatar sx={{}} aria-label="recipe">
                        <img src={people1} style={{ width: "100%" }} alt="" />
                      </Avatar>
                    </Grid>
                    <Grid xs={10}>
                      <Typography
                        variant="div"
                        sx={{ fontWeight: 700, color: "#11d0db" }}
                      >
                        Wilson Harry
                      </Typography>
                      <Typography>California</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ minWidth: 275, textAlign: "left" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores quisquam doloribus animi voluptates dicta perferendis
                  vero ut eum earum unde beatae natus provident, reprehenderit
                  cumque magni, ullam architecto quae adipisci perspiciatis enim
                  commodi repellat! Dolorum iure labore vitae assumenda
                  cupiditate.
                </Typography>
                <Box
                  sx={{
                    my: 1,
                  }}
                >
                  <Grid container>
                    <Grid xs={2}>
                      <Avatar sx={{}} aria-label="recipe">
                        <img src={people2} style={{ width: "100%" }} alt="" />
                      </Avatar>
                    </Grid>
                    <Grid xs={10}>
                      <Typography
                        variant="div"
                        sx={{ fontWeight: 700, color: "#11d0db" }}
                      >
                        Wilson Harry
                      </Typography>
                      <Typography>California</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ minWidth: 275, textAlign: "left" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores quisquam doloribus animi voluptates dicta perferendis
                  vero ut eum earum unde beatae natus provident, reprehenderit
                  cumque magni, ullam architecto quae adipisci perspiciatis enim
                  commodi repellat! Dolorum iure labore vitae assumenda
                  cupiditate.
                </Typography>
                <Box
                  sx={{
                    my: 1,
                  }}
                >
                  <Grid container>
                    <Grid xs={2}>
                      <Avatar sx={{}} aria-label="recipe">
                        <img src={people3} style={{ width: "100%" }} alt="" />
                      </Avatar>
                    </Grid>
                    <Grid xs={10}>
                      <Typography
                        variant="div"
                        sx={{ fontWeight: 700, color: "#11d0db" }}
                      >
                        Wilson Harry
                      </Typography>
                      <Typography>California</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Testimonial;
