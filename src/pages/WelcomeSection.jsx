import { Typography, Stack, Box, Button } from "@mui/material";
import theme from "../theme";

import cat from "../assets/Cat.png";
import MyTabe from "../components/common/MyTabe";

function WelcomeSection() {
  return (
    <Stack
      direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
      sx={{
        padding: {
          lg: "50px 100px",
          md: "50px 50px",
          sm: "100px 0 0 0",
          xs: "80px 0 0 0",
        },
        justifyContent: {
          lg: "space-between",
          md: "space-between",
          sm: "center",
          xs: "center",
        },
        alignItems: "center",
        border: "0px solid white",
        height: "fit-content",
        minHeight: "500px",
        maxWidth: "1500px",
        margin: "auto",
        position: "relative",
      }}
    >
      <div className="blurred-circle"></div>
      <Stack
        sx={{ border: "0px dotted red", zIndex: "1" }}
        gap={"25px"}
        alignItems={{
          lg: "flex-start",
          md: "flex-start",
          sm: "center",
          xs: "center",
        }}
      >
        <Typography
          sx={{ fontSize: { lg: "70px", md: "40px", sm: "40px", xs: "35px" } }}
        >
          Your <span style={{ color: theme.palette.third.main }}>Favorite</span>
          <br /> Channel for Lyrics
        </Typography>
        <Stack direction={"row"} gap={"3px"} alignItems={"center"}>
          <Typography
            sx={{
              ...theme.typography.lato,
              fontSize: { lg: "20px", md: "20px", sm: "16px", xs: "16px" },
            }}
          >
            Lyrical music videos with translations to
          </Typography>
          <Typography
            style={{
              ...theme.typography.lato,
              fontSize: { lg: "20px", md: "20px", sm: "16px", xs: "16px" },
              fontWeight: "bold",
            }}
          >
            Arabic
          </Typography>
        </Stack>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: theme.palette.third.main,
            transform: "skew(-20deg)",
            borderRadius: "0",
          }}
        >
          Subscribe
        </Button>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ border: "0px solid green", width: "300px" }}
        >
          <Stack alignItems={"center"}>
            <Typography sx={{ fontSize: "25px" }}>3k+</Typography>
            <Typography sx={{ ...theme.typography.lato }}>
              Subscriber
            </Typography>
          </Stack>
          <Stack alignItems={"center"}>
            <Typography
              sx={{ fontSize: "25px", color: theme.palette.third.main }}
            >
              2M+
            </Typography>
            <Typography sx={{ ...theme.typography.lato }}>views</Typography>
          </Stack>
          <Stack alignItems={"center"}>
            <Typography sx={{ fontSize: "25px" }}>250+</Typography>
            <Typography sx={{ ...theme.typography.lato }}>videos</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Box sx={{ border: "0px dotted blue", position: "relative" }}>
          <Box
            sx={{
              width: { lg: "500px", md: "450px", sm: "300px", xs: "300px" },
            }}
          >
            <img src={cat} width={"100%"} />
          </Box>
          <Box
            sx={{
              width: "100%",
              position: "absolute",
              bottom: "-50px",
              // left: "50%",
              // translateX: "(-50%)",
            }}
          >
            <MyTabe />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}

export default WelcomeSection;
