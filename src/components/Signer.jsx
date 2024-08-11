import { Typography, Stack } from "@mui/material";

function Signer() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        minHeight: "800px",
        flexDirection: { xs: "column", md: "row" },
      }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography
        sx={{
          fontSize: { lg: "70px", xs: "50px", md: "60px" },
        }}
      >
        search for your favorite signer
      </Typography>
      <Stack></Stack>
    </Stack>
  );
}

export default Signer;
