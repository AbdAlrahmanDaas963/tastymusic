import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Typography, Stack, Box } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import theme from "../../theme";

function MyTabe() {
  const [currentFeature, setCurrentFeature] = useState(0);

  // The features that will flip
  const features = [
    "Regular Updates",
    "Enhanced User Experience",
    "High-Quality Content",
  ];

  // Text flip animation variant
  const textVariants = {
    hidden: { opacity: 0, y: 20 }, // Fade out and move down
    visible: { opacity: 1, y: 0 }, // Fade in and move up
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prevFeature) => (prevFeature + 1) % features.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [features.length]);

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      sx={{
        padding: "10px",
        width: "100%",
        height: "60px",
        border: "0px dotted yellow",
        borderRadius: "10px",
        background: "rgb(77,58,133)",
        backgroundColor:
          "linear-gradient(180deg, rgba(77,58,133,1) 0%, rgba(39,23,89,1) 100%)",
      }}
      gap={"10px"}
    >
      <AutoAwesomeIcon htmlColor={theme.palette.third.main} />
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={textVariants}
        transition={{ duration: 0.5 }}
        key={currentFeature}
      >
        <Typography
          sx={{
            fontSize: "19px",
            color: theme.palette.secondary.main,
          }}
        >
          {features[currentFeature]}
        </Typography>
      </motion.div>
      {/* <Typography
        sx={{ fontSize: "20px", color: theme.palette.secondary.main }}
      >
        High-Quality Content
      </Typography> */}
    </Stack>
  );
}

export default MyTabe;
