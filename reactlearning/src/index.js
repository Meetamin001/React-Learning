import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/* const Fullname = ['Roma', 'Patel'];
const biodata = [1, ...Fullname, 26, "Female"];

var shooterGames = ['Call of Duty', 'Far Cry', 'Resident Evil', 'Call of Duty'];
var racingGames = ['Need For Speed', 'Gran Turismo', 'Burnout'];

var games = [...shooterGames, ...racingGames]; */

//3rd cases
// var shooterGames = ['Call of Duty', 'Far Cry', 'Resident Evil'];
// var [first, ...remaining] = shooterGames; // Array destructuting first means in the array first index value and other than remainig means other value
// console.log(first); //Call of Duty
// console.log(remaining);

const fullName = {
    fname: "Roma",
    lname: "Patel",
};

const biodata = {
    id: 1,
    ...fullName,
    age: 26,
    gender: "Female"
};

console.log(biodata);


// console.log(Fullname);
// console.log(biodata);

ReactDOM.render(
    <App />
    , document.getElementById("root")
);




