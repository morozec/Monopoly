import React, { useState } from 'react'
import Cell from './Cell'
import './Board.css'
import GameZone from './GameZone';

export default function Board() {
    const [pos, setPos] = useState(0)



    return (
        <div className='game-board'>

            <div className='up-row'>
                <Cell name='20' cost='60' color='brown' pos={pos}/>
                <Cell name='21' cost='60' color='brown' pos={pos}/>
                <Cell name='22' cost='60' color='brown' pos={pos}/>
                <Cell name='23' cost='60' color='red' pos={pos}/>
                <Cell name='24' cost='60' color='red' pos={pos}/>
                <Cell name='25' cost='60' color='red' pos={pos}/>
                <Cell name='26' cost='60' color='red' pos={pos}/>
                <Cell name='27' cost='60' color='red' pos={pos}/>
                <Cell name='28' cost='60' color='red' pos={pos}/>
                <Cell name='29' cost='60' color='red' pos={pos}/>
                <Cell name='30' cost='60' color='red' pos={pos}/>
            </div>

            <div className='center-container'>
                <div className='left-col'>
                    <Cell name='11' cost='60' color='blue' pos={pos}/>
                    <Cell name='12' cost='60' color='blue' pos={pos}/>
                    <Cell name='13' cost='60' color='blue' pos={pos}/>
                    <Cell name='14' cost='60' color='brown' pos={pos}/>
                    <Cell name='15' cost='60' color='brown' pos={pos}/>
                    <Cell name='16' cost='60' color='brown' pos={pos}/>
                    <Cell name='17' cost='60' color='brown' pos={pos} />
                    <Cell name='18' cost='60' color='brown' pos={pos}/>
                    <Cell name='19' cost='60' color='brown' pos={pos}/>
                </div>

                <GameZone updatePos = {(num) => setPos((pos + num) % 40)} />

                <div className='right-col'>
                    <Cell name='31' cost='60' color='red' pos={pos}/>
                    <Cell name='32' cost='60' color='blue' pos={pos}/>
                    <Cell name='33' cost='60' color='blue' pos={pos}/>
                    <Cell name='34' cost='60' color='brown' pos={pos}/>
                    <Cell name='35' cost='60' color='brown' pos={pos}/>
                    <Cell name='36' cost='60' color='brown' pos={pos}/>
                    <Cell name='37' cost='60' color='brown' pos={pos}/>
                    <Cell name='38' cost='60' color='brown' pos={pos}/>
                    <Cell name='39' cost='60' color='brown' pos={pos}/>                    
                </div>
            </div>

            <div className='down-row'>
                <Cell name='0' cost='60' color='blue' pos={pos}/>
                <Cell name='1' cost='60' color='blue' pos={pos}/>
                <Cell name='2' cost='60' color='blue' pos={pos}/>
                <Cell name='3' cost='60' color='brown' pos={pos}/>
                <Cell name='4' cost='60' color='brown' pos={pos}/>
                <Cell name='5' cost='60' color='brown' pos={pos}/>
                <Cell name='5' cost='60' color='brown' pos={pos}/>
                <Cell name='6' cost='60' color='brown' pos={pos}/>
                <Cell name='7' cost='60' color='brown' pos={pos}/>
                <Cell name='8' cost='60' color='brown' pos={pos}/>
                <Cell name='9' cost='60' color='brown' pos={pos}/>
                <Cell name='10' cost='60' color='brown' pos={pos}/>
            </div>





        </div>
    )
}