import { Grid, Stack } from "@mui/material";
import { render } from "react-dom";
import BottomNavigationBar from "../BottomNavigationBar";
import Account from "./Home/Account";
import Bill from "./Home/Bill";
import Header from "./Home/Header";
import Hero from "./Home/Hero";
import Renew from "./Home/Renew";
import Statement from "./Home/Statement";
import Transfer from "./Home/Transfer";

const Home = () => {
  return (
    <>
      <Stack stack={'column'} spacing={3}>
       
        <Hero />
        <Account />

        <Grid container>
            <Grid item xs={6} lg={4} paddingRight={1} paddingBottom={1}>
                <Bill/>
            </Grid>
            <Grid item xs={6} lg={4} paddingRight={{ sx: 0, lg: 1 }} paddingBottom={1}>
                <Renew/>
            </Grid>
            <Grid item xs={6} lg={4} paddingRight={1} paddingBottom={1}>
                <Statement/>
            </Grid>
            <Grid item xs={6} lg={4}  paddingRight={{ sx: 0, lg: 1 }} paddingBottom={1}>
                <Transfer/>
            </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default Home;
