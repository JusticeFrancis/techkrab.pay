import {
  Avatar,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Switch,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function Settings() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Grid Container justifyContent={"center"}>
        <Grid container xs={12} margin={"auto"}>
          <Grid item xs={6} sx={{ mb: 3 }}>
            <Avatar
              sx={{ width: 70, height: 70, justifySelf: "center" }}
            ></Avatar>
          </Grid>
          <Grid item xs={6} sx={{ position: 'relative', top: 3 }}>
            <InputLabel>Email updates</InputLabel>
            <Switch  defaultChecked />
        </Grid>
        </Grid>
        <Grid item lg={12} mb={3}>
          <TextField
            type={"number"}
            sx={{ width: "100%" }}
            label="account  number"
          />
        </Grid>
        <Grid item lg={12} mb={3}>
          <TextField
            type={"number"}
            sx={{ width: "100%" }}
            label="account name"
          />
        </Grid>
        <Grid item lg={12} mb={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              select account
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="select account"
              onChange={handleChange}
            >
              <MenuItem value={10}>Access Bank</MenuItem>
              <MenuItem value={20}>UBA</MenuItem>
              <MenuItem value={30}>Eco bank</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
            <InputLabel>Email updates</InputLabel>
            <Switch  defaultChecked />
        </Grid>
      </Grid>

      <Grid container sx={{ mt: 3 }}>
        <Grid item sx={4}>
          <Button variant={"contained"} sx={{ backgroundColor: "darkblue" }}>
            Update
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
