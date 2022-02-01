import React from "react";
import ReactDOM from "react-dom";
// import name,{favprogram, myName, myNames} from "./App";
import * as obj from "./App";

ReactDOM.render(
    <>
        <ol>
            <li>{ obj.default} </li>
            <li>{ obj.favprogram }</li>
            <li>{ obj.myName() }</li>
            <li>{ obj.myNames() } </li>
        </ol>
    </>    
,document.getElementById("root")
);
