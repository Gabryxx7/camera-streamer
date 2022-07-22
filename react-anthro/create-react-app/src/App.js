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
import io from 'socket.io-client';

const URL = "https://anthropomorphicmachine.com:3006/test";

class SWARM_WebSocket{
    constructor(url) {
      this.socket = io(url, { autoConnect: true });
      // this.initialized = false;
      this.timeBetweenFramesMs = 66;
      this.screenshotQuality = 0.6;
      this.videoHeight = 480
      this.videoWidth = 640
      this.lastFrame = null;
      this.setWsConnected
    }  
}
const wsClient = new SWARM_WebSocket(URL);

//WATCHOUT!!! React v18 fires UseEffect() twice when in strict mode, I hve removed it from index.js! Check here:
//https://www.techiediaries.com/react-18-useeffect/#:~:text=If%20you%20have%20just%20made,upgraded%20to%20React%20version%2018.

export default function App() {
  const [state, setState] = useState('gridView');
  const [wsConnected, setWsConnected] = useState(wsClient.socket.connected);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    console.log("Hey I'm App!")
    if(!wsClient.socket.connected){
      wsClient.socket.on('connect', () => {
        setWsConnected(true);
        wsClient.initialized = true;
        wsClient.socket.emit('Hey yo! Connected!');
        console.log("Websocket connected!")
      });

      wsClient.socket.on('disconnect', () => {
        setWsConnected(false);
      });

      wsClient.socket.on('out-image-event', (data) => {
        // console.log("Received a frame! (out-image-event)")
        // img.src = data.image_data;
        wsClient.lastFrame = data.image_data;
        setImgSrc(wsClient.lastFrame);
      });
    }
      return () => {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('pong');
      };
  }, []);
  
    return (
        <ThemeProvider theme={theme}>
          <Container maxWidth='false' disableGutters >
            <Stack
              spacing={14}>
            <Hero theme={theme} />
            <Machine theme={theme} data={state} wsClient={wsClient} imgSrc={imgSrc} maxWidth='40%' />
            <Collaborators  maxWidth='60%'/>
            <Extras theme={theme} alignSelf="center" maxWidth='40%' />
            <Copyright />
            </Stack>
          </Container>
        </ThemeProvider>
    );
}