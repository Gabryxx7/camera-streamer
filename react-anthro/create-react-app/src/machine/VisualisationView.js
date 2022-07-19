import React, { Component }  from 'react';
import View from "./View"

export default function VisualisationView(props) {
    return (
        <View
            variant="visualisation"
            titlePosition={props.titlePosition}
        />
    );
}