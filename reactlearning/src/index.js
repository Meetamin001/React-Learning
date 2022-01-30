import React from "react";
import ReactDOM from "react-dom";

// if you want to use multiple JSX you have to use <div>
//because render only accept 1 JSX element
ReactDOM.render(
    <div>
        <h1> with div H1</h1>
        <p>para</p>
        <h2>h2 JSX</h2>
    </div>,
    document.getElementById("root")
);

//const arr = ['vinod','abc','dfrc'] array define like this
//if you don't want to use <div> you can use array too.

ReactDOM.render(
    [
        <h1>with array H1</h1>,
        <p>para</p>,
        <h2>h2 JSX</h2>
    ],
    document.getElementById("root")
);

// ============== React Frafment ===========

//if you use <div> it will creact another tag inside you div which is on HTML page
// that's why we use fragment
ReactDOM.render(
    <React.Fragment>
        <h1> with div H1</h1>
        <p>para</p>
        <h2>h2 JSX</h2>
    </React.Fragment>,
    document.getElementById("root")
);
// it is usefull because it use less memory,makes application faster

// Syntactic suger form of Fragment
ReactDOM.render(
    <>
        <h1> with div H1</h1>
        <p>para</p>
        <h2>h2 JSX</h2>
    </>,
    document.getElementById("root")
);
// if you just use <> it will be considered as fragment

// ==============End of React Frafment ===========
