import React, { useState }  from 'react';

import Board from './components/Board';
import Score from './components/Score';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap'
import styles from './App.module.css'

function App() {

  const [ score, setScore ] = useState({ x: 0, y: 0 });
  const [ players, setPlayers ] = useState({ one: '', two:''})

  return (
    <div id={styles.box} className='d-flex justify-content-around flex-column align-items-center'>
        <Board p1={players.one} p2={players.two}/>
        <Score p1={players.one} p2={players.two}/>
    </div>
  );
}

export default App;
