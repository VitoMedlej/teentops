import {useContext, useState} from 'react';
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
import { DrawerContext } from '../../../pages/_app';

// {setOpen,open} : {open: boolean, setOpen: any}
export default function TemporaryDrawer() {
const [open, setOpen] = useContext(DrawerContext);

  const toggleDrawer =
    ( open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(open);
    };

  const list = () => (
    <Box
      sx={{ width:  'auto' }}
      role="presentation"
      onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer( false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </Box>
  );

  return (
    <div>
          <Drawer
            anchor={'top'}
            open={true}
            onClose={toggleDrawer( false)}
          >
      <List>

             <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                foobaricon
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText>
                hello world
              </ListItemText>
            </ListItemButton>
          </ListItem>
          </List>

          </Drawer>
    </div>
  );
}