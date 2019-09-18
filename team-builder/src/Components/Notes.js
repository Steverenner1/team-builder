import React from "react";
import Forms from "./Forms";

export default function Notes({ newMember }) {
    
    return (
        <div className="team-members">
            <h2>Name: {newMember.name}</h2>
            <h2>Email: {newMember.email}</h2>
            <h2>Role: {newMember.role}</h2>
        </div>
    )
}