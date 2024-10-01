import { Typography, Stack, Box, Button } from "@mui/material";
import theme from "../theme";
import PlaylistCard from "../components/common/PlaylistCard";

import pic1 from "../assets/signers/arctic.jpg";
import pic2 from "../assets/signers/eminem.jpg";
import pic3 from "../assets/signers/indila.jpg";
import pic4 from "../assets/signers/radiohead.jpg";
import pic5 from "../assets/signers/thedisturbed.jpg";
import pic6 from "../assets/signers/theweeknd2.jpg";

function GenreSection() {
  const genre = [
    { title: "All", selected: true },
    { title: "POP", selected: false },
    { title: "Rock", selected: false },
    { title: "Metal", selected: false },
    { title: "Jazz", selected: false },
  ];
  const playlists = [
    { title: "POP", link: "", pic: pic1 },
    { title: "Rock", link: "", pic: pic2 },
    { title: "Metal", link: "", pic: pic3 },
    { title: "Jazz", link: "", pic: pic4 },
    { title: "R&B/Soul", link: "", pic: pic5 },
    { title: "Indie/Alternative", link: "", pic: pic6 },
  ];
  const playlistsTorender = [];
  return (
    <Stack
      sx={{
        width: "100%",
        height: "fit-content",
        minHeight: "500px",
        border: "1px dotted red",
      }}
      alignItems={"center"}
      justifyContent={"space-evenly"}
    >
      <Typography fontSize={"50px"}>Top Genre</Typography>
      {/* <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"10px"}
        sx={{ width: "100%", height: "60px", border: "1px dotted yellow" }}
      >
        {genre.map((genre, index) => (
          <Button
            key={index}
            variant={genre.selected ? "contained" : "outlined"}
            size="large"
            sx={{
              width: "150px",
              borderColor: genre.selected
                ? theme.palette.third.main
                : theme.palette.third.main,
              color: theme.palette.secondary.main,
              transform: "skew(-20deg)",
              borderRadius: "0",
              backgroundColor: genre.selected
                ? theme.palette.third.main
                : theme.palette.primary.main,
            }}
          >
            {genre.title}
          </Button>
        ))}
      </Stack> */}
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
