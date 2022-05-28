import {
    Card,
    CardContent,
    Grid,
    Stack,
    Typography,
    Avatar,
  } from "@mui/material";
  import  LocalOffer  from "@mui/icons-material/LocalOffer";
  
  const Renew = () => {
    return (
      <div style={{ backgroundColor: "purple", height: 200, borderRadius: 10}} >
        <CardContent>
          <Stack direction="column">
            <Grid container>
              <Grid item xs={6}></Grid>
              <Grid item xs={6} dir="rtl">
              <Avatar sx={{  backgroundColor: 'white', color: 'purple', width: 50, height: 50 }}>
            
                <LocalOffer sx={{ width: 40, height: 40}} />
              </Avatar>
            </Grid>
            </Grid>
  
            <Grid sx={{ position: "relative", top: 65 }}>
              <Typography sx={{ fontSize: 15,color: 'white', fontWeight: "bolder",fontFamily: 'monospace' }}>
                Withdraw
              </Typography>
              <Typography sx={{ color: "pink" , opacity: 1, fontWeight: 'bolder',fontFamily: 'monospace'}}>0 withdrawals</Typography>
            </Grid>
          </Stack>
        </CardContent>
      </div>
    );
  };
  export default Renew;
  