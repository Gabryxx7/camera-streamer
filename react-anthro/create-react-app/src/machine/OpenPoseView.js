import React, { Component }  from 'react';
import View from "./View"

export default function OpenPoseView(props) {
    return (
        <View
            variant="openpose"
            titlePosition={props.titlePosition}
        />
    );
}