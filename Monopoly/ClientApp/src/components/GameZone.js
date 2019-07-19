import React, {useState} from 'react'
import { Button } from 'reactstrap'
import PlayerInfo from './PlayerInfo'

import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

export default function GameZone(props) {
    const [isRolling, setIsRolling] = useState(false)    

    let reactDice
    const rollAll = () => {      
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



    return (
        <div className='game-zone'>            

            
            <ReactDice
                numDice={2}
                rollDone={rollDoneCallback}
                disableIndividual
                ref={dice => reactDice = dice}
            />

            <Button color='primary' onClick={rollAll} disabled={isRolling || props.status !== 'playing' || !props.isMyTurn}>Бросить кости</Button>

            

        </div>
    )
}