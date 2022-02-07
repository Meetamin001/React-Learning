import React, { useState } from "react";

const App = () => {
    const [fullName, setFullName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        //const value = event.target.value;
        //const name = event.target.name;
        //object destructuring
        const { value, name } = event.target;

        setFullName((preValue) => {
            // console.log(preValue);
            // console.log(preValue.fname);

            return {
                ...preValue,
                [name]: value,
            };
            /* if (name === "fName") {
                return {
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: preValue.phone,
                };
            } else if (name === "lName") {
                return {
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                    phone: preValue.phone,
                };
            } else if (name === "email") {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    phone: preValue.phone,
                };
            } else if (name === "phone") {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: value,
                };
            } */
        });
    };

    const on_Submit = (event) => {
        event.preventDefault();
        alert("form submitted");
    };

    return (
        <>
            <div>
                <form onSubmit={ on_Submit }>
                    <div>
                        <h1>Hello,{ fullName.fname } { fullName.lname }</h1>
                        <p>{ fullName.email }</p>
                        <p>{ fullName.phone }</p>
                        <input
                            type="text" placeholder="Enter First Name"
                            name="fname"
                            onChange={ inputEvent }
                            value={ fullName.fname }
                        />
                        <input
                            type="text" placeholder="Enter Last Name"
                            name="lname"
                            onChange={ inputEvent }
                            value={ fullName.lname }
                        />
                        <input
                            type="email" placeholder="Enter Your Email"
                            name="email"
                            onChange={ inputEvent }
                            value={ fullName.email }
                            autoCapitalize="off"
                        />
                        <input
                            type="number" placeholder="Enter Phone Number"
                            name="phone"
                            onChange={ inputEvent }
                            value={ fullName.phone }
                        />
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default App;
