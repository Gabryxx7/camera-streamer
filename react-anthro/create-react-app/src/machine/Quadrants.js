import React, { Component }  from 'react';
import Box from '@mui/material/Box';
import GridView from './GridView';
import SingleView from './SingleView';

export default function Quadrants(props) {
    console.log("State: " +props.variant);
    const variant = props.variant || "grid";
    if(variant === "single"){
        return(
            <Box
            margin='auto'
            align='center'
            width='90vw'
            height='95vh'>
                <SingleView />
            </Box>)
    }
    return(
        <Box
        margin='auto'
        align='center'
        width='90vw'
        height='95vh'>
            <GridView />
        </Box>)
}

