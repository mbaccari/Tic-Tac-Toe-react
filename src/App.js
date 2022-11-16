import React, { useState }  from 'react';

import Board from './components/Board';
import Score from './components/Score';


function App() {

  const [ score, setScore ] = useState({ x: 0, y: 0 });
  const [ players, setPlayers ] = useState({ one: '', two:''})

  return (
    <div className="App w-100 h-100">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
        crossOrigin="anonymous">
      </link>
      <Board p1={players.one} p2={players.two}/>
      <Score p1={players.one} p2={players.two}/>
    </div>
  );
}

export default App;
