/* <div id="main">
     <div id="child1">
         <h1></h1>
     </div>
     <div id="child2">
         <h1></h1>
     </div>
</div> */

import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", {id:"main"}, [React.createElement("div",{id:"child1"},React.createElement("h1",{id:"heading1"},"N")),React.createElement("div",{id:"child2"},React.createElement("h1",{id:"heading2"},"heading2"))]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
