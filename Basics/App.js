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

//React element
const Heading = ()=>  (<div id="parent">
    
    <div id="child1">
        <h1 id="heading1">Hello this is heading 1</h1>
    </div>
    <div id="child2">
        <h1 id="heading2">Hello this is heading 2</h1>
 
   </div>
   </div>)

//    console.log(heading);


   //react component
      //class based components
      //function based component

     
      //component composition
      const HeadingComponent = () =>(
          <div>
            {Heading()}
            
            <h1>Hii im praneeth</h1>
          </div>
        )
      
        
    
      

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
