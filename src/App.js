import React from 'react';

import Board from './components/Board';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap'
import styles from './App.module.css'

function App() {

  return (
    <div id={styles.box} className='d-flex justify-content-around flex-column align-items-center'>
        <Board/>
    </div>
  );
}

export default App;
