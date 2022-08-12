import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import './styles.css'
import { TextField } from '@mui/material';
import TableAuthor from '../TableAuthor';

const cardPostAuthor = (
    <React.Fragment>
        <CardContent >
        <h1>CRIAR NOVO AUTOR</h1>
            <TextField className='campoAutor' label="Nome do autor" variant="outlined" size='small'  margin="dense"/>
            <Button className="botao" variant="contained">Salvar</Button>
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
        <Box >
            <Card className='cardLeft' variant="outlined">
                {cardPostAuthor}
            </Card>
            {/* <Card className='cardRight' variant="outlined" >
                {cardListAuthor}
            </Card> */}
            
        </Box>
        <TableAuthor/>
        </>
    );
}


