import { Stack, Typography } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function Tabe() {
  return (
    <Stack position={"relative"}>
      <Stack
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",

          width: "100vw",
          minWidth: "1000px",
          height: "70px",
        }}
        className="texture"
        direction={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
          <AutoAwesomeIcon fontSize="large" />
          <Typography fontSize={"30px"}>Regular Updates</Typography>
        </Stack>
        <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
          <AutoAwesomeIcon fontSize="large" />
          <Typography fontSize={"30px"}>Enhanced User Experience</Typography>
        </Stack>
        <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
          <AutoAwesomeIcon fontSize="large" />
          <Typography fontSize={"30px"}>High-Quality Content</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Tabe;
