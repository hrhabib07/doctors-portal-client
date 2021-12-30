import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date }) => {
  const { name, time, space } = booking;
  const [openModal, setOpenModal] = React.useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, color: "#42a5f5" }}>
            {name}
          </Typography>
          <Typography variant="h6" sx={{ my: 1 }}>
            {time}
          </Typography>
          <Typography variant="subtitle">{space} space available</Typography>{" "}
          <br />
          <Button
            variant="contained"
            onClick={handleModalOpen}
            sx={{ my: 1, backgroundColor: "#1e88e5" }}
          >
            Book Now
          </Button>
        </Paper>{" "}
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        openModal={openModal}
        handleModalClose={handleModalClose}
      ></BookingModal>
    </>
  );
};

export default Booking;
