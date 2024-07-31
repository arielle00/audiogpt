import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const signupFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"API Key",
        labelFor:"apikey",
        id:"apikey",
        name:"apikey",
        type:"text",
        autoComplete:"apikey",
        isRequired:true,
        placeholder:"API Key"   
    },
];

function Signup() {
    const navigate = useNavigate();

    const [signupState,setSignupState]=useState({
        username: "",
        email: "",
        password: "",
        apikey: ""

    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignupState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

   
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate('/login')
    }
    
    const fixedInputClass = "bg-vanilla appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ";
    
    return (
        <div className="bg-gray text-white flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Sign up</h1>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
                <div className="">
                    {signupFields.map((field) => (
                        <div key={field.id} className="mb-4">
                            <label htmlFor={field.id} className="sr-only">
                                {field.labelText}
                            </label>
                            <input
                                onChange={handleChange}
                                value={signupState[field.name]}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                required={field.isRequired}
                                className={fixedInputClass}
                                placeholder={field.placeholder}
                            />
                        </div>
                    ))}
                </div>

                <button
                    type="submit"
                    className="group bg-brown relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:bg-raisin focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                >
                    Signup
                </button>
            </form>
        </div>
    );
}

export default Signup;