











import { Avatar, Grid, Stack, Typography } from "@mui/material"
import { Notifications, Search,AutoGraph } from "@mui/icons-material"







const Account = () =>{
  return (
      <>
          <Grid container display='flex'>
              <Grid item xs={6}>
              <Typography sx={{ fontWeight: 'bolder', fontSize: 29, fontFamily: 'monospace' }} >$12,000</Typography>
              <Typography sx={{  color: 'gray', opacity: 0.6,fontFamily: "monospace", fontVariant:'normal', fontWeight: '700'}}>Checking account balance</Typography>
              </Grid>
              <Grid item xs={6} align='right' dir=''>
              <Typography sx={{ fontWeight: 'bolder', fontSize: 29,fontFamily: 'monospace' }} >$40,000</Typography>
              <Typography sx={{ fontWeight: 'bolder', color: 'gray', opacity: 0.6,fontFamily: 'monospace'}}>Savings account balance</Typography>
              </Grid>
              
          </Grid>
      </>
  )
}
export default Account