import React, { useState } from "react";

export default function Forms(props) {
    const [user, setUser] = useState({
    name: "",
    email: "",
    role: ""   
    });
    const handleChanges = event => {
        const updateObj = {...user, [event.target.name]: event.target.value};
        console.log(user);
        setUser(updateObj);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log("username", user);
        props.teamAdd(user);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input  
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                value={user.name}
            />
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                onChange={handleChanges}
                value={user.email}
            />
            <label htmlFor="role">Role</label>
            <input 
                type="text"
                name="role"
                onChange={handleChanges}
                value={user.role}
            />
            <button type="submit">Submit</button>
        </form>
    );
};
