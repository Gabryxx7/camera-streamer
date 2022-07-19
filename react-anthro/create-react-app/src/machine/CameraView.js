import React, { Component }  from 'react';
import View from "./View"

export default function CameraView(props) {
    return (
        <View
            variant="camera"
            titlePosition={props.titlePosition}
        />
    );
}