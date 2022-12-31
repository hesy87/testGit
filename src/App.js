import "./App.css";
import Body from "./components/body";
import Navbar from "./components/navbar";
import { useState, createContext } from "react";

const userContext = createContext();

const navList = ["Home", "About", "Contact"];
function App(props) {
  const [header, setHeader] = useState();
  console.log(header);
  return (
    <userContext.Provider value={{ header, setHeader }}>
      <Navbar items={navList} />
      <Body header={header} />
    </userContext.Provider>
  );
}

export default App;
