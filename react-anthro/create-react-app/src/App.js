import * as React from 'react';
import Container from '@mui/material/Container';
// import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import Album from './album/Album.js';
// import Button from '@mui/material/Button';
import Hero from './hero/Hero'
import Machine from './machine/Machine'
import theme from './theme'
import "./main.scss"
import { useState } from 'react'
import { Stack } from '@mui/material';

let state = null;
let setState = null;

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  [state, setState] = useState('gridView')
  return (
      <ThemeProvider theme={theme}>
        <Container  sx={{ maxWidth:'100%'  }} maxWidth={false} disableGutters >
        <Stack
          spacing={9}>
        <Hero theme={theme} />
        <Machine theme={theme} data={state} />
          {/* <Box sx={{ my: 4 }}> */}
        <Album theme={theme}/>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example
        </Typography>
        <ProTip />
        <Copyright />
        </Stack>
    </Container>
      </ThemeProvider>
  );
}
