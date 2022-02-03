import React, { useState } from "react";

const App = () => {
    const newTime = new Date().toLocaleTimeString();
    const [ctime, setCTime] = useState(newTime);

    const UpdateTime = () => {
        const newCTime = new Date().toLocaleTimeString();
        // you can use newTime = new Date().toLocaleTimeString(); as well and pass newTime
        setCTime(newCTime);
    };

    return (
        <>
            <h1> { ctime } </h1>
            <button onClick={ UpdateTime }>Click Me!</button>
        </>
    );
};

export default App;

/* 
==================My Way=================
import React, { useState } from "react";

const App = () => {
    const time = new Date();

    const [displayTime, DisplayCurrTime] = useState(time.toLocaleTimeString());
    const SetTime = () => {
        const time = new Date();
        DisplayCurrTime(time.toLocaleTimeString());
    };

    return (
        <>
            <h1> { displayTime } </h1>
            <button onClick={ SetTime }>Click Me!</button>
        </>
    );
};

export default App;
*/