import {React, Component, useState, useEffect, useRef } from 'react';
import View from "./View"
import Webcam from "react-webcam";
import Box from '@mui/material/Box';
import GridView from './GridView';
import SingleView from './SingleView';
import CameraView from "./CameraView"

//The webcam object and its reference need to be here!
//Since the cameraView component gets created multiple times, there needs to be only ONE webcam reference which sends the frame to the server!
export default function Quadrants(props) {
    const wsClient=props.wsClient;
    let webcamRef = useRef(null);
    const videoConstraints = {
        video: {
            width: { min: wsClient.videoWidth/2 },
            height: { min: wsClient.videoHeight/2 }
        }
    };

    useEffect(() => {
        console.log("Hey I'm the webcam!")
        const interval = setInterval(() => {
            const imageSrc = webcamRef.current.getScreenshot({width: wsClient.videoWidth, height: wsClient.videoHeight});
            if(wsClient){
                // console.log("Frame sent")
                wsClient.socket.emit('input image', imageSrc);    
                wsClient.socket.emit('output image')
            }
            else{
                console.log("No websocket client")
            }
            // setSeconds(seconds => seconds + 1);
            }, wsClient.timeBetweenFramesMs);
        return () => clearInterval(interval);
    }, [webcamRef]); 

    const webcam =  <Webcam
        width="100%"
        height="100%"
        audio={false}
        videoConstraints={videoConstraints}
        ref={webcamRef}
        screenshotQuality={wsClient.screenshotQuality}
        screenshotFormat="image/jpeg" />
    
    const variant = props.variant || "grid";
    useEffect(() => {
        console.log("Hey I'm quadrants!")       
    }, []); 

    let machineView = null;
    if(variant === "single"){
        machineView = <SingleView wsClient={props.wsClient} imgSrc={props.imgSrc} webcam={webcam}></SingleView>
    }
    else{
        machineView = <GridView wsClient={props.wsClient} imgSrc={props.imgSrc} webcam={webcam}></GridView>
    }
    return(
        <Box
        margin='auto'
        align='center'
        width='90vw'
        height='95vh'>
            {machineView}
        </Box>)
}

