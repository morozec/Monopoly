import React, { useState } from 'react'
import NewGame from './NewGame'
import PlayerInfo from './PlayerInfo'

import JoinToGame from './JoinToGame';
import StartMenu from './StatMenu'

import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'


export default function Info(props) {


    const [isRolling, setIsRolling] = useState(false)

    let reactDice
    const rollAll = () => {
        const canNotRoll = isRolling || props.status !== 'playing' || !props.isMyTurn
        if (canNotRoll) {
            return
        }

        setIsRolling(true)
        reactDice.rollAll()
    }

    const rollDoneCallback = (num) => {
        if (reactDice) {//пропускаем начальный колбэк, который вызывается сам   
            console.log(`You rolled a ${num}`)
            props.handleTurn(num)
            setIsRolling(false)
        }
    }


    let content;
    switch (props.status) {
        case 'notLoggedIn':
        case 'loggedIn':
            content = <StartMenu {...props} />
            break
        case 'newGame':
            content = <NewGame {...props} />
            break
        case 'joinToGame':
            content = <JoinToGame {...props} />
            break
        case 'waitingForOpp':
            content = <h3>Ждем соперника</h3>
            break
        case 'playing':
            content = [                
                    <PlayerInfo key={0} {...props} />,
                    <div key={1} className='dice' onClick={rollAll}>
                        <ReactDice
                            numDice={2}
                            rollDone={rollDoneCallback}
                            disableIndividual
                            ref={dice => reactDice = dice}
                        />
                    </div>             
            ]

            break
        default:
            throw new Error('unknown status')
    }

    return (

        <div className='info'>
            {content} 
        </div>
    )
}