import React, { useState }  from 'react';


const Score = ({ score1, score2 }) => {

    const [ names, setNames ] = useState({ p1:'', p2:'' });

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
        <div>
            <div>
                <h1>Player 1</h1> <p>{score1}</p>
                <div>{names.p1
                ? 
                    <>
                    {names.p1}
                    <button onClick={handleEdit} name='p1'>Change name</button>
                    <p>{score1}</p>
                    </>
                :
                <form onSubmit={handleEnter}>
                    <input 
                        type="text"
                        name='player'
                        id='p1'
                        required
                    />
                    <button type='submit'>Save</button>
                </form>
                }
                </div>
            </div>
            <div>
                <h1>Player 2</h1> <p>{score2}</p>
                <div>{names.p2
                ? 
                    <>
                        {names.p2}
                        <button onClick={handleEdit} name='p2'>Change name</button>
                        <p>{score2}</p>
                    </>
                :
                <form onSubmit={handleEnter}>
                    <input 
                        type="text"
                        name='player'
                        id='p2'
                        required
                    />
                    <button type='submit'>Save</button>
                </form>
                }
                </div>
            </div>
        </div>
    )
}

export default Score;