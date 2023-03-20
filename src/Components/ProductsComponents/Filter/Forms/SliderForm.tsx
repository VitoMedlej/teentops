import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

function valuetext(value: number) {
  return `${value}°C`;
}

const minDistance = 0;

export default function MinimumDistanceSlider({sx,value,onChange}:{onChange?:any,value?:number[],sx?:any}) {
  const [value1, setValue1] = React.useState<number[]>([1, 2000]);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
    onChange(value1)
  };

  return (
    <Box sx={{...sx}}>
      <Slider
      min={1}
      max={2000}
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
       <span className='gray'> 
        Range :{' '}
       </span>
       <span style={{fontWeight:'600'}}>
        
        {value1[0]}$
        {' - '}
        {value1[1]}$
       </span>
    </Box>
  );
}