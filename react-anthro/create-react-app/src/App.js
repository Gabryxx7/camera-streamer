import {React, Component, useState, useEffect } from 'react';
import Container from '@mui/material/Container';
// import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from './theme'
import "./main.scss"
import { Stack } from '@mui/material';
// import Button from '@mui/material/Button';
import Hero from './hero/Hero'
import Machine from './machine/Machine'
import Collaborators from './collaborators/Collaborators';
import Extras from './Extras'
import Copyright from './copyright/Copyright'
import { w3cwebsocket as W3CWebSocket } from "websocket";


export default function App() {
  const [wsConnected, setWsConnected] = useState(false);
  const [state, setState] = useState('gridView');
  let client = null;
  useEffect(() => {
      if(!wsConnected){
          client = new W3CWebSocket('ws://anthropomorphicmachine.com:3006/ws');
          client.onopen = () => {
              console.log('WebSocket Client Connected');
              setWsConnected(true)
          };
          
          client.onmessage = (message) => {
              console.log(message);
          };
          client.onerror = function() {
              console.log('Connection Error');
          };
      }
    // Update the document title using the browser API
  });
    return (
        <ThemeProvider theme={theme}>
          <Container maxWidth='false' disableGutters >
          <Stack
            spacing={14}>
          <Hero theme={theme} />
          <Machine theme={theme} data={state} maxWidth='40%' />
          <Collaborators  maxWidth='60%'/>
          <Extras theme={theme} alignSelf="center" maxWidth='40%' />
            {/* <Box sx={{ my: 4 }}> */}
          <Copyright />
          </Stack>
      </Container>
        </ThemeProvider>
    );
}