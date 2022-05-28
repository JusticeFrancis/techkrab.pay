import { Avatar, Grid, Stack, Typography } from "@mui/material";
import { Notifications, Search, AutoGraph } from "@mui/icons-material";
import Typist from "react-typist";
import TypeOut from 'react-typeout';
import TypeIt from "typeit-react";

const Hero = () => {
  return (
    <>
      <Grid
        container
        display="flex"
        sx={{
          backgroundColor: "lightblue",
          padding: 3,
          borderRadius: 5,
          py: { lg: 11 },
        }}
      >
        <Grid item xs={8}>
          <Typography sx={{ fontWeight: "bolder", fontSize: 25 }}>
            <TypeIt > Hi Marcus</TypeIt>
          </Typography>
          <Typography sx={{ fontWeight: "bolder" }}>
            What do you want to do today?
          </Typography>
        </Grid>
        <Grid item xs={4} dir="rtl">
          <Avatar
            variant="square"
            sx={{
              width: 50,
              height: 50,
              backgroundColor: "#329af0",
              borderRadius: 5,
            }}
          >
            {" "}
            <AutoGraph />{" "}
          </Avatar>
        </Grid>
      </Grid>
    </>
  );
};
export default Hero;
