import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectSmall({sx}:any) {
  const [size, setSize] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value);
  };

  return (
    <FormControl   variant="outlined" sx={{ my:0.5,  width : '100%',...sx }} size="small">
      <InputLabel id="demo-select-small">Select Size</InputLabel>
      <Select
       
        labelId="demo-select-small"
        id="demo-select-small"
        value={size}
        label="Size"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}