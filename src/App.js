import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/screens/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/home" element={<Home />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

