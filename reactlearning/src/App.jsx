import React, { useState } from "react";

//let count = 0; because we will this variable define in hooks

const App = () => {
    // Hooks has to be at TOP of react function
    const state = useState(); //--code works without this aswell,no idea!
    //console.log(state);

    //const [state] = useState(); array Destructure
    const [count, setCount] = useState(0); //count is variable,0 initial val, setCount is Function
    const IncNum = () => {
        //console.log("clicked" + count++);
        setCount(count + 1);
    };

    return (
        <>
            <h1>{ count }</h1>
            <button onClick={ IncNum }> Click Me! </button>
        </>
    );

};


export default App;


/* 
===============Array Destructure============
    const name = ['ab', 'cd', 'ef']; //This is array

    const [ab, cd, ef] = name;  --values of name array will be assigned to variable ab, cd, ef--
    console.log(ab); //output will be ab---same value you van get by name[0]

    const [name1, name2, name3] = name;
    console.log(name3); //putput will be ef---same name[3]
 */

/* 
===================What is useState===============

use state is an function which return an array with 2 values--

-- [undefined, f] ==> [state Object( returns current data), updated function(returns updated data)]

*/