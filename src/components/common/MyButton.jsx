import { Button } from "@mui/material";

function MyButton() {
  return (
    <Button
      sx={{
        width: "200px",
        height: "70px",
        transform: "skew(-20deg)",
        backgroundColor: "white",
        // background: "rgb(97,67,243)",
        background:
          "linear-gradient(39deg, rgba(97,67,243,1) 29%, rgba(241,125,255,1) 69%, rgba(165,0,138,1) 100%)",
        borderRadius: "0",
        color: "white",
        fontFamily: "Carter One, system-ui",
        fontSize: "20px",
        padding: "12px 40px",
      }}
    >
      Subscribe
    </Button>
  );
}

export default MyButton;
