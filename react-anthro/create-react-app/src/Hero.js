import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack'


export default function Hero(props) {
    return (
    <ThemeProvider theme={props.theme}>
      <section className={'root'}>
        <Box
            sx={{
                width: '100%',
                height: '90vh',
                position: 'relative',
            }}
            justifyContent="center"
            alignItems="center">
            <Box
                component="img"
                sx={{
                    height: '100%',
                    width: '100%',
                    position: 'relative',
                    '& img': {
                        objectFit: 'cover',
                    },
                }}
                alt="Anthropomorphic machine 3D model."
                src={require("./tensegritybanner.jpg")}        
            />
            <Box
                justifyContent="center"
                alignItems="center"
                sx={{
                    display: 'flex',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)'
                }}>     

                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{
                        position: 'absolute',
                        top: '2rem',
                        right: '1.5rem',
                    }}>
                    <Typography
                        variant="subtitle1"
                        align="left"
                        sx={{
                            fontFamily: 'Blender Pro',
                            fontSize: 18,
                        }} >
                    Return to 
                    </Typography>   
                    <Box
                        component="img"
                        sx={{
                            width: '40%',
                            position: 'relative',
                        }}
                        alt="Science Gallery Logo"
                        src={require("./sciencegallery-logo.png")}/>  
                </Stack> 
                <Stack
                    spacing={5}
                    justifyContent="center"
                    alignItems="center"
                    align="center"
                    sx={{
                        width: '50%',
                        height: '100%',
                        textShadow: '1px 1px 4px #00000040',
                    }}>  
                    <Box
                        component="img"
                        sx={{
                            width: '22%',
                            position: 'relative',
                            filter: 'drop-shadow(1px 1px 4px #00000060)',
                        }}
                        alt="Stelarc Logo."
                        src={require("./stelarc-logo.png")}        
                    />
                    <Stack
                        alignItems="center"
                        spacing={0}
                        color='primary.main'
                        sx={{
                            fontFamily: 'Tomorrow',
                            fontSize: 90,
                            textShadow: '1px 1px 4px #00000066'
                        }} >
                        <Box>
                        Anthropomorphic
                        </Box>   
                        <Box>
                        Machine
                        </Box>     
                    </Stack>    
                    <Typography
                        variant="h3"
                        align="center"
                        className='subtitle-hero'
                        sx={{
                            textShadow: '1px 1px 4px #00000040',
                            width: '100%',
                            fontFamily: 'Blender Pro',
                            fontWeight: 400,
                            fontSize: 26,
                        }} >
                    The Anthropomorphic Machine is an interactive and performative robotic installation. It is  engineered with pneumatically actuated rubber muscles, steel tendons, a deformable tensegrity skeletal structure, a circulatory system of compressed air, and a vision and computational system. There is both local and online interaction.
                    </Typography>
                    {/* <Button 
                        align="center"
                        color="primary"
                        variant="outlined">
                    Click Me
                    </Button> */}
                </Stack>
            </Box>
        </Box>
      </section>
    </ThemeProvider>
    );
  };