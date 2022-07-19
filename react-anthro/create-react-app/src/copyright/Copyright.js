import Typography from '@mui/material/Typography';
import { useState } from 'react'
import { Stack } from '@mui/material';

export default function Copyright(props) {
    const imgSize = "8%"
    return (
        <Stack
          direction="column"
          spacing={2}
          sx={{
            padding:"3rem 0rem"
          }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={10}
            marginBottom="6rem">
            <img src={require("./stelarc-logo.png")} alt="stelarc-logo" width={imgSize} height={imgSize}/>
            <img src={require("./sciencegallery-logo.png")} alt="sciencegallery-logo" width={imgSize*0.8} height={imgSize*0.8}/>
            <img src={require("./festo-logo.png")} alt="festo-logo" width={imgSize*0.8} height={imgSize*0.8}/>
            <img src={require("./msd-logo.png")} alt="msd-logo" width={imgSize} height={imgSize}/>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={10}>
                <Typography variant="body1" fontWeight="bold" color="text.primary" align="center" textTransform="uppercase"> Privacy Policy </Typography>
                <Typography variant="body1" fontWeight="bold" color="text.primary" align="center" textTransform="uppercase"> Terms of Use </Typography>
              </Stack>
        <Typography variant="body1" color="text.secondary" align="center" textTransform="uppercase">
          {'Copyright © '}
          Copyright © Stelarc and Science Gallery Melbourne
          {" " + new Date().getFullYear()}
          {'.'}
        </Typography>
        </Stack>
    );
  }