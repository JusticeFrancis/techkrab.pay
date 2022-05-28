import { Avatar, Grid, Stack, Typography } from "@mui/material"
import { Notifications, Search } from "@mui/icons-material"







const Header = () =>{
  return (
      <>
          <Grid container display='flex' paddingY={1} paddingLeft={1} paddingRight={1}>
              <Grid item xs={2}>
              <Avatar  sx={{ width: 50, height: 50, backgroundColor: 'white', color: 'darkblue'}}  />
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={4} dir='rtl' sx={{  position: 'relative', top: 10 }}>
              <Notifications  sx={{fontSize: 30, border: '2px solid white', borderRadius: 2, backgroundColor: 'white', color: 'darkblue'}} />
              <Search sx={{fontSize: 30,mr: {lg:5, xs: 1}, border: '2px solid white', borderRadius: 2, backgroundColor: 'white', color: 'darkblue'}}/>
              </Grid>
          </Grid>
      </>
  )
}
export default Header