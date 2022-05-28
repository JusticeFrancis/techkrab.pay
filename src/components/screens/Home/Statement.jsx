import {
    Card,
    CardContent,
    Grid,
    Stack,
    Typography,
    Avatar,
  } from "@mui/material";
  import  ReceiptLong  from "@mui/icons-material/ReceiptLong";
  import {AccountBalance}  from '@mui/icons-material'



  const Statement = () => {
    return (
      <div  style={{ backgroundColor: "green", height: 200, borderRadius: 10}}>
        <CardContent>
          <Stack direction="column">
            <Grid container>
              <Grid item xs={6}></Grid>
              <Grid item xs={6} dir="rtl">
              <Avatar sx={{  backgroundColor: 'white', color: 'green', width: 50, height: 50 }}>
            
                <AccountBalance sx={{ width: 40, height: 40}} />
              </Avatar>
            </Grid>
            </Grid>
  
            <Grid sx={{ position: "relative", top: 65 }}>
              <Typography sx={{ fontSize: 15, fontWeight: "bolder", color: 'white',fontFamily: 'monospace' }}>
                Statement
              </Typography>
              <Typography sx={{ color: "pink" , opacity: 1, fontWeight: 'bolder',fontFamily: 'monospace'}}>Due by May 30th</Typography>
            </Grid>
          </Stack>
        </CardContent>
      </div>
    );
  };
  export default Statement;