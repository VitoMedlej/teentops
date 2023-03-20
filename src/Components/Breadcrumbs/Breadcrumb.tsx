import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';


function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}

export default function ActiveLastBreadcrumb({sx,params}:{sx?:any,params:string[]}) {
const router = useRouter();
const query =  router?.query?.products;

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs sx={{mx:'1em',pb:'.5em',...sx}} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          <Typography>
          Home
          </Typography>
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href={params && params[0] || '/'}
        >
          <Typography>

          {params && params[0]}
          </Typography>
        </Link>
   {
    params &&
          params[1]
   &&
   <Typography>

        {!query ?   params[1] : query} 
        </Typography>}
      </Breadcrumbs>
    </div>
  );
}