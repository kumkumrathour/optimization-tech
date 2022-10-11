import React from "react";
const MyParagraph = (props) =>{
console.log("my paragraph");
return <p>{props.children}</p>
}
export default MyParagraph;