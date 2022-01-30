// var React = require('react'); old verson of javascript that browser understand
import React from 'react'; // ES6 verson of javascript which browser does not understand, BABEL compile it and convert it into old verson
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';

//1st method to display - React with use of JSX

// ReactDOM.render('what to display','where to display','callback func');
ReactDOM.render(<h1> This is React code HTML Tag called as JSX </h1>, document.getElementById('root'));
//<h1> tag is not called HTML here, it is called JSX - javaScript Extension or XML
// you must need 'react' to complile JSX and create elements.

// 2nd method- old version javascript which browser understand
// ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, " Hello World! "),document.getElementById('root'));
//--- Babel code conversion

//3rd method - Pure javaScript
 var h1 = document.createElement('h1');
 h1.innerHTML = "This is Pure JavaScript";
document.getElementById("root").appendChild(h1); //--- no BABEL no react, it is pure javaScript

