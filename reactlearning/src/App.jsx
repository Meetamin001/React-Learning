import React from "react";
import "./index.css";
import Netflix from "./Netflix";
import Prime from "./Prime";

const pltfrm = "Netflix..";

/* 
const Selection = (props) => {
    if (props.choice == "Netflix") {
        return (<Netflix />);
    } else {
        return (<Prime />);
    }
}; 
*/

const Selection = (props) => {
    return (
        props.choice == "Netflix" ? <Netflix /> : <Prime />
    );
}

const App = () => {
    return (
        <Selection
            choice={pltfrm}
        />
    );
};

export default App;