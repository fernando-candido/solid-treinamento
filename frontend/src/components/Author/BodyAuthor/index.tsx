import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import './styles.css'
import { TextField } from '@mui/material';
import TableAuthor from '../TableAuthor';
import Header from '../../Header';

const cardPostAuthor = (
    <React.Fragment>
        <CardContent >
        <h1>CRIAR NOVO AUTOR</h1>
            <TextField className='campoAuthor' label="Nome do autor" variant="outlined" size='small'  margin="dense"/>
            <Button sx={{color: 'white', background: '#25B79D'}} variant="contained">Salvar</Button>
        </CardContent>
    </React.Fragment>
);



// const cardListAuthor = (
//     <React.Fragment>
//         <CardContent >
//             <TableAuthor/>
//         </CardContent>
//     </React.Fragment>
// );

export default function BodyAuthor() {
    
    return (
        <>
        <Header/>
        <div className='body-author-container'>
        <Box >
            <Card className='cardLeft' variant="outlined">
                {cardPostAuthor}
            </Card>
            {/* <Card className='cardRight' variant="outlined" >
                {cardListAuthor}
            </Card> */}
        </Box>
        <div className='tabela-autor'>
        <TableAuthor/>
        </div>
        </div>
        </>
    );
}


