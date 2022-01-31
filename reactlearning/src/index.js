import React from "react";
import ReactDOM from "react-dom";

import "./index.css" // external css


//==================== my way start ======================
/*
// new Date(year,month,day,hours,minutes,second)
const time = new Date();

function Greetings(){
    //const a = new Date();
    const hour = time.getHours();

    if (hour >= 1 && hour <= 11)
    {
        return "Good Morning";
    }
    else if (hour >= 12 && hour <= 19)
    {
        return "Good Afternoon";
    }
    else{
        return "Good Night";
    }
}

ReactDOM.render(
    <>
    <ul  className="hello">
        <li><h1>Hello Sir,</h1></li>
        <li className="greet"><h1><Greetings /></h1></li>
    </ul>
    </>,
    document.getElementById("root")
);
*/
// =================== my way ends =========================

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';

const cssStyle = {};

if (curDate >= 1 && curDate <= 11)
{
    greeting = "Good Morning";
    cssStyle.color = 'green';
} 
else if (curDate >= 12 && curDate <= 19)
{
    greeting =  "Good Afternoon";
    cssStyle.color = 'Orange';
} 
else{
    greeting =  "Good Night";
    cssStyle.color = 'black';
}

ReactDOM.render(
    <>
    <div>
    <h1>Hello Sir, <span style={cssStyle}> {greeting} </span></h1>
    </div>
    </>,
    document.getElementById("root")
);

