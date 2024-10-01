import { Typography, Stack, Box, Button } from "@mui/material";
import theme from "../../theme";

function PlaylistCard({ title, link, pic }) {
  return (
    <Stack
      sx={{
        width: "300px",
        height: "200px",

        border: `1px solid ${theme.palette.secondary.main}`,
      }}
    >
      {title}
    </Stack>
  );
}

export default PlaylistCard;
