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
import { Categories, DrawerContext } from '../../../pages/_app';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import { IconButton } from '@mui/material';import BlenderIcon from '@mui/icons-material/Blender';
import { useRouter } from 'next/router';

// {setOpen,open} : {open: boolean, setOpen: any}
export default function TemporaryDrawer({cates}:{cates:string[] | undefined}) {
  const [open, setOpen] = useContext(DrawerContext);
  const router =useRouter()
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

  const Lista = () => (
    <Box
      sx={{ width:  'auto' }}
      role="presentation"
      onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer( false)}
    >
      <Box className='flex'
      sx={{margin:'0 .5em',borderBottom:'1px solid #00000040',    justifyContent: 'flex-end'}}
      
      >

              <IconButton 
        
        onClick={toggleDrawer(false)}>
                            <CancelPresentationIcon
                                sx={{
                                  color: 'red'
                                }}/>
                        </IconButton>
                     

                                </Box>
      <List>
        {cates && cates.length > 0 ? cates.map((text, index) => {
          
          if (!text) return;
          return <ListItem
          onClick={()=>router.push(`/category/${text}`)}
          key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <CoffeeMakerIcon /> : <BlenderIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
         }):
        ['products','checkout',''].map((text, index) => {
          if (!text) return;
          return <ListItem
          onClick={()=>router.push(`/category/${text}`)}
          key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <CoffeeMakerIcon /> : <BlenderIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        })
        
        }
      </List>
      <Divider />
      
    </Box>
  );

  return (
    <div>

          <Drawer
            anchor={'right'}
            open={open}
            onClose={toggleDrawer(false)}
          >

  <Lista/>

      
      
          {/* <CategoryMenu category={cates}/> */}

          </Drawer>
    </div>
  );
}