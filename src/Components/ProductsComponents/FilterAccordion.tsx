import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SliderForm from './Filter/Forms/SliderForm';
import RadioGroupForm from './Filter/Forms/RadioGroupForm';
import SelectOneForm from './Filter/Forms/SelectOneForm';

export default function SimpleAccordion() {

    const filters = [
        {
            title: 'Price',
            comp: <SliderForm sx={{
                    my: '1em'
                }}/>
        }, {
            title: 'Size',
            comp: <RadioGroupForm/>
        }, {
            title: 'Sort By',
            comp: <SelectOneForm sx={{
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
