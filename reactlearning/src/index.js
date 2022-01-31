import React from "react";
import ReactDOM from "react-dom";

import "./index.css" // external css

const fname = "Vonod";
const img2 = "https://picsum.photos/id/237/200/300"
const img3 = "https://picsum.photos/200/300/?blur"

const link = "https://picsum.photos/"


// ============Attributs in JSX==============
ReactDOM.render(
    <>
        <h1 contentEditable="true" className="heading">{`Editable content--Hello, My name is ${fname}`}</h1>
        <div className="img_div">
        <a href={link} target="_blank">
            <img src="https://picsum.photos/seed/picsum/200/300"  alt="image1"/>

            <img src={img2} alt="image2" />
            <img src={img3} alt="image3" />
        </a>
        </div>
    </>
    ,document.getElementById("root")
);

//============inline css===========


ReactDOM.render(
    <>
        <h1 style={{ color : '#fa9191',textTransform : 'capitalize', textAlign:'center'}}>Hello, My name is {fname}</h1>
        <div className="img_div">
        <a href={link} target="_blank">
            <img src="https://picsum.photos/seed/picsum/200/300"  alt="image1"/>

            <img src={img2} alt="image2" />
            <img src={img3} alt="image3" />
        </a>
        </div>
    </>
    ,document.getElementById("root")
);


// ====Internal CSS ====
const heading = {
    color: 'red',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textShadow: '0px 2px 4px #ffe9c5',
    margin: '50px 0',
    fontFamily: 'Neonderthaw, cursive'
  }

  ReactDOM.render(
    <>
        <h1 style={heading}>Hello, My name is {fname}</h1>
        <div className="img_div">
        <a href={link} target="_blank">
            <img src="https://picsum.photos/seed/picsum/200/300"  alt="image1"/>

            <img src={img2} alt="image2" />
            <img src={img3} alt="image3" />
        </a>
        </div>
    </>
    ,document.getElementById("root")
);