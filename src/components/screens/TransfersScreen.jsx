import {
    Button,
    FormControl,
  FormGroup,
  Grid,
  InputLabel,
  Menu,
  MenuItem,
  MenuList,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

const TransferScreen = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div style={{ marginTop: 10 }}>
      <FormGroup>
        <Grid container>
          <Grid item lg={6} xs={12} mx={"auto"}>
            <Grid item lg={12}>
              <TextField
                type={'number'}
                sx={{ width: "100%" }}
                label="Recipient account number"
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                sx={{ width: "100%", mt: 3 }}
                label="Recipient account name"
              />
            </Grid>
            <Grid item lg={12}>
              <FormControl fullWidth sx={{ mt: 3 }}>
                <InputLabel id="demo-simple-select-label">select account</InputLabel>
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
            <Grid item lg={12}>
              <TextField
                sx={{ width: "100%", mt: 3 }}
                label="Transfer amount"
              />
            </Grid>
           
            <Grid item lg={12}>
              <TextField
                sx={{ width: "100%", mt: 3 }}
                label="what is your eldest siblings nick name?"
                placeholder="security question"
              />
            </Grid>
          </Grid>
          <Grid item lg={6}>
            {/*  <TextField sx={{ width: "100%" }} label="Transfer" /> */}
          </Grid>
        </Grid>
      </FormGroup>

      <Grid container sx={{ mt: 3 }}>
          <Grid item sx={4}>
              <Button variant={'contained'} sx={{ backgroundColor:'darkblue' }}>send Funds</Button>
          </Grid>
      </Grid>
    </div>
  );
};

export default TransferScreen;
