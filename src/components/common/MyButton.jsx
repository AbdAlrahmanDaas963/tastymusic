import { Button } from "@mui/material";
import theme from "../../theme";

function MyButton({ selected, title, link, fullWidth }) {
  return (
    <Button
      variant={selected ? "contained" : "outlined"}
      size="large"
      sx={{
        width: fullWidth ? "100%" : "160px",
        borderColor: selected
          ? theme.palette.third.main
          : theme.palette.third.main,
        color: theme.palette.secondary.main,
        transform: "skew(-20deg)",
        borderRadius: "0",
        backgroundColor: selected
          ? theme.palette.third.main
          : theme.palette.primary.main,
        ...theme.typography.lato,
        fontWeight: "800",
      }}
    >
      {title}
    </Button>
  );
}

export default MyButton;
