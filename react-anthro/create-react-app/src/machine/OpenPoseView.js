import React, { Component, useEffect, useState }  from 'react';
import View from "./View"

export default function OpenPoseView(props) {    
  useEffect(() => {
    console.log("Updated src!")
  }, [props.imgSrc]);
    const wsClient=props.wsClient;
    return (
        <View
            variant="openpose"
            titlePosition={props.titlePosition}>
            {wsClient.lastFrame !== null ? <img src={props.imgSrc} width="100%" height="100%"></img> : null}
        </View>
    );
}