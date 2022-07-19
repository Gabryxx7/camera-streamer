import React, { Component }  from 'react';
import Box from '@mui/material/Box';
import GridView from './GridView';
import SingleView from './SingleView';

export default function Quadrants(props) {
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
        width='100vw'
        height='100vh'>
            <GridView />
        </Box>)
}

