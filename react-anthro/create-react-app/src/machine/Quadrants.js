import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ViewTitle(props){
    return (
        <Typography
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='100%'
            height='15%'
            variant="h3">
                {props.title}
        </Typography>
    );
}

function ViewPlaceholder(props){
    return (
        <Typography
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='100%'
            height='100%'
            variant="subtitle1"
            sx={{ border: (theme) => `2px solid ${theme.palette.primary.main}` }}
            >
                {props.title.toUpperCase()}
        </Typography>
    );
}


function View(props) {
    const titlePosition = props.titlePosition || "top";
    const titleString = props.title || (props.variant.charAt(0).toUpperCase() + props.variant.slice(1));
    const title =  <ViewTitle title={titleString} />
    const variant = props.variant;
    const placeholder = <ViewPlaceholder title={variant} />
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

function CameraView(props) {
    return (
        <View
            variant="camera"
            titlePosition="top"
        />
    );
}

function OpenPoseView(props) {
    return (
        <View
            variant="openpose"
            titlePosition="top"
        />
    );
}

function CodeView(props) {
    return (
        <View
            variant="code"
            titlePosition="bottom"
        />
    );
}

function VisualisationView(props) {
    return (
        <View
            variant="visualisation"
            titlePosition="bottom"
        />
    );
}

export default function Quadrants(props) {
    const variant = props.variant || "grid";
    const gridView = <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="stretch"
            width='100%'
            height='100%'>
            <Grid item xs={6}>
                <CameraView />
            </Grid>
            <Grid item xs={6}>
                <OpenPoseView />
            </Grid>
            <Grid item xs={6}>
                <CodeView />
            </Grid>
            <Grid item xs={6}>
                <VisualisationView />
            </Grid>
        </Grid>

        const singleViewSettings = {
            focusOnSelect: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            adaptiveHeight: false
        };
    const singleView = <Slider 
            Slider {...singleViewSettings}
            width='100%'
            height='100%'>
            <CameraView
            width='100%'
            height='100%' />
            <OpenPoseView
            width='100%'
            height='100%' />
            <CodeView
            width='100%'
            height='100%' />
            <VisualisationView
            width='100%'
            height='100%' />
        </Slider>

    if(props.variant === "single"){
        return(
            <Box
            width='100%'
            height='100vh'>
                {singleView}
            </Box>)
    }
    return(
        <Box
        width='100%'
        height='100vh'>
            {gridView}
        </Box>)
}

