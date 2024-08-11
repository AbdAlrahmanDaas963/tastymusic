import Home from "./components/Home";
import "./App.css";
import MyHeader from "./components/MyHeader";
import Tabe from "./components/common/Tabe";
import Signer from "./components/Signer";
import Tabe2 from "./components/common/Tabe2";

function App() {
  return (
    <div>
      <MyHeader />
      <Home />
      {/* <Tabe /> */}
      <Tabe2 />
      <Signer />
      {/* <MyButton /> */}
      {/* <MySecButton /> */}
    </div>
  );
}

export default App;
