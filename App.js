/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>..</h1>
 *      </div>
 * </div>
 * 
 * 
 */
const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},//[react.createElement("h1",{},""),react.createElement("h1",{},""),react.createElement("h1",{},"")....]
React.createElement("h1",{},"I'm in h1"))
)

//jsx?

// const heading=React.createElement("h1",{id:"heading"},"Hello world from react")//to give attributes to your tag->{}
//heading is react element or js object
const root=ReactDOM.createRoot( document.getElementById("root"));
console.log(parent)
root.render(parent);//render-> to take this obj to create h1 tag  in html and put it in root