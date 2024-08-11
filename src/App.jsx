import Home from "./components/Home";
import "./App.css";
import MyButton from "./components/common/MyButton";
import MySecButton from "./components/common/MySecButton";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <div>
      <MyHeader />
      <Home />
      {/* <MyButton /> */}
      {/* <MySecButton /> */}
    </div>
  );
}

export default App;
