import { Typography, Stack, Box } from "@mui/material";
import theme from "../../theme";

function FeedbackCard({ comment, person, name, city }) {
  return (
    <Stack
      sx={{
        width: "530px",
        maxWidth: "95vw",
        minWidth: "350px",
        height: "250px",
        boxShadow: `0 0 2px ${theme.palette.secondary.main}`,
        borderRadius: "10px",
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        padding: "35px",
        position: "relative",
      }}
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Stack
        sx={{
          position: "absolute",
          zIndex: "1",
          top: "-52px",
          right: "20px",
        }}
        direction={"row"}
        gap={"20px"}
      >
        <Box
          sx={{
            width: "40px",
            height: "80px",
            backgroundColor: "#FF24E4",
            clipPath: "polygon(0 0, 100% 50%, 100% 100%, 0 100%)",
          }}
        ></Box>
        <Box
          sx={{
            width: "40px",
            height: "80px",
            backgroundColor: "#7850FE",
            clipPath: "polygon(0 0, 100% 50%, 100% 100%, 0 100%)",
          }}
        ></Box>
      </Stack>
      <Stack
        sx={{ height: "100%" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography sx={{ ...theme.typography.lato }}>{comment}</Typography>
      </Stack>
      <Box
        sx={{
          widht: "100%",
          height: "2px",
          backgroundColor: "rgb(217,217,217)",
          background:
            "linear-gradient(90deg, rgba(217,217,217,1) 0%, rgba(217,217,217,0) 100%)",
        }}
      />
      <Stack justifyContent={"center"} sx={{ height: "100%" }}>
        <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
          <Box sx={{ width: "60px", height: "60px" }}>
            <img src={person} width={"100%"} />
          </Box>
          <Stack>
            <Typography
              sx={{
                ...theme.typography.lato,
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {name}
            </Typography>
            <Typography sx={{ ...theme.typography.lato }}>{city}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default FeedbackCard;
