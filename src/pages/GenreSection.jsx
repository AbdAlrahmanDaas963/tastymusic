import { Typography, Stack } from "@mui/material";
import PlaylistCard from "../components/common/PlaylistCard";

import rock_pic from "../assets/genre/Rock.jpeg";
import country_pic from "../assets/genre/Country.jpg";
import pop_pic from "../assets/genre/Pop.jpg";
import Electronic_pic from "../assets/genre/Electronic_Dance.png";
import HipHop_pic from "../assets/genre/Hip-Hop_Rap.png";
import Soul_pic from "../assets/genre/R&B_Soul.png";

function GenreSection() {
  const playlists = [
    { title: "Pop", link: "", pic: pop_pic },
    { title: "Rock", link: "", pic: rock_pic },
    { title: "Hip-Hop/Rap", link: "", pic: HipHop_pic },
    { title: "Electronic/Dance", link: "", pic: Electronic_pic },
    { title: "R&B/Soul", link: "", pic: Soul_pic },
    { title: "Country", link: "", pic: country_pic },
  ];
  return (
    <Stack
      id={"genre"}
      sx={{
        width: "100%",
        height: "fit-content",
        minHeight: "500px",
        border: "0px dotted red",
        position: "relative",
      }}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      gap={"50px"}
    >
      <div className="blurred-circle2"></div>
      <Typography fontSize={"50px"}>Top Genre</Typography>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        sx={{ maxWidth: "950px", border: "0px dotted green" }}
        gap={"20px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {playlists.map((playlist, index) => (
          <PlaylistCard
            key={index}
            link={playlist.link}
            title={playlist.title}
            pic={playlist.pic}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default GenreSection;
