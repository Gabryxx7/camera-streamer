import React, { Component }  from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CameraView from "./CameraView"
import OpenPoseView from "./OpenPoseView"
import CodeView from "./CodeView"
import VisualisationView from "./VisualisationView"
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div 
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      > 
      <ExpandCircleDownOutlinedIcon color="primary" sx={{transform:'rotate(-90deg)'}} />
      </div>
    );
  }
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    <div 
        className={className}
        style={{ ...style, display: "block"  }}
        onClick={onClick}
    > 
    <ExpandCircleDownOutlinedIcon color="primary" sx={{transform:'rotate(90deg)'}} />
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
      customPaging: function(index) {
        let view = <div></div>
        if(index === 1){
          view = <CameraView titlePosition="none" />
        }
        else if(index === 2){
          view = <OpenPoseView titlePosition="none" />
        }
        else if(index === 3){
          view = <CodeView titlePosition="none" />
        }
        else{
          view = <VisualisationView titlePosition="none" />
        }

        return (
          <a> {view} </a>
        );
      },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        lazyLoad: true,
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