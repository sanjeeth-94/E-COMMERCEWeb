import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import PersonIcon from '@mui/icons-material/Person';
import GradeIcon from '@mui/icons-material/Grade';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import BackpackIcon from '@mui/icons-material/Backpack';

export default function DrawerComponent({ openDrawer, setOpenDrawer }) {
  // const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

  const items = [
    { text: 'Profile', icon: <PersonIcon /> },
    { text: 'Favorite', icon: <FavoriteIcon /> },
    { text: 'Send email', icon: <SendIcon /> },
  ];

  const items2 = [
    { text: 'Newly', icon: <GradeIcon /> },
    { text: 'Women', icon: <WomanIcon /> },
    { text: 'Men', icon: <ManIcon /> },
    { text: 'Kids', icon: <FamilyRestroomIcon /> },
    { text: "Backpacks", icon: <BackpackIcon />}
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {items.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List
        sx={{
          display: {
            xs: 'block',
            sm: 'block',
            md: 'none',
            lg: 'none',
            xl: 'none',
          },
        }}
      >
        {items2.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
