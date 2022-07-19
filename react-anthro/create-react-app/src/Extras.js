import React, { Component }  from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Extra(props) {
    const image = props.image || "https://source.unsplash.com/random";
    const title = props.title || "Jane Doe";
    const url = props.url || "";
    const urlText = props.urlText || url;
    const btnText = props.btnText || 'Click me!';
    const text = props.text || "Lorem Ipsum";
    const padding = '0rem 1.5rem'
    const nameSize = '3rem'
    const textWidth = '50%'
    const textSize = '1.3rem'
    const lineHeight = '1.6rem'
    const imgWidth = '100%'
    const imgHeight = '20%'
    return(
        <Card
            raised={false}
            sx={{
                width:"100%",
                height: "36rem",
                // height:"100%",
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'space-evenly',
                justifyItems: 'space-evenly',
                alignItems: 'center',
                background:'transparent',
                boxShadow: 'unset' }}>
            <CardContent sx={{
                flexGrow: 0,
                padding: padding,
                width:textWidth,
                display: 'flex',
                gap:"2rem",
                height: '100%',
                padding:'0rem 2rem 0rem 2rem',
                flexDirection: 'column',
                justifyItems: 'center',
                alignItems: 'left',
                alignContent: 'center',
                justifyContent: 'center'}}>
            <Typography variant="h5" fontSize={nameSize} align="left" sx={{marginBottom:"0", lineHeight:"1"}}>
                {title}
            </Typography>
            <Typography  display="block" component="div" fontSize={textSize} align="left" lineHeight={lineHeight} sx={{overflowWrap: 'anywhere'}}
                nowrap={false}>
                {text}
            </Typography>
            <Button variant="outlined"
                sx={{
                    alignSelf: 'center',
                    marginTop: "3rem",
                }}>{btnText}</Button>
            </CardContent>
            <Box 
                className="cardWrapper"
                sx={{
                    height:"100%",
                    width:"36rem"
                }}>
                <CardMedia
                component='img'
                image={image}
                alt={title}
                />
            </Box>
        </Card>
    );
}


export default function Extras(props){
    return(
        <Stack
            spacing={5}
            sx={{
                width:"80%",
                alignSelf:"center"
            }}>
            <Extra {...props}
                title="Credits"
                text={
                <div>
                    Design and Prototyping: Yuhan Hou, Haoyu Chen (LLDS) <br/>
                    Computer Vision: Quishi Zhou and Eduardo Velloso (FEIT)  <br/>
                    Electronical Engineering: Eric Schoof (FEIT)  <br/>
                    Structural Engineering: Sascha Bohnenberger, Matthew Tam (Bollinger Grohmann) <br/>
                    Material Testing: Steve Adams (FEIT) <br/>
                    Fabrication: Callan Morgan, Pelican Studio <br/>
                    Website Design: Florence Tang, Melana Uceda <br/>
                    Sponsor Partnership: Festo <br/>
                    Science Gallery Team: Ryan Jefferies, Elsie Brokensha, Jack Farley, Niels Wouters <br/>
                </div>}
                btnText="See More" />
            <Extra {...props}
                title="Development Archive"
                text={
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et neque non velit aliquet aliquam. Suspendisse dictum molestie feugiat.
                    Phasellus augue magna, consequat et suscipit vitae.
                    <br/><br/>
                    Sed massa augue, placerat id placerat id, rhoncus eu ante. Aenean nulla dui, auctor in volutpat non, commodo a elit. 
                </div>}
                btnText="Learn More" />
        </Stack>
    )
}