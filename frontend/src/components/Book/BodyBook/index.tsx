import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import './styles.css'
import { Checkbox, FormControlLabel, FormGroup, Switch, TextField } from '@mui/material';

import { Link } from 'react-router-dom';
import SelectAuthor from '../../Author/SelectAuthor';
import Header from '../../Header';
import TableBook from '../TableBook';





const cardPostBook = (
    <React.Fragment>
        <CardContent className='campoBook' >
            <h1>CRIAR NOVO LIVRO</h1>
            <FormGroup className='campoBook'>
                <TextField className='campoBook' label="Título" variant="outlined" size='small' margin="dense" />
                <TextField className='campoBook' label="Qtd páginas" variant="outlined" size='small' margin="dense" />
                <SelectAuthor/>
                <FormControlLabel control={<Checkbox defaultChecked />} label="É digital?" />
                <TextField className='campoBook' label="Tamanho em KBytes" variant="outlined" size='small' margin="dense" />
                <FormControlLabel control={<Switch defaultChecked  />} label="Compativel Kindle" />
            </FormGroup>
            <Button sx={{color: 'white', background: '#25B79D'}} variant="contained">Salvar</Button>
        </CardContent>
    </React.Fragment>
);



// const cardListBook = (
//     <React.Fragment>
//         <CardContent >
//             <TableBook/>
//         </CardContent>
//     </React.Fragment>
// );

export default function BodyBook() {

    return (
        <>
        <Header/>
            <Box >
                <Card className='cardLeftBook' variant="outlined">
                    {cardPostBook}
                </Card>
                {/* <Card className='cardRightBook' variant="outlined" >
                {cardListBook}
            </Card> */}
            </Box>
            <TableBook/>
        </>
    );
}


