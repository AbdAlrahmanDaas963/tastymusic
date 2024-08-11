import React from "react";

import { Stack, Typography } from "@mui/material";
// Import Box from @mui/material
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

// import { motion } from "framer-motion";

function Header() {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason !== "backdropClick") {
  //     setOpen(false);
  //   }
  // };
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ border: "1px solid red", height: "60px" }}
    >
      <Typography>TastyMusic</Typography>
      <Stack
        direction={"row"}
        gap={"10px"}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Typography>TastyMusic</Typography>
        <Typography>TastyMusic</Typography>
        <Typography>TastyMusic</Typography>
        <Typography>TastyMusic</Typography>
        <Typography>TastyMusic</Typography>
      </Stack>
      <Stack
        direction={"row"}
        gap={"10px"}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <div>
          {/* <Button onClick={handleClickOpen}>Open select dialog</Button>
          <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Fill the form</DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
          </Dialog> */}
        </div>
      </Stack>
    </Stack>
  );
}

export default Header;
