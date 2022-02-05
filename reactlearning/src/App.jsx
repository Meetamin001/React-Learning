import React from "react";
import { useState } from "react/cjs/react.development";

const App = () => {
    const [fname, setFName] = useState();
    const [lname, setLName] = useState();
    const [fullname, setFullName] = useState();

    const input_Fn_Event = (event) => {
        console.log(event.target.value);
        setFName(event.target.value);
    };
    const input_Ln_Event = (event) => {
        console.log(event.target.value);
        setLName(event.target.value);
    };

    const on_Submit = (event) => {
        event.preventDefault(); // kavascript inbuilt method to data show written in form tag
        setFullName(fname + " " + lname);
    };

    return (
        <>
            <div>
                <form onSubmit={ on_Submit }>
                    <div>
                        <h1>Hello, { fullname }</h1>
                        <input
                            type="text" placeholder="Enter First Name"
                            onChange={ input_Fn_Event } //for button we write onClick even same for input onChaange need to be used
                            value={ fname }  //single source of truth. same variable name use more than 3 times
                        />
                        <input
                            type="text" placeholder="Enter Last Name"
                            onChange={ input_Ln_Event }
                            value={ lname }
                        />
                        {/* <button onClick={ onSubmit } >Click Me!</button> */ }
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default App;
