import React, { Component }  from 'react';
import View from "./View"

export default function VisualisationView(props) {
    const wsClient=props.wsClient;
    
    return (
        <View
            variant="visualisation"
            titlePosition={props.titlePosition}
        />
    );
}