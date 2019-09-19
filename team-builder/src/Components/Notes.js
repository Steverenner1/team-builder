import React from "react";
import Forms from "./Forms";

const Notes = props => {
    return (
        <div className="team-members">
            {props.notes.map(member => {
                return (
            <div key = {member.id}>
            
            <p>Name: {member.name}</p>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
            <br></br>
            </div>
                )
        })}
        </div>
    )
}


export default Notes;