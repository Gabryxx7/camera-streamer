import {React, Component, useState, useEffect, useRef } from 'react';
import View from "./View"
import Webcam from "react-webcam";

export default function CameraView(props) {
    const wsClient=props.wsClient;
    return (
        <View
        width="100%" height="100%"
            variant="camera"
            titlePosition={props.titlePosition}
        >
        {props.webcam}
        </View>
    );
}