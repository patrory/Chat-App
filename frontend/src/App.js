import { Button } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import "./App.css";
import ChatPage from "./Pages/ChatPage";
import Homepage from "./Pages/Homepage";
import axios from "axios";
function App() {
  return (
    <div className="App">
      <Route path={"/"} component={Homepage} exact />
      <Route path={"/chatpage"} component={ChatPage} />
    </div>
  );
}

export default App;
