import { Typography, Stack, Box } from "@mui/material";
import theme from "../theme";

import signer1 from "../assets/signers/arctic.jpg";
import signer2 from "../assets/signers/indila.jpg";
import signer3 from "../assets/signers/theweeknd.webp";

function SignerSection() {
  const signers = [signer1, signer2, signer3];
  return (
    <Stack
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
      <Typography fontSize={"50px"}>search for your favorite signer</Typography>
      <Stack
        direction={"row"}
        gap={{ lg: "50px", md: "40px", sm: "30px", xs: "20px" }}
        alignItems={"center"}
        sx={{ zIndex: "1" }}
      >
        {signers.map((signer, index) => (
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
            <img src={signer} width={"100%"} />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}

export default SignerSection;
