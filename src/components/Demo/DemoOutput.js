import React from "react";
import MyParagraph from "./MyParagraph";
const DemoOutput =(props) =>{
    console.log("demoOutput is running");
    return   <MyParagraph> {props.show ? 'This is me kumkum the world best and intelegent girl' : ''} </MyParagraph>
}
export default React.memo(DemoOutput) ;