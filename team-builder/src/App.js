import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from "./Components/Forms";
import Notes from "./Components/Notes";

function App() {
  const [team, setTeam] = useState([])

  const newTeam = newMember => {
    setTeam([...team, newMember]);
  };

  return (
    <div className="App">
      <h1>Hello!</h1>
      <Forms teamAdd={newTeam}/>
      <div>
        {team.map((member, index) => (
          <Notes key={index} newMember={member} />
        ))}
      </div>
    
    
    </div>
  );
}

export default App;
