import { Typography, Stack, Box, Button } from "@mui/material";
import theme from "../../theme";
import MyButton from "./MyButton";

function PlaylistCard({ title, link, pic }) {
  return (
    <Stack
      sx={{
        width: "300px",
        height: "350px",
        padding: "20px",
        // border: `1px solid ${theme.palette.secondary.main}`,
        boxShadow: `0 0 2px ${theme.palette.secondary.main}`,
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "10px",
      }}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <img
        src={pic}
        width={"100%"}
        height={"200px"}
        style={{ objectFit: "cover" }}
      />
      <Typography>{title}</Typography>
      <MyButton selected={true} title={"Go To Playlist"} fullWidth={true} />
    </Stack>
  );
}

export default PlaylistCard;
