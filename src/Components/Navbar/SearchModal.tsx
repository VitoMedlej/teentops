import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SearchInput from './SearchInput';
import { useRouter } from 'next/router';



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface IModal {
    openModal: boolean;
    setOpenModal :  React.Dispatch<React.SetStateAction<boolean>>
}
export default function BasicModal({openModal,setOpenModal}:IModal) {
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const [q,setQ] = React.useState('')
  const router = useRouter()
  const handleSearch = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    if (q.length > 2) {
      router.push(`/category/products?limit=80&search=${q}`)
    }
  }
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <SearchInput
        onSubmit={handleSearch}
        value={q}
        setValue={setQ}
        sx={{width:'100%'}} />



        </Box>
        {/* 
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Search Products
          </Typography>
<Box className="flexed" sx={{position:'relative',mt:1,width:'100%'}}>

         <TextField size='small' placeholder='What are you looking for?' sx={{width:'100%'}}/>
         <IconButton className='cursor' sx={{}}>

         <SearchOutlinedIcon 
         sx={{
           
           position: 'absolute',
           right: '2%',
          }}/>
          </IconButton>
</Box>
        </Box> */}
      </Modal>
    </div>
  );
}