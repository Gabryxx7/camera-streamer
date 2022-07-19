import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack'


export default function Hero(props) {
    return (
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
                src={require("./media/tensegritybanner.jpg").default}        
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
                        align="left" >
                    Return to 
                    </Typography>   
                    <Box
                        component="img"
                        sx={{
                            width: '40%',
                            position: 'relative',
                        }}
                        alt="Science Gallery Logo"
                        src={require("./media/sciencegallery-logo.png").default}/>  
                </Stack> 
                <Stack
                    spacing={5}
                    justifyContent="center"
                    alignItems="center"
                    align="center"
                    sx={{
                        width: '50%',
                        height: '100%',
                    }}>  
                    <Box
                        component="img"
                        sx={{
                            width: '25%',
                            maxWidth: '250px',
                            position: 'relative',
                            filter: 'drop-shadow(1px 1px 4px #00000060)',
                        }}
                        alt="Stelarc Logo."
                        src={require("./media/stelarc-logo.png").default}        
                    />
                    <Stack
                        alignItems="center"
                        spacing={0}>
                        <Typography variant="h1">
                        Anthropomorphic
                        </Typography>   
                        <Typography variant="h1">
                        Machine
                        </Typography>     
                    </Stack>    
                    <Typography
                        variant="h3"
                        sx={{
                            width: '100%',
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
    );
  };