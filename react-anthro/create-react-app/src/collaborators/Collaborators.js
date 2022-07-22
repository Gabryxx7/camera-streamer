import React, { Component, useState }  from 'react';
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
import Collapse from '@mui/material/Collapse';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


function CollaboratorCard(props){
    const collapsible = props.collapsible === undefined ? true : props.collapsible;
    const collapseSize = props.collapseSize || "30rem";
    const [collapsed, setCollapsed] = useState(collapsible);
  
    const handleChange = () => {
        setCollapsed((prev) => !prev);
    };
  
    const image = props.image || null;
    const name = props.name || null;
    const url = props.url || null;
    const urlText = props.urlText || url;
    const direction = props.direction || 'row';
    const xs = props.span || 3
    let imgHeight = direction === 'row' ? '100%' : '100%'
    imgHeight = props.imgSize === 'sm' ? '20%' : imgHeight
    let imgWidth =  props.imgSize === 'sm' ? '80%' : '100%'
    let padding = props.padding || null;
    let textMarginTop = '0'
    if(padding === null){
        padding = direction === 'row' ? '0rem 2.5rem' : '1rem 0rem'
        textMarginTop = '1rem'
    }
    const nameSize = direction === 'row' ? '3rem' : '1.8rem'
    const textWidth = direction === 'row' ? '75%' : '100%'
    const textSize = direction === 'row' ? '1.3rem' : '1.1rem'
    const lineHeight = direction === 'row' ? '1.6rem' : '1.25rem'
    const bottomBorderRadius = direction === 'row' ? '5px' : '0px'
    console.log(name +": " +collapsible);
    return(
        <Grid item xs={xs}>
            <Card
                raised={false}
                sx={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: direction,
                    alignItems: 'center',
                    justifyItems: 'center',
                    alignContent: "center",
                    justifyContent: "center",
                    background:'transparent',
                    verticalAlign:"middle",
                    boxShadow: 'unset',
                    overflow: "visible" }}>
                {image != null ?
                    <Box 
                     display='flex'
                     justifyItems="space-around"
                     justifyContent="space-around"
                     alignItems="stretch"
                     alignContent="space-around"
                     className="cardWrapper"
                     alignSelf='flex-start'
                     paddingTop="0.5rem"
                     verticalAlign="middle"
                     align='center'>
                     <CardMedia
                        component='img'
                        alignSelf='center'
                        align='center'
                        image={image}
                        alt={name}
                        sx={{
                            borderRadius: '5px',
                            borderBottomLeftRadius: bottomBorderRadius,
                            borderBottomRightRadius: bottomBorderRadius,
                            width:imgWidth,
                            maxHeight:imgHeight
                        }}
                     />
                 </Box> : "" 
                }
               
                <CardContent sx={{ flexGrow: 0, padding: padding, width:textWidth}}>

                {name != null ?
                <Typography variant="h5" fontSize={nameSize} align="left" sx={{marginBottom:"0", lineHeight:"1"}}>
                    {name}
                </Typography> : ""}
                

                {url != null ? <Link href={url} color="primary" fontSize="14pt">{urlText}</Link> : ""}
                
                <Typography  component='div' display="block" fontSize={textSize} align="left" lineHeight={lineHeight}
                sx={{
                    marginTop:textMarginTop,
                    overflowWrap: 'anywhere',
                    position: 'relative',
                    paddingBottom: '1rem',
                    overflow: "visible"}}
                    nowrap='false'>
                    {collapsible ?
                        <div>
                            <Collapse orientation='vertical' collapsedSize={collapseSize} in={!collapsed}>
                                {props.children}
                            </Collapse>
                            <Box
                            className="expandCollabText" onClick={handleChange}
                            height={collapsed ? '100%' : '10%'}
                            bottom={collapsed ? '0' : '-10%'}
                            sx={{
                                display: 'flex',
                                cursor: 'pointer',
                                gap:"0px",
                                alignItems: 'space-around',
                                alignContent: 'space-around',
                                justifyItems: 'space-around',
                                justifyContent: 'end',
                                flexDirection: 'column',
                                textAlign: 'center',
                                zIndex: '500',
                                width: '100%',
                                position: 'absolute',
                                padding: '0rem 0rem',
                                background: 'rgb(18,18,18)',
                                background: 'linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0.8105061848958334) 42%, rgba(0,0,0,0) 100%)',
                                fontWeight: '800',
                                fontSize: '13pt',
                            }}>
                                <div>{collapsed ? "Show More" : "Show Less"}</div>
                                <div>
                                    {collapsed ? <ExpandMoreOutlinedIcon fontSize="medium" /> : <ExpandLessOutlinedIcon fontSize="medium" /> }
                                </div>
                            </Box>
                        </div>
                    : props.children}
                </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default function Collaborators(props) {
  const maxWidth = props.maxWidth || '100%';
    return(
        <Grid
        maxWidth={maxWidth}
        alignSelf="center"
        height="100%"
        align="left"
        container
        justifyItems="space-around"
        justifyContent="space-around"
        alignItems="space-around"
        alignContent="space-around"
        rowGap={4}
        columnGap={1}
        direction="row">
        <Typography
            component="h1"
            variant="h2"
            align="center"
            width="100%"
            padding="0"
            paddingBottom="1rem"
            margin="0"
            gutterBottom="false"
            color="text.primary"
            span={12}>
            About The Artist
        </Typography>
        <CollaboratorCard collapsible={false} direction='row' span={12} image={require("./media/stelarc.png")} name="Stelarc" url="http://stelarc.org/" urlText="http://stelarc.org/">
            Stelarc is a performance artist who has visually probed and acoustically amplified his body.
            He has made three films of the inside of his body. Between 1976-1988 he completed 26 body suspension performances with hooks into the skin.
            He has used medical instruments, prosthetics, robotics, Virtual Reality systems, the Internet and biotechnology to engineer intimate and involuntary interfaces with the body. He explores Alternate Anatomical Architectures with augmented and extended body constructs.
            <br/><br/>
            He has performed with a THIRD HAND, an EXTENDED ARM, a VIRTUAL ARM, a STOMACH SCULPTURE and EXOSKELETON, a 6-legged walking robot.
            His FRACTAL FLESH, PING BODY and PARASITE performances explored involuntary, remote and internet choreography of the body with electrical stimulation of the muscles.
            His PROSTHETIC HEAD is an embodied conversational agent that speaks to the person who interrogates it. He is surgically constructing an EXTRA EAR on his arm that will be internet enabled, making it a publicly accessible acoustical organ for people in other places. He is presently performing as his avatar from his SECOND LIFE site.
        </CollaboratorCard>
        <Grid
            height="100%"
            width="100%"
            align="left"
            container
            justifyItems="space-evenly"
            justifyContent="space-evenly"
            alignItems="space-evenly"
            alignContent="space-evenly"
            rowGap={4}
            columnGap={1}
            direction="row">
            <Typography
                component="h1"
                variant="h2"
                align="center"
                width="100%"
                padding="0"
                margin="0"
                gutterBottom="false"
                color="text.primary"
                span={12}>
                About The Collaborators
            </Typography>
            <CollaboratorCard direction='column' span={3} image={require("./media/paulloh.png")} name="Dr Paul Loh (MSD)"
        url="Link to personal website" urlText="Link to personal website">                
            Dr Paul Loh is Senior Lecturer in digital architecture design and co-director of the Advanced Digital Design and Fabrication (ADD+F)  research hub at the Melbourne School of Design, University of Melbourne.
            He studied architecture at the University of Melbourne, the University of East London (UEL), the Architectural Association (Design Research Lab) and gained his doctorate at RMIT University.
            Paul previously taught at UEL and the AA and had lectured at Lund University, ETH Zurich, and Tsinghua University.
            <br/><br/>
            His research focuses on the cognitive engagement of spatial, material and narrative making through digital media from robotics to virtual reality. Paul is a registered architect in the UK, where his built projects have been widely published and have received numerous awards. His drawings and art objects have been exhibited and represented at the Royal Academy in London, the London Design Festival and London Frieze Art Fair. 
            He is founding partner of Melbourne based architecture practice LLDS / Power to Make, focusing on the relationship between making, technology and material. <Link href="https://findanexpert.unimelb.edu.au/profile/491353-paul-loh" color="primary">https://findanexpert.unimelb.edu.au/profile/491353-paul-loh</Link>
        </CollaboratorCard>
            <CollaboratorCard direction='column' span={3} image={require("./media/davidleggett.png")} name="David Leggett (LLDS)" url="Link to personal website" urlText="Link to personal website" >
            David Leggett is founding partner of LLDS / Power to Make, a Melbourne based practice that integrates CNC robotic fabrication with architectural design.
            He studied architecture at the University of East London and the University of Westminster. He worked with Edward Cullinan Architects as Director for over ten years before establishing LLDS / Power to Make in 2011. 
            <br/><br/>
            His built projects include the Bristol Harbourside Masterplan, Singapore Management University, the International Digital Laboratory for the University of Warwick and the Master Film Store for the British Film Institute.
            David has taught Master in Architecture at the University of Melbourne since 2012. He has lectured at the University of Lund and has conducted design workshops at the University of Tsinghua, Beijing. <Link href="www.llds.com.au" color="primary">www.llds.com.au</Link>
            </CollaboratorCard>
        
        {/* <CollaboratorCard direction='column' span={3} padding='0' collapsible={false} > */}
            <CollaboratorCard direction='column' span={3} image={require("./media/stelarc.png")} imgSize="lg" collapseSize="8rem"
                name="Qiushi Zhou" url="https://qiushi-zhou.github.io/" urlText="https://qiushi-zhou.github.io/">
                Stelarc is a performance artist who has visually probed and acoustically amplified his body.
                He has made three films of the inside of his body. Between 1976-1988 he completed 26 body suspension performances with hooks into the skin.
                He has used medical instruments, prosthetics, robotics, Virtual Reality systems, the Internet and biotechnology to engineer intimate and involuntary interfaces with the body. He explores Alternate Anatomical Architectures with augmented and extended body constructs.
                </CollaboratorCard>
            <CollaboratorCard direction='column' span={3} image={require("./media/stelarc.png")} imgSize="lg" collapseSize="8rem"
                name="Gabriele Marini" url="https://gmarini.com/" urlText="https://gmarini.com/">
                Stelarc is a performance artist who has visually probed and acoustically amplified his body.
                He has made three films of the inside of his body. Between 1976-1988 he completed 26 body suspension performances with hooks into the skin.
                He has used medical instruments, prosthetics, robotics, Virtual Reality systems, the Internet and biotechnology to engineer intimate and involuntary interfaces with the body. He explores Alternate Anatomical Architectures with augmented and extended body constructs.
                </CollaboratorCard>
            {/* </CollaboratorCard> */}

            {/* <CollaboratorCard direction='column' span={3} image={require("./media/stelarc.png")} imgSize="sm"
                name="Qiushi Zhou" url="https://qiushi-zhou.github.io/" urlText="https://qiushi-zhou.github.io/">
                Stelarc is a performance artist who has visually probed and acoustically amplified his body.
                He has made three films of the inside of his body. Between 1976-1988 he completed 26 body suspension performances with hooks into the skin.
                He has used medical instruments, prosthetics, robotics, Virtual Reality systems, the Internet and biotechnology to engineer intimate and involuntary interfaces with the body. He explores Alternate Anatomical Architectures with augmented and extended body constructs.
                </CollaboratorCard>
            <CollaboratorCard direction='column' span={3} image={require("./media/stelarc.png")} imgSize="sm"
                name="Gabriele Marini" url="https://gmarini.com/" urlText="https://gmarini.com/">
                Stelarc is a performance artist who has visually probed and acoustically amplified his body.
                He has made three films of the inside of his body. Between 1976-1988 he completed 26 body suspension performances with hooks into the skin.
                He has used medical instruments, prosthetics, robotics, Virtual Reality systems, the Internet and biotechnology to engineer intimate and involuntary interfaces with the body. He explores Alternate Anatomical Architectures with augmented and extended body constructs.
                </CollaboratorCard> */}
                </Grid>
    </Grid>
    );
}