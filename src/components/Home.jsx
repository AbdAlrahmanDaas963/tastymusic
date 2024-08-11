import { Typography, Stack } from "@mui/material";
import Cat from "../assets/Cat.png";
import MyButton from "./common/MyButton";

function Home() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        minHeight: "800px",
        flexDirection: { xs: "column", md: "row" },
      }}
      // direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {/* left */}
      <Stack width={"100%"}>
        <Stack alignItems={"center"}>
          <Typography
            fontSize={"70px"}
            sx={{
              fontSize: { lg: "70px", xs: "50px", md: "60px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Your Favorite <br />
            Lyrical Channel
          </Typography>
          <Typography>
            Lyrical music videos with translations to Arabic
          </Typography>
          <Stack
            direction={"row"}
            sx={{ paddingLeft: "13px", margin: "25px 0" }}
            gap={"20px"}
          >
            <MyButton />
            {/* <MySecButton /> */}
          </Stack>
          <Stack direction={"row"} gap={"30px"} textAlign={"center"}>
            <Stack>
              <Typography fontSize={"30px"}>2k+</Typography>
              <Typography>Subscriber</Typography>
            </Stack>
            <Stack>
              <Typography fontSize={"30px"}>500,000+</Typography>
              <Typography>view</Typography>
            </Stack>
            <Stack>
              <Typography fontSize={"30px"}>250+</Typography>
              <Typography>Videos</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {/* right */}
      <Stack width={"100%"} alignItems={"center"}>
        <img src={Cat} className="cat-img" />
      </Stack>
    </Stack>
  );
}

export default Home;
