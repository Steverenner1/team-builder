import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from "./Components/Forms";
import Notes from "./Components/Notes";
import data from "./Components/data";

function App() {
  const [members, setMembers] = useState(data)

  const newTeam = person => {
    setMembers([...members, person]);
  };

  return (
    <div className="App">
      <h1>Hello!</h1>
      <Notes notes={members}/>
      <div>
      <Forms newTeam={newTeam}/>
      </div>
      
    
    </div>
  );
}

export default App;
