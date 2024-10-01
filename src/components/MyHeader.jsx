import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Stack } from "@mui/material";
import theme from "../theme";

const pages = ["signers", "genre", "Support", "about"];

function MyHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      // position={{ lg: "static", md: "static", sm: "fixed", xs: "fixed" }}
      // position="fixed"
      sx={{
        backgroundColor: "var(--primary-color)",
        fontFamily: "Carter One",
        boxShadow: "0",
        zIndex: "2",
        position: { lg: "static", md: "static", sm: "fixed", xs: "fixed" },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
          disableGutters
        >
          <Stack direction={"row"}>
            <MusicNoteIcon
              htmlColor="#EC29FC"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "inherit",
                textDecoration: "none",
                ...theme.typography.carter,
                fontSize: "20px",
              }}
            >
              TastyMusic
            </Typography>
          </Stack>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{
                      textTransform: "uppercase",
                      color: theme.palette.fourth.main,
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <MusicNoteIcon
            htmlColor="#EC29FC"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          {/* --------------------------- */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,

              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TastyMusic
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "uppercase",
                }}
              >
                <Typography
                  variant="lato"
                  sx={{ fontWeight: "300", fontSize: "13px" }}
                >
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyHeader;
