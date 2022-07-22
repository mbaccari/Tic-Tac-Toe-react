import { useState, setState } from 'react'

const winGame = require('../winLogic');

function Board({ tiles }) {

    

    const [ turn, setTurn ] = useState(0);

    const [ status, setStatus ] =useState(true)

    const [ boxes, setBox ] = useState([
        {value: ' ', x: 1, y: 1, num: 1}, 
        {value: ' ', x: 1, y: 2, num: 2},
        {value: ' ', x: 1, y: 3, num: 3}, 
        {value: ' ', x: 2, y: 1, num: 4}, 
        {value: ' ', x: 2, y: 2, num: 5}, 
        {value: ' ', x: 2, y: 3, num: 6}, 
        {value: ' ', x: 3, y: 1, num: 7}, 
        {value: ' ', x: 3, y: 2, num: 8}, 
        {value: ' ', x: 3, y: 3, num: 9} ]
    );

    if(turn > 9) {
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
        const winner = winGame(boxes, index, boxes[index].x, boxes[index].y, newVal)
        console.log(winner)
        if (winner) {
            setStatus(false)
            console.log('Game won')
            return (alert(winner + ' wins'))
        }
      };

    return (
        <div className='bg-secondary container row'>
            { boxes.map((box, index) => (
                <button style={{ height: 50, width: 50}} className='col-4 border margin-1' onClick={ () => { updateState(index)} }key={ box.num }>
                    {boxes[index].value}
                </button>
            ))}
        </div >
    )
}

export default Board;