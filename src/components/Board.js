import React, { useState, useEffect } from 'react'

import styles from './Board.module.css'
import Score from './Score';

const winGame = require('../winLogic');

function Board() {

    const [ turn, setTurn ] = useState(0);

    const [ p1Score, setP1Score ] = useState(0);
    const [ p2Score, setP2Score ] = useState(0)


    const [ status, setStatus ] =useState(true)

    const [ boxes, setBox ] = useState([]
    );

    // Function that runs when a new game is reset or created
    const newGame = () => {
      // Clear box before reassigning them
      setBox([])

      // Set new game as true
      setStatus(true);

      // Set turn to the first turn
      setTurn(0);

      // Loop to create all boxes for the game
      for (let x = 1, y = 1, i = 1; i < 10; i++, y++) {
        if (y === 3) {
          const box = {value:' ', x:x, y:y, num:i}
          setBox( boxes => [...boxes, box]);
          if(x === 3 && y === 3) break;

          // If y gets to 3, reset y to 0 and up x to move to next row
          y=0;
          x++;
        } else {
          setBox( boxes => [...boxes, {value:' ', x:x, y:y, num:i}]);
        }
        
      }
    }

    useEffect(() => {
      // Upon page loading, set all boxes
      newGame();
    }, []);

    if(turn >= 9) {
      newGame();
        return (alert('game over'))
    }

      const updateState = (index) => {
        if(status === false) {
            return;
        }
        let newVal;
        if(turn%2 === 0) newVal = 'X'
        if(turn%2 !== 0) newVal = 'O'
        
        if(boxes[index].value !== ' ') return alert('Already selected');

        setTurn( turn + 1 )
        
        const newState = boxes.map(obj => {
          if (obj.num === boxes[index].num && turn%2 === 0) {
            return {...obj, value: 'X'};
          } else if(obj.num === boxes[index].num && turn%2 !== 0) {
            return {...obj, value: 'O'};
          }
    
          // 👇️ otherwise return object as is
          return obj;
        });
    
        setBox(newState);
        const winner = winGame(boxes, index, newState[index].x, newState[index].y, newVal)
        if (winner) {
            setStatus(false)
            console.log('Game won')
            if(winner ==='X') {
              setP1Score( p1Score + 1)
            } else if(winner === 'Y') {
              setP2Score( p2Score + 1)
            }
             
            return (alert(winner + ' wins'))
        }
      };

    return (
      <>
        <div id={styles.main}>
          <div id={styles.boardContainer} className='bg-secondary'>
              
              { boxes.map((box, index) => (
                  <button onClick={ () => { updateState(index)} }key={ box.num }>
                      {boxes[index].value}
                  </button>
              ))}
              {status 
            ? 
              ''
            :
              <i onClick={newGame}>new game</i>
          }
          </div >
          <Score score1={p1Score} score2={p2Score} />

        </div>
      </>
        
    )
}

export default Board;