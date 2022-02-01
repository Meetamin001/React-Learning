import React from "react";
import * as Calc from "./Calc";

function App() {
    return(
        <>
            <ul>
                <li>Sum: {Calc.add(30, 15) } </li>
                <li>Sub: {Calc.sub(30, 15) }</li>
                <li>Mult: { Calc.mult(30, 15) } </li>
                <li>Div: {Calc.div(7, 3) }</li>
                
            </ul>
        </>
    );
}

export default App;