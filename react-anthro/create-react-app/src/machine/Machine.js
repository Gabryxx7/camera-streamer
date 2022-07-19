import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Quadrants from './Quadrants';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import { Divider } from '@mui/material';
import React, { useState } from "react";


export default function Machine(props) {
  const [state, setState] = useState({
    currentView: 'grid'
  });
  const palette = props.theme.palette;
  return (
      <Stack 
        spacing={3}
        justifyItems='center'
        justifyContent='center'
        alignItems='center'
        alignContent='center'>
      <Container maxWidth="sm"
        sx={{
          marginBottom: "4rem"
        }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          The Machine
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Lorem ipsum about interacting.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="outlined">Join Queue</Button>
        </Stack>
      </Container>
      <Quadrants 
          variant={state.currentView} 
          width='100%'
          height='100vh'/>
      <Stack
          direction="row"
          spacing={4}
          divider={<Divider orientation="vertical" flexItem color="primary" />} >
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={[
            {
              transition:'all 0.1s linear',
              '&:hover': {
                'svg,p': {
                  transition:'all 0.1s linear',
                  cursor: 'pointer',
                  color: palette.primary.main
                }
              },
            }
          ]}
          onClick={() => {
            console.log(state); // 0
              setState({currentView: "grid"})
              console.log(state); // 0
            }}>
          <WindowOutlinedIcon color={state.currentView == "grid" ? "primary" : "secondary"} fontSize="medium" />
          <Typography color={state.currentView == "grid" ? "primary" : "secondary"} letterSpacing="2.5px" fontSize='14pt'>GRID VIEW</Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyItems="center"
          alignContent="center"
          justifyContent="center"
          spacing={2}
          sx={[
            {
              transition:'all 0.1s linear',
              '&:hover': {
                'svg,p': {
                  transition:'all 0.1s linear',
                  cursor: 'pointer',
                  color: palette.primary.main
                }
              },
            }
          ]}
          onClick={() => {
            console.log(state); // 0
            setState({currentView: "single"})
            console.log(state); // 0
            }}>
          <SquareOutlinedIcon color={state.currentView == "grid" ? "secondary" : "primary"} fontSize="medium"  />
          <Typography color={state.currentView == "grid" ? "secondary" : "primary"} letterSpacing="2.5px" fontSize='14pt'>SINGLE VIEW</Typography>
        </Stack>
      </Stack>
    </Stack>
);
}