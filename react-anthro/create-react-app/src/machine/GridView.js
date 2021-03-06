import React, { Component }  from 'react';
import CameraView from "./CameraView"
import OpenPoseView from "./OpenPoseView"
import CodeView from "./CodeView"
import VisualisationView from "./VisualisationView"
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


export default function GridView(props) {
    return(<Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
        width='100%'
        height='100%'>
        <Grid item xs={6}>
            {props.children}
            <CameraView titlePosition="top" wsClient={props.wsClient} webcam={props.webcam} />
        </Grid>
        <Grid item xs={6}>
            <OpenPoseView titlePosition="top" wsClient={props.wsClient} imgSrc={props.imgSrc}   />
        </Grid>
        <Grid item xs={6}>
            <CodeView titlePosition="bottom" wsClient={props.wsClient} />
        </Grid>
        <Grid item xs={6}>
            <VisualisationView titlePosition="bottom" wsClient={props.wsClient}/>
        </Grid>
    </Grid>
    );
}