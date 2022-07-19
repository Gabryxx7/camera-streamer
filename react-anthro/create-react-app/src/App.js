import * as React from 'react';
import Container from '@mui/material/Container';
// import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from './theme'
import "./main.scss"
import { useState } from 'react'
import { Stack } from '@mui/material';
// import Button from '@mui/material/Button';
import Hero from './hero/Hero'
import Machine from './machine/Machine'
import Collaborators from './collaborators/Collaborators';
import Extras from './Extras'
import Copyright from './copyright/Copyright'

let state = null;
let setState = null;


export default function App() {
  [state, setState] = useState('gridView')
  return (
      <ThemeProvider theme={theme}>
        <Container maxWidth={false} disableGutters >
        <Stack
          spacing={14}>
        <Hero theme={theme} />
        <Machine theme={theme} data={state} />
        <Collaborators />
        <Extras theme={theme} alignSelf="center" />
          {/* <Box sx={{ my: 4 }}> */}
        <Copyright />
        </Stack>
    </Container>
      </ThemeProvider>
  );
}
