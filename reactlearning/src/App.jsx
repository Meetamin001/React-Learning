import React, { useEffect, useState } from "react";

const App = () => {
    const [num, setNum] = useState(0);

    //useEffect works when render function called(when page reload)
    useEffect(() => {
        //alert("hii");
        //document.title = 'you Clicked ' + num + ' times';
        document.title = `you Clicked ${num} times`;
    });

    return (
        <>
            <button
                onClick={ () => {
                    setNum(num + 1);
                } }>
                Click Me { num } </button>
        </>
    );
};

export default App;