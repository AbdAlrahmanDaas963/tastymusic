import { motion } from "framer-motion";

import { Typography, Stack } from "@mui/material";
import theme from "../theme";

import signer1 from "../assets/signers/arctic.jpg";
import signer2 from "../assets/signers/indila.jpg";
import signer3 from "../assets/signers/theweeknd.webp";
import signer4 from "../assets/genre/Rock.jpeg";
import signer5 from "../assets/genre/Hip-Hop_Rap.png";

import SignerCard from "../components/common/SignerCard";

function SignerSection() {
  const signers = [signer1, signer2, signer3, signer4, signer5];
  return (
    <Stack
      id={"signers"}
      sx={{
        width: "100%",
        height: "100vh",
        minHeight: "500px",
        border: "0px dotted red",
        zIndex: "1",
      }}
      alignItems={"center"}
      justifyContent={"space-evenly"}
    >
      <Typography
        fontSize={{ lg: "50px", md: "50px", sm: "40px", xs: "40px" }}
        sx={{
          padding: { lg: "", md: "", sm: "", xs: "0 30px" },
        }}
      >
        search for your{" "}
        <span style={{ color: theme.palette.third.main }}>favorite</span> signer
      </Typography>
      <motion.div
        style={{ cursor: "grab" }}
        drag="x"
        dragConstraints={{ left: -300, right: 300 }}
      >
        <Stack
          direction={"row"}
          gap={{ lg: "50px", md: "40px", sm: "30px", xs: "20px" }}
          alignItems={"center"}
          sx={{ zIndex: "1" }}
        >
          {signers.map((signer, index) => (
            <SignerCard key={index} index={index} signer={signer} />
          ))}
        </Stack>
      </motion.div>
    </Stack>
  );
}

export default SignerSection;
