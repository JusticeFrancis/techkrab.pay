import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Settings,CompareArrows,Home,CreditScore} from '@mui/icons-material'

export default function BottomNavigationBar(props) {
    const{setView} = props
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: '100%', color: 'darkblue',borderTop: '2px solid darkblue' }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="home"
        value="recents"
        sx={{ '&.Mui-selected':{color:'darkblue'} }}
        icon={<CreditScore />}
        onClick = {()=>{
            setView(1)
        }}

      />
      <BottomNavigationAction
        label="transfer"
        value="favorites"
        icon={<CompareArrows />}
        sx={{ '&.Mui-selected':{color:'darkblue'} }}
        onClick = {()=>{
            setView(2)
        }}

      />
      <BottomNavigationAction
        label="settings"
        value="nearby"
        icon={<Settings />}
        sx={{ '&.Mui-selected':{color:'darkblue'} }}
        onClick = {()=>{
            setView(3)
        }}

      />
    </BottomNavigation>
  );
}
