import React, { useState } from "react";

const App = () => {

    const [displayData, updateDisplayData] = useState("Click Me!");
    const [bg, updateBgColor] = useState("blue");

    const cngEvent = () => {
        let setDisplayData = "Clicked Data";
        updateDisplayData(setDisplayData);

        let bg = "red";
        updateBgColor(bg);
    };

    const dblClkEvent = () => {
        let setDisplayData = "Double Clicked Data";
        updateDisplayData(setDisplayData);

        let bg = "yellow";
        updateBgColor(bg);
    };

    return (
        <>
            <div style={ { backgroundColor: bg } } >
                <button onClick={ cngEvent } onDoubleClick={ dblClkEvent }>{ displayData }</button>
            </div>
        </>
    );
};

export default App;
