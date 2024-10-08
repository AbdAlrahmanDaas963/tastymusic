import { Typography, Stack, Box } from "@mui/material";
import theme from "../theme";

import person1 from "../assets/feedbacks/person1.png";
import person2 from "../assets/feedbacks/person2.png";
import FeedbackCard from "../components/common/FeedbackCard";

function FeedbackSection() {
  return (
    <Stack
      id={"Support"}
      sx={{
        width: "100%",
        height: "fit-content",
        minHeight: "500px",
        border: "0px dotted green",
        padding: { lg: "", md: "", sm: "", xs: "100px 0" },
      }}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={{ lg: "20px", md: "70px", sm: "70px", xs: "70px" }}
      flexWrap={"wrap"}
    >
      <FeedbackCard
        city={"USA, Virginia"}
        comment={
          "This is absolute fire! The visuals and lyrics blend together perfectly."
        }
        name={"Mark zuck"}
        person={person2}
      />
      <FeedbackCard
        city={"UAE, Dubai"}
        comment={
          "Your channel is a goldmine for lyric lovers! Keep delivering these gems!"
        }
        name={"Fares Khaled"}
        person={person1}
      />
    </Stack>
  );
}

export default FeedbackSection;
