import React, { Component }  from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function CollaboratorCard(props){
    const image = props.image || "https://source.unsplash.com/random";
    const name = props.name || "Jane Doe";
    const url = props.url || "";
    const urlText = props.urlText || url;
    const description = props.description || "Lorem Ipsum";
    const direction = props.direction || 'row';
    const xs =  direction === 'row' ? 12 : 2.5
    const imgWidth = direction === 'row' ? '100%' : '100%'
    const imgHeight = direction === 'row' ? '100%' : '100%'
    const padding = direction === 'row' ? '0rem 2.5rem' : '2rem 0rem'
    const nameSize = direction === 'row' ? '3rem' : '1.8rem'
    const textWidth = direction === 'row' ? '75%' : '100%'
    const textSize = direction === 'row' ? '1.3rem' : '1.1rem'
    const lineHeight = direction === 'row' ? '1.6rem' : '1.25rem'
    return(
        <Grid item xs={xs}>
            <Card
                raised={false}
                sx={{
                    display: 'flex',
                    flexDirection: direction,
                    alignItems: 'center',
                    justifyItems: 'center',
                    background:'transparent',
                    boxShadow: 'unset' }}>
                <Box 
                    className="cardWrapper">
                    <CardMedia
                    component='img'
                    image={image}
                    alt={name}
                    sx={{
                        width:imgWidth,
                        height:imgHeight
                    }}
                    />
                </Box>
                <CardContent sx={{ flexGrow: 0, padding: padding, width:textWidth }}>
                <Typography variant="h5" fontSize={nameSize} align="left" sx={{marginBottom:"0", lineHeight:"1"}}>
                    {name}
                </Typography>
                <Link href={url} color="primary" fontSize="14pt">{urlText}</Link>
                <Typography  component='div' display="block" fontSize={textSize} align="left" lineHeight={lineHeight} sx={{marginTop:"1.5rem", overflowWrap: 'anywhere'}}
                    nowrap='false'>
                    {description}
                </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default function Collaborators(props) {
    return(
        <Stack
        width="75%"
        alignSelf="center"
        spacing={6}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          marginBottom="3rem"
        >
          About The Collaborators
        </Typography>
            <Grid
            height="100%"
            align="left"
            container
            justifyItems="space-around"
            justifyContent="space-around"
            alignItems="space-around"
            alignContent="space-around"
            rowGap={12}
            direction="row">
            <CollaboratorCard direction='row' image={require("./media/stelarc.png")} name="Stelarc" description={
                <div>
                Stelarc is a performance artist who has visually probed and acoustically amplified his body.
                He has made three films of the inside of his body. Between 1976-1988 he completed 26 body suspension performances with hooks into the skin.
                He has used medical instruments, prosthetics, robotics, Virtual Reality systems, the Internet and biotechnology to engineer intimate and involuntary interfaces with the body. He explores Alternate Anatomical Architectures with augmented and extended body constructs.
                <br/><br/>
                He has performed with a THIRD HAND, an EXTENDED ARM, a VIRTUAL ARM, a STOMACH SCULPTURE and EXOSKELETON, a 6-legged walking robot.
                His FRACTAL FLESH, PING BODY and PARASITE performances explored involuntary, remote and internet choreography of the body with electrical stimulation of the muscles.
                His PROSTHETIC HEAD is an embodied conversational agent that speaks to the person who interrogates it. He is surgically constructing an EXTRA EAR on his arm that will be internet enabled, making it a publicly accessible acoustical organ for people in other places. He is presently performing as his avatar from his SECOND LIFE site.
            </div>}
            url="http://stelarc.org/" urlText="http://stelarc.org/"
             />
            <CollaboratorCard direction='column' image={require("./media/davidleggett.png")} name="Dr Paul Loh (MSD)" description={
                <div>
                Dr Paul Loh is Senior Lecturer in digital architecture design and co-director of the Advanced Digital Design and Fabrication (ADD+F)  research hub at the Melbourne School of Design, University of Melbourne.
                He studied architecture at the University of Melbourne, the University of East London (UEL), the Architectural Association (Design Research Lab) and gained his doctorate at RMIT University.
                Paul previously taught at UEL and the AA and had lectured at Lund University, ETH Zurich, and Tsinghua University.
                <br/><br/>
                His research focuses on the cognitive engagement of spatial, material and narrative making through digital media from robotics to virtual reality. Paul is a registered architect in the UK, where his built projects have been widely published and have received numerous awards. His drawings and art objects have been exhibited and represented at the Royal Academy in London, the London Design Festival and London Frieze Art Fair. 
                He is founding partner of Melbourne based architecture practice LLDS / Power to Make, focusing on the relationship between making, technology and material. <Link href="https://findanexpert.unimelb.edu.au/profile/491353-paul-loh" color="primary">https://findanexpert.unimelb.edu.au/profile/491353-paul-loh</Link>
                </div>               
            }
            url="Link to personal website" urlText="Link to personal website"/>
            <CollaboratorCard direction='column' image={require("./media/paulloh.png")} name="David Leggett (LLDS)" description={
                <div>
                    David Leggett is founding partner of LLDS / Power to Make, a Melbourne based practice that integrates CNC robotic fabrication with architectural design.
                    He studied architecture at the University of East London and the University of Westminster. He worked with Edward Cullinan Architects as Director for over ten years before establishing LLDS / Power to Make in 2011. 
                    <br/><br/>
                    His built projects include the Bristol Harbourside Masterplan, Singapore Management University, the International Digital Laboratory for the University of Warwick and the Master Film Store for the British Film Institute.
                    David has taught Master in Architecture at the University of Melbourne since 2012. He has lectured at the University of Lund and has conducted design workshops at the University of Tsinghua, Beijing. <Link href="www.llds.com.au" color="primary">www.llds.com.au</Link>
                </div>
        } url="Link to personal website" urlText="Link to personal website"  />
            <CollaboratorCard direction='column' image={require("./media/paulloh.png")}  />
        </Grid>
    </Stack>
    );
}