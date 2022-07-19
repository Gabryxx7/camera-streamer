import React, { Component }  from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CameraView from "./CameraView"
import OpenPoseView from "./OpenPoseView"
import CodeView from "./CodeView"
import VisualisationView from "./VisualisationView"
// import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div 
        className={className}
        style={{ ...style, display: "block", maxWidth: '3rem' }}
        onClick={onClick}
      > 
      {/* <svg data-testid='ExpandCircleDownOutlinedIcon' width='3rem' height='3rem' style={{fill: "green"}}></svg> */}
      </div>
    );
  }
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    <div 
        className={className}
        style={{ ...style, display: "block", maxWidth: '3rem'  }}
        onClick={onClick}
    > 
    {/* <ExpandCircleDownOutlinedIcon /> */}
    </div>
    );
}

function CustomSlide(props) {
    // const { index, content} = this.props;
    const index = props.index;
    const content = props.content;
    return (
        content
    );
  }


export default function SingleView(props) {
    const singleViewSettings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        adaptiveHeight: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return(
        <Slider 
            Slider {...singleViewSettings}
            width='100%'
            height='100%'>
            <CustomSlide index={1} content={<CameraView titlePosition="top" /> }/>
            <CustomSlide index={2} content={<OpenPoseView titlePosition="top"  />} />
            <CustomSlide index={3} content={<CodeView titlePosition="top"  />} />
            <CustomSlide index={4} content={<VisualisationView titlePosition="top"  />} />
        </Slider>
    );
}