import React from "react";
import ReactDOM from "react-dom";

const fname = "Vonod";
const newdate = new Date();

ReactDOM.render(
    <>
        <h1>Hello, My name is {fname}</h1>
        <h1>{`Hello, My name is ${fname}`}</h1>

        <p>Todays Date is: {newdate.toLocaleDateString()}</p>
        <p>Current Time is: {newdate.toLocaleTimeString()}</p>
    </>
    ,document.getElementById("root")
);