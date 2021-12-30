import { Container, Icon } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";

const Info = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, backgroundColor: "#11d0db" }}>
              <CardContent>
                <Box>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={3}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AccessTimeIcon
                        sx={{
                          fontSize: 60,
                          color: "white",
                        }}
                      ></AccessTimeIcon>
                    </Grid>
                    <Grid
                      style={{
                        textAlign: "left",
                        color: "white",
                      }}
                      item
                      xs={9}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        Opening Hours
                      </Typography>
                      <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, backgroundColor: "#073E68" }}>
              <CardContent>
                <Box>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={3}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <LocationOnIcon
                        sx={{
                          fontSize: 60,
                          color: "white",
                        }}
                      ></LocationOnIcon>
                    </Grid>
                    <Grid
                      style={{
                        textAlign: "left",
                        color: "white",
                      }}
                      item
                      xs={9}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        Visit Our Location
                      </Typography>
                      <Typography variant="body2">
                        118/b, Hatimbag, Shibgongj, <br /> Sylhet.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, backgroundColor: "#11d0db" }}>
              <CardContent>
                <Box>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={3}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <WifiCalling3Icon
                        sx={{
                          fontSize: 60,
                          color: "white",
                        }}
                      ></WifiCalling3Icon>
                    </Grid>
                    <Grid
                      style={{
                        textAlign: "left",
                        color: "white",
                      }}
                      item
                      xs={9}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        Contact us now
                      </Typography>
                      <Typography variant="body2">
                        +8801777-463003
                        <br />
                        <br />
                      </Typography>
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

export default Info;
