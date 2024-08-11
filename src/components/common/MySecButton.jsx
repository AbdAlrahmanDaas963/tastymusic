import { Button, Box } from "@mui/material";

function MySecButton() {
  return (
    <Box
      sx={{
        width: "200px",
        display: "inline-block",
        position: "relative",
        // padding: "12px 40px",
        transform: "skew(-20deg)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "0",
          padding: "1px", // Adjust to match your border width
          background:
            "linear-gradient(39deg, rgba(97,67,243,1) 29%, rgba(241,125,255,1) 69%, rgba(165,0,138,1) 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
      }}
    >
      <Button
        sx={{
          top: "16px",
          width: "200px",
          position: "relative",
          zIndex: 1,
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(39deg, rgba(97,67,243,1) 29%, rgba(241,125,255,1) 69%, rgba(165,0,138,1) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          fontFamily: "Carter One, system-ui",
          fontSize: "15px",
          // padding: "12px 40px",
          borderRadius: "0",
          textTransform: "none", // Ensure text casing doesn't change
        }}
      >
        Subscribe
      </Button>
    </Box>
  );
}

export default MySecButton;
