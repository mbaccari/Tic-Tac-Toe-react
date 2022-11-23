import React, { useState }  from 'react';

import styles from './Score.module.css'


const Score = ({ score1, score2 }) => {

    const [ names, setNames ] = useState({ p1:'Player 1', p2:'Player 2' });

    const handleEnter = (event) => {
        event.preventDefault();
        const player = event.target.player;
        console.log(player.dataset.id)
        setNames({...names, [player.dataset.id]:player.value});
    }

    const handleEdit = (event) => {
        event.preventDefault();
        console.log(event.target.name);
        setNames({...names,[event.target.name]: ''});
    }


    return (
        <div id={styles.container}>
            <div>
                {names.p1
                ? 
                    <>
                        <div id={styles.name1}>{names.p1} <button id={styles.edit} onClick={handleEdit} className='bi bi-pencil-square' name='p1'></button></div>
                        
                        <p id={styles.score1}>{score1}</p>
                    </>
                :
                <>
                    

                    <div id={styles.name1}>
                        <form id={styles.nameChangeForm} onSubmit={handleEnter}>
                            <div>
                                <input 
                                type="text"
                                name='player'
                                id={styles.nameChangeInput}
                                data-id='p1'
                                required
                                />
                                <button id={styles.nameChangeInputButton} className="bi bi-save2-fill" type='submit'></button>
                            </div>
                        </form>
                    </div>
                        
                    <p id={styles.score1}>{score1}</p>
                </>
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
                <>
                    <div id={styles.name2}>
                        <form id={styles.nameChangeForm} onSubmit={handleEnter}>
                            <input 
                                type="text"
                                name='player'
                                id={styles.nameChangeInput}
                                data-id='p2'
                                required
                            />
                            <button id={styles.nameChangeInputButton} className="bi bi-save2-fill" type='submit'></button>
                        </form>
                    </div>
                        
                    <p id={styles.score2}>{score2}</p>
                </>
                }
            </div>
        </div>
    )
}

export default Score;