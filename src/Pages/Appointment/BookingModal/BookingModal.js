import { Fade, Modal, Typography, Box, TextField, Button } from "@mui/material";
import React from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ handleModalClose, openModal, booking, date }) => {
  const { name, time } = booking;
  const handleSubmit = (e) => {
    alert("submitting");
    //collect data
    // send data to server

    e.preventDefault();
    handleModalClose();
  };
  return (
    <Modal
      open={openModal}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <TextField
            sx={{ width: "80%", my: 1 }}
            disabled
            id="outlined-basic"
            label={time}
            variant="outlined"
          />
          <TextField
            sx={{ width: "80%", my: 1 }}
            id="outlined-basic"
            label="Your Name"
            variant="outlined"
          />
          <TextField
            sx={{ width: "80%", my: 1 }}
            id="outlined-basic"
            type="email"
            label="Your Email"
            variant="outlined"
          />
          <TextField
            sx={{ width: "80%", my: 1 }}
            id="outlined-basic"
            type="number"
            label="Phone Number"
            variant="outlined"
          />
          <TextField
            sx={{ width: "80%", my: 1 }}
            id="outlined-basic"
            disabled
            label={date.toDateString()}
            variant="outlined"
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
