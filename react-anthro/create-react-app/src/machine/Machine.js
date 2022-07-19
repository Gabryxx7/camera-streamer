import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Quadrants from './Quadrants';

export default function Machine(props) {
    return (
        <Stack 
          spacing={1}
          justifyItems='center'
          justifyContent='center'
          alignItems='center'
          alignContent='center'>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            The Machine
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Lorem ipsum about interacting.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="outlined">Join Queue</Button>
          </Stack>
        </Container>
        <Quadrants 
            variant={props.quadrantView} 
            width='100%'
            height='100vh'/>
      </Stack>
  );
}