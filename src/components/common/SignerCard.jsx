import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { Typography, Stack, Box } from "@mui/material";
import theme from "../../theme";

function SignerCard({ index, signer }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: false, threshold: 0.5 });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { duration: 1.5 },
      });
    } else {
      controls.start({
        opacity: 0,
        transition: { duration: 1.5 },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={controls}>
      <Box
        key={index}
        sx={{
          width: {
            lg: "300px",
            md: "300px",
            sm: "200px",
            xs: "180px",
          },
          height: {
            lg: "300px",
            md: "300px",
            sm: "200px",
            xs: "180px",
          },
          border: `3px solid ${theme.palette.secondary.main}`,
        }}
      >
        <img ref={ref} src={signer} width={"100%"} draggable={false} />
      </Box>
    </motion.div>
  );
}

export default SignerCard;
