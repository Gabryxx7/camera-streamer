import React, { Component }  from 'react';
import View from "./View"

export default function CodeView(props) {
    return (
        <View
            variant="code"
            titlePosition={props.titlePosition}
        />
    );
}