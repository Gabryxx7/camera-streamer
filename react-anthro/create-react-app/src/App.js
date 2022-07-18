import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import Album from './album/Album.js';
import Button from '@mui/material/Button';
import Hero from './Hero'
import theme from './theme'

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
  return (
      <ThemeProvider theme={theme}>
        <Container  sx={{ maxWidth:'100%'  }} maxWidth={false} disableGutters >
        <Stack spacing={2}>
          <Hero theme={theme} />
          <Paper>Item 1</Paper>
          <Paper>Item 2</Paper>
          <Paper>Item 3</Paper>
        </Stack>Paper
          {/* <Box sx={{ my: 4 }}> */}
        <Album theme={theme}/>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example
        </Typography>
        <ProTip />
        <Copyright />
    </Container>
      </ThemeProvider>
  );
}
