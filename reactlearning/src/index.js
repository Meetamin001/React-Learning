import React from "react";
import ReactDOM from "react-dom";

const fname = "firstname"
const lname = "lastname"

ReactDOM.render(
    <>
    <h3>fname is:  {fname}</h3>
    <h3>lname is:  {lname}</h3>
    <h3>fullname is: {fname} {lname}</h3>
    <h3>concate fname + lname: {fname + " " + lname}</h3>
    <hr />

    <h2>this is JSX without javascript expression: 2+3</h2>
    <h2>this is JSX with javascript expression: {2+3}</h2>
    <hr />

    <h3>random function: {Math.random()}</h3>
    <hr/>

    <h3>use of <u>Template Literal</u>: {`Firstname is ${fname} and lastname is ${lname}`}</h3>
    
    </>,
    document.getElementById("root")
);