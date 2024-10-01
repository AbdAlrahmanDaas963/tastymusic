import { Typography, Stack, Box } from "@mui/material";

function MyTabe() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        width: "100vw",
        minWidth: "800px",
        height: "60px",
        border: "0px dotted yellow",
        transform: "rotate(-1deg)",
        background: "rgb(77,58,133)",
        backgroundColor:
          "linear-gradient(180deg, rgba(77,58,133,1) 0%, rgba(39,23,89,1) 100%)",
      }}
    >
      <Typography sx={{ border: "1px solid blue", fontSize: "25px" }}>
        Regular Updates
      </Typography>
      <Typography sx={{ border: "1px solid blue", fontSize: "25px" }}>
        Enhanced User Experience
      </Typography>
      <Typography sx={{ border: "1px solid blue", fontSize: "25px" }}>
        High-Quality Content
      </Typography>
    </Stack>
  );
}

export default MyTabe;
