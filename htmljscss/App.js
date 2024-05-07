const parent=React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am in h1"),React.createElement("h2",{},"I am in h2"),React.createElement("h1",{},"I am again in h1")]),
React.createElement("h1",{},"I'm in h1")]
);

//jsx?

// const heading=React.createElement("h1",{id:"heading"},"Hello world from react")//to give attributes to your tag->{}
//heading is react element or js object
console.log(parent)

const root=ReactDOM.createRoot( document.getElementById("root"));
root.render(parent);//render-> to take this obj to create h1 tag  in html and put it in root

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
