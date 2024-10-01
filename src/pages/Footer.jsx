import { Typography, Stack } from "@mui/material";

import theme from "../theme";

import MusicNoteIcon from "@mui/icons-material/MusicNote";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const MyItem = ({ index, title }) => {
  return (
    <Typography
      sx={{
        ...theme.typography.lato,
        fontWeight: index == 0 ? "800" : "",
        fontSize: index == 0 ? "20px" : "16px",
        textTransform: "capitalize",
      }}
    >
      {title}
    </Typography>
  );
};

function Footer() {
  const company = [
    { title: "company", link: "" },
    { title: "products", link: "" },
    { title: "apps & games", link: "" },
    { title: "features", link: "" },
  ];
  const help = [
    { title: "help", link: "" },
    { title: "support", link: "" },
    { title: "about", link: "" },
    { title: "contact us", link: "" },
  ];
  const resources = [
    { title: "resources", link: "" },
    { title: "youtube playlist", link: "" },
    { title: "how to - blog", link: "" },
    { title: "terms & conditions", link: "" },
  ];
  return (
    <Stack
      sx={{
        width: "100%",
        height: "fit-content",
        minHeight: "500px",
        border: "1px dotted green",
        padding: "50px 0",
      }}
      alignItems={"center"}
      justifyContent={"center"}
      gap={{ lg: "50px", md: "40px", sm: "30px", xs: "30px" }}
    >
      <Stack
        direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
        alignItems={"center"}
        justifyContent={"center"}
        gap={{ lg: "50px", md: "40px", sm: "30px", xs: "30px" }}
        flexWrap={"wrap"}
      >
        <Stack direction={"row"}>
          <MusicNoteIcon htmlColor="#EC29FC" fontSize="large" />
          <Typography fontSize={"30px"}>TastyMusic</Typography>
        </Stack>
        <Stack
          direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={"30px"}
        >
          <Stack
            sx={{ border: "0px dotted blue", width: "150px" }}
            gap={"10px"}
          >
            {company.map((item, index) => (
              <MyItem key={index} index={index} title={item.title} />
            ))}
          </Stack>
          <Stack
            sx={{ border: "0px dotted blue", width: "150px" }}
            gap={"10px"}
          >
            {help.map((item, index) => (
              <MyItem key={index} index={index} title={item.title} />
            ))}
          </Stack>
          <Stack
            sx={{ border: "0px dotted blue", width: "150px" }}
            gap={"10px"}
          >
            {resources.map((item, index) => (
              <MyItem key={index} index={index} title={item.title} />
            ))}
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"20px"}
        flexWrap={"wrap"}
      >
        <Stack direction={"row"} gap={"10px"}>
          <YouTubeIcon fontSize="large" htmlColor="#D9D9D9" />
          <InstagramIcon fontSize="large" htmlColor="#D9D9D9" />
          <LinkedInIcon fontSize="large" htmlColor="#D9D9D9" />
        </Stack>
        <Typography sx={{ ...theme.typography.lato, fontSize: "15px" }}>
          © Copyright 2024, All Rights Reserved by TastyMusic
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Footer;
