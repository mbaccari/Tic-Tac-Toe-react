import Header from "./components/Header";
import Board from './components/Board'
import { useState } from 'react'


function App() {

  

  return (
    <div className="App w-100 h-100">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
        crossOrigin="anonymous">
      </link>
      <Header />
      <Board />
    </div>
  );
}

export default App;
