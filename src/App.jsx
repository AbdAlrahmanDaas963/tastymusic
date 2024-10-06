import Home from "./components/Home";
import "./App.css";
import MyHeader from "./components/MyHeader";
import Tabe from "./components/common/Tabe";
import Signer from "./components/Signer";
import Tabe2 from "./components/common/Tabe2";
import WelcomeSection from "./pages/WelcomeSection";
import { Box, Typography } from "@mui/material";
import theme from "./theme";
import DevDimensions from "./development/DevDimensions";
import SignerSection from "./pages/SignerSection";
import GenreSection from "./pages/GenreSection";
import FeedbackSection from "./pages/FeedbackSection";
import Footer from "./pages/Footer";

function App() {
  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main, color: "#fff" }}>
      <DevDimensions /> {/* Remove or hide after development */}
      <MyHeader />
      <WelcomeSection />
      <SignerSection />
      <GenreSection />
      <FeedbackSection />
      <Footer />
      {/* <Tabe2 /> */}
      {/* <Signer /> */}
      {/* <Home /> */}
      {/* <Tabe /> */}
      {/* <MyButton /> */}
      {/* <MySecButton /> */}
    </Box>
  );
}

export default App;
