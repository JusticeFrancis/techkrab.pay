import {
    Card,
    CardContent,
    Grid,
    Stack,
    Typography,
    Avatar,
  } from "@mui/material";
  import  CompareArrows  from "@mui/icons-material/CompareArrows";
  
  const Transfer = () => {
    return (
      <div style={{ backgroundColor: "darkblue", height: 200, borderRadius: 10}}>
        <CardContent>
          <Stack direction="column">
            <Grid container>
              <Grid item xs={6}></Grid>
              <Grid item xs={6} dir="rtl">
              <Avatar sx={{  backgroundColor: 'white', color: 'darkblue', width: 50, height: 50 }}>
            
                <CompareArrows sx={{ width: 40, height: 40}} />
              </Avatar>
            </Grid>
            </Grid>
  
            <Grid sx={{ position: "relative", top: 65 }}>
              <Typography sx={{ fontSize: 15, fontWeight: "bolder" , color: 'white',fontFamily: 'monospace'}}>
                Transfers
              </Typography>
              <Typography sx={{ color: "pink" , opacity: 1, fontWeight: 'bolder',fontFamily: 'monospace'}}>36 Txns</Typography>
            </Grid>
          </Stack>
        </CardContent>
      </div>
    );
  };
  export default Transfer;