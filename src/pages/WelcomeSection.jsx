import React from "react";

import { Typography, Stack, Box, Button } from "@mui/material";

function WelcomeSection() {
  return (
    <Stack direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}>
      <Stack>
        <Typography>Your Favorite Lyrical Channel</Typography>
        <Typography>
          Lyrical music videos with translations to Arabic
        </Typography>
        <Button>Subscribe</Button>
        <Stack>
          <Stack>
            <Typography>3k+</Typography>
            <Typography>Subscriber</Typography>
          </Stack>
          <Stack>
            <Typography>2M+</Typography>
            <Typography>views</Typography>
          </Stack>
          <Stack>
            <Typography>250+</Typography>
            <Typography>videos</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Box
          sx={{ width: "300px", height: "300px", border: "2px dotted blue" }}
        >
          Cat and tabs
        </Box>
      </Stack>
    </Stack>
  );
}

export default WelcomeSection;
