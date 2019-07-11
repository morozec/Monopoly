import React from 'react'
import { Button } from 'reactstrap'

import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

export default function GameZone(props) {


    let reactDice
    const rollAll = () => {
        reactDice.rollAll()
    }

    const rollDoneCallback = (num) => {
        if (reactDice) {//пропускаем начальный колбэк, который вызывается сам
            console.log(`You rolled a ${num}`)
            props.updatePos(num)
        }
    }

    return (
        <div className='game-zone'>

            <ReactDice
                numDice={2}
                rollDone={rollDoneCallback}
                disableIndividual
                ref={dice => reactDice = dice}
            />

            <Button color='primary' onClick={rollAll}>Бросить кости</Button>
        </div>
    )
}