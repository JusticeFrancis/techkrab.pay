import {
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";
import  ReceiptLong  from "@mui/icons-material/ReceiptLong";

const Bill = () => {
  return (
    <div style={{ backgroundColor: "brown", height: 200, borderRadius: 10}}>
      <CardContent>
        <Stack direction="column">
          <Grid container>
            <Grid item xs={6}></Grid>
            <Grid item xs={6} dir="rtl">
              <Avatar sx={{  backgroundColor: 'white', color: 'brown', width: 50, height: 50 }}>
            
                <ReceiptLong sx={{ width: 40, height: 40}} />
              </Avatar>
            </Grid>
          </Grid>

          <Grid sx={{ position: "relative", top: 65 }}>
            <Typography sx={{ fontSize: 15, fontWeight: "bolder", color: 'white',fontFamily: 'monospace' }}>
              Bill payment
            </Typography>
            <Typography sx={{ color: "pink" , opacity: 1, fontWeight: 'bolder' ,fontFamily: 'monospace'}}>Due on May 14th</Typography>
          </Grid>
        </Stack>
      </CardContent>
    </div>
  );
};
export default Bill;
