import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { loadState } from '../../Utils/LocalstorageFn';
import { ICartItem } from '../../Types/Types';
import { Divider } from '@mui/material';

// const products = [
//   {
//     name: 'Product 1',
//     desc: 'A nice thing',
//     price: '$9.99',
//   },
//   {
//     name: 'Product 2',
//     desc: 'Another thing',
//     price: '$3.45',
//   },
//   {
//     name: 'Product 3',
//     desc: 'Something else',
//     price: '$6.51',
//   },
//   {
//     name: 'Product 4',
//     desc: 'Best thing of all',
//     price: '$14.11',
//   },
//   { name: 'Shipping', desc: '', price: '3.99$' },
// ];
const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];


export const totalCal = (products:ICartItem[]) => {
  if (!products) return 0 
      for (let i = 0; i < products.length; i++) {
          const total = products[i].price * products[i].qty 
          // console.log('total: ', total);
              return total || 0;
      }
      return 0
}  
export default function Review() {
  
  const products = loadState('usercart')
  const total = totalCal(products) 
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products?.length > 0 && products.map((product:ICartItem) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            {`${product.qty}x `} <ListItemText primary={product.name}  />
            <Typography variant="body2">${product.price}</Typography>
          </ListItem>
        ))}
        <Divider/>
        <ListItem sx={{px: 0 }}>

<ListItemText primary="Delivery" />
<Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
  $3
</Typography>
</ListItem>
        <ListItem sx={{ px: 0 }}>

          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${total + Number(process?.env?.NEXT_PUBLIC_FEE)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Order Summary
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
   
      </Grid>
    </React.Fragment>
  );
}