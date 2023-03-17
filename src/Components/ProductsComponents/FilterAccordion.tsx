import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SliderForm from './Filter/Forms/SliderForm';
import SelectOneForm from './Filter/Forms/SelectOneForm';

export default function SimpleAccordion({options,setOptions}:any) {
   
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     // setValue(();
    //     let val = (event.target as HTMLInputElement).value;
    //     setOptions({...options,category:val})
    //   };
    const handlePrice = (value:number[]) => {
        // let price = ;
        setOptions({...options,price:value})
    }
    const handleSort = (val:string) => {
        setOptions({...options,sort:val})

    }
    const filters = [
        {
            title: 'Price',
            comp: <SliderForm
            value={options.price}
            onChange={handlePrice}
            sx={{
                    my: '1em'
                }}/>
        },
        //  {
        //     title: 'Category',
        //     comp: <RadioGroupForm
        //     value={options.category}
        //     setValue={
        //         handleChange
        //         }
        //     />
        // },
         {
            title: 'Sort By',
            comp: <SelectOneForm
            value={options.sort}
            setValue={handleSort}
            sx={{
                    // my: '1em'
                }}/>
        }
    ]
    return (
        <div>
            {filters.map(filter => {

                return <Accordion
                    key={filter.title}
                    sx={{
                    boxShadow: 'none'
                }}>
                    <AccordionSummary
                        sx={{
                        padding: 0
                    }}
                        expandIcon={< ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>{filter.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                        padding: 0
                    }}>
                        {filter.comp}
                    </AccordionDetails>
                </Accordion>
            })}
        </div>
    );
}
