import { Card, CardContent } from "@mui/material";
import Container from "@mui/material/Container";
import { useState } from "react";
import BottomNavigationBar from "./BottomNavigationBar";
import Home from "./screens/Home";
import Header from "./screens/Home/Header";
import Settings from "./screens/Settings";
import TransferScreen from "./screens/TransfersScreen";

const Main = () => {
    const [view, setView] = useState(1)
  return (
    <>
      <div style={{ boxShadow: "0px 0px 5px 0px purple", backgroundColor: 'darkblue' }}>
        <Header />
      </div>
      <Container sx={{ mt: 3, height:{xs: 510 , lg: 571}, overflowY:'scroll' }}>
        {view === 1 ? (<Home />) : null}
        {view === 2 ? (<TransferScreen />) : null}
        {view === 3 ? (<Settings />) : null}
      </Container>
      <BottomNavigationBar setView={setView} />
    </>
  );
};

export default Main;
