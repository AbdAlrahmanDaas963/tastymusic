import { Typography, Stack, Box, Button } from "@mui/material";
import theme from "../theme";
import PlaylistCard from "../components/common/PlaylistCard";

function GenreSection() {
  const genre = [
    { title: "All", selected: true },
    { title: "POP", selected: false },
    { title: "Rock", selected: false },
    { title: "Metal", selected: false },
    { title: "Jazz", selected: false },
  ];
  const playlists = [
    { title: "POP", link: "", pic: "" },
    { title: "Rock", link: "", pic: "" },
    { title: "Metal", link: "", pic: "" },
    { title: "Jazz", link: "", pic: "" },
    { title: "R&B/Soul", link: "", pic: "" },
    { title: "Indie/Alternative", link: "", pic: "" },
  ];
  const playlistsTorender = [];
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        minHeight: "500px",
        border: "0px dotted red",
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
        sx={{ maxWidth: "950px", border: "2px dotted green" }}
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
