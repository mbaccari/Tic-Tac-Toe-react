import React, { useState }  from 'react';

import styles from './Score.module.css'


const Score = ({ score1, score2 }) => {

    const [ names, setNames ] = useState({ p1:'Player 1', p2:'Player 2' });

    const [ editOne, setEditOne ] = useState(true)

    const handleEnter = (event) => {
        event.preventDefault();
        const player = event.target.player
        setNames({...names, [player.id]:player.value})
    }

    const handleEdit = (event) => {
        event.preventDefault();
        console.log(event.target.name)
        setNames({...names,[event.target.name]: ''})
    }


    return (
        <div id={styles.container}>
            <div>
                {names.p1
                ? 
                    <>
                        <div id={styles.name1}>{names.p1} <button id={styles.edit} onClick={handleEdit} className='bi bi-pencil-square' name='p2'></button></div>
                        
                        <p id={styles.score1}>{score1}</p>
                    </>
                :
                <form onSubmit={handleEnter}>
                    <input 
                        type="text"
                        name='player'
                        id='p1'
                        required
                    />
                    <button type='submit'>Set</button>
                </form>
                }
            </div>
            <div>
                {names.p2
                ? 
                    <>
                        <div id={styles.name2}>
                            {names.p2}<button id={styles.edit} onClick={handleEdit} className='bi bi-pencil-square' name='p2'></button>   
                        </div>
                        
                        <p id={styles.score2}>{score2}</p>
                    </>
                :
                <form onSubmit={handleEnter}>
                    <input 
                        type="text"
                        name='player'
                        id='p2'
                        required
                    />
                    <button type='submit'>Set</button>
                </form>
                }
            </div>
        </div>
    )
}

export default Score;