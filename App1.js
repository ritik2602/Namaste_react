import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object => Html element(when rendered)
//JSX -> it is not html in js
// it is HTML-like or XML-like syntax
//this code is transpiled it before it reaches the js
//transpilation to react create element is done by babel 
const Title= () => (
    <h1 id="heading" className="heading">
    Namaste ji using JSX🚀
    </h1>
);

const elem=<span>React element</span>

const jselement=(
    <h1>
        {elem}JS in html
    </h1>
);
// console.log(jsxheading);

//react functional component
const Heading=()=>(
    <div id="container">
        {Title()}
        <Title/>
        {jselement}
        <h1>Namaste React functional component</h1>
    </div>
    
); 

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
root.render(<Heading/>);