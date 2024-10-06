import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { Typography, Stack, Box } from "@mui/material";
import theme from "../../theme";

function SignerCard({ index, signer }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: false, threshold: 0.5 });

  // Trigger fade-in or fade-out based on inView status
  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1, // Fade in when in view
        transition: { duration: 1.5 },
      });
    } else {
      controls.start({
        opacity: 0, // Fade out when out of view
        transition: { duration: 1.5 },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }} // Initially hidden
      animate={controls}
    >
      <Box
        key={index}
        sx={{
          width: {
            lg: index == 1 ? "350px" : "300px",
            md: index == 1 ? "350px" : "300px",
            sm: index == 1 ? "250px" : "200px",
            xs: index == 1 ? "200px" : "180px",
          },
          height: {
            lg: index == 1 ? "350px" : "300px",
            md: index == 1 ? "350px" : "300px",
            sm: index == 1 ? "250px" : "200px",
            xs: index == 1 ? "200px" : "180px",
          },
          border: `3px solid ${theme.palette.secondary.main}`,
        }}
      >
        <img ref={ref} src={signer} width={"100%"} />
      </Box>
    </motion.div>
  );
}

export default SignerCard;
