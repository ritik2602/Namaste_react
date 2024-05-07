import React from "react";
import ReactDOM from "react-dom/client";

const parent=React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I am in h1"),
    React.createElement("h2",{},"I am in h2"),
    React.createElement("h1",{},"I am again in h1")]),
    React.createElement("h1",{},"I'm in h1")
]);
console.log(parent)
    
const root=ReactDOM.createRoot( document.getElementById("root"));

root.render(parent);//render-> to take this obj to create h1 tag  in html and put it in root
    