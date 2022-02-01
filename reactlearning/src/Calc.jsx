import React from "react";

// let a = 0;
// let b = 0;

function add(a, b){
    let add = a + b;
    return add;
}

function sub(a, b){
    let sub = a - b;
    return sub;
}

function mult(a, b){
    let mult = a * b;
    return mult;
}

function div(a, b){
    let div = a / b;
    div = div.toFixed(3)
    return div;
}

export {add, sub, mult, div};