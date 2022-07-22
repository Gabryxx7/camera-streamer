import React, { Component }  from 'react';
import Box from '@mui/material/Box';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CameraView from "./CameraView"
import OpenPoseView from "./OpenPoseView"
import CodeView from "./CodeView"
import VisualisationView from "./VisualisationView"
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

function Arrow(props){
  const { className, style, onClick } = props;
  const rotation = props.rotation || 0;
  return (
    <div 
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    > 
    <ExpandCircleDownOutlinedIcon color="primary" sx={{transform:`rotate(${rotation})`}} />
    </div>
  );
}

function CustomSlide(props) {
    const index = props.index;
    return (
        props.children
    );
  }


export default function SingleView(props) {
    const camera = <CameraView titlePosition="none" wsClient={props.wsClient} webcam={props.webcam}  />
    const wsClient = props.wsClient
    let op = <OpenPoseView titlePosition="none" wsClient={props.wsClient} imgSrc={props.imgSrc}  />
    let code = <CodeView titlePosition="none" wsClient={props.wsClient} />
    let viz = <VisualisationView titlePosition="none" wsClient={props.wsClient} />

    const singleViewSettings = {
      customPaging: function(index) {
        // const camera = <CameraView titlePosition="none" wsClient={props.wsClient} />
        // const op = <OpenPoseView titlePosition="none" wsClient={props.wsClient} imgSrc={props.imgSrc}  />
        // const code = <CodeView titlePosition="none" wsClient={props.wsClient} />
        // const viz = <VisualisationView titlePosition="none" wsClient={props.wsClient} />
        let view = null
        if(index === 0){
          view = camera
        }
        else if(index === 1){
          view = op
        }
        else if(index === 2){
          view = code
        }
        else if(index === 3){
          view = viz
        }

        return (
          <a> <Box height='80%' width='80%'>{view}</Box> </a>
        );
      },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        lazyLoad: true,
        adaptiveHeight: false,
        nextArrow: <Arrow rotation='-90deg' />,
        prevArrow: <Arrow rotation='90deg'/>
    };

    return(
        <Slider 
            Slider {...singleViewSettings}
            width='100%'
            height='100%'>
            <CustomSlide index={1}> {camera} </CustomSlide>
            <CustomSlide index={2}> {op} </CustomSlide>
            <CustomSlide index={3}> {code} </CustomSlide>
            <CustomSlide index={4}> {viz} </CustomSlide>
        </Slider>
    );
}