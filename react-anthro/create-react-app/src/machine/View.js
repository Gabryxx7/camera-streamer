import React, { Component }  from 'react';
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material';


function ViewTitle(props){
    return (
        <Typography
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='100%'
            height='15%'
            variant="h2">
                {props.title}
        </Typography>
    );
}

function ViewPlaceholder(props){
    const height = props.size === "full" ? '100%' : '85%'
    return (
        <Typography
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='100%'
            height={{height}}
            variant="h3"
            sx={{ border: (theme) => `2px solid ${theme.palette.primary.main}` }}
            >
                {props.title.toUpperCase()}
        </Typography>
    );
}


export default function View(props) {
    const titlePosition = props.titlePosition || "top";
    const titleString = props.title || (props.variant.charAt(0).toUpperCase() + props.variant.slice(1));
    const title =  <ViewTitle title={titleString} />
    const variant = props.variant;
    let size =  props.size || "";
    if(titlePosition === "none"){
        size = "full"
    }
    const placeholder = <ViewPlaceholder title={variant} size={size} />
    return(
        <Stack
        spacing={1}
        alignItems='center'
        align='center'
        textAlign='center'
        width='100%'
        height='100%'>
            {titlePosition === "top" ? title : ""}
            {placeholder}
            {titlePosition === "bottom" ? title : ""}
        </Stack>
    );
}
