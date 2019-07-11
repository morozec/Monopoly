import React, { useState } from 'react'
import Cell from './Cell'
import './Board.css'
import GameZone from './GameZone';

export default function Board(props) {
    const [pos, setPos] = useState(0)

    let properties = [
        { name: '0', cost: 60, color: 'brown' },
        { name: '1', cost: 60, color: 'brown' },
        { name: '2', cost: 60, color: 'brown' },
        { name: '3', cost: 60, color: 'brown' },
        { name: '4', cost: 60, color: 'brown' },
        { name: '5', cost: 60, color: 'brown' },
        { name: '6', cost: 60, color: 'brown' },
        { name: '7', cost: 60, color: 'brown' },
        { name: '8', cost: 60, color: 'brown' },
        { name: '9', cost: 60, color: 'brown' },
        { name: '10', cost: 60, color: 'brown' },
        { name: '11', cost: 60, color: 'brown' },
        { name: '12', cost: 60, color: 'brown' },
        { name: '13', cost: 60, color: 'brown' },
        { name: '14', cost: 60, color: 'brown' },
        { name: '15', cost: 60, color: 'brown' },
        { name: '16', cost: 60, color: 'brown' },
        { name: '17', cost: 60, color: 'brown' },
        { name: '18', cost: 60, color: 'brown' },
        { name: '19', cost: 60, color: 'brown' },
        { name: '20', cost: 60, color: 'brown' },
        { name: '21', cost: 60, color: 'brown' },
        { name: '22', cost: 60, color: 'brown' },
        { name: '23', cost: 60, color: 'brown' },
        { name: '24', cost: 60, color: 'brown' },
        { name: '25', cost: 60, color: 'brown' },
        { name: '26', cost: 60, color: 'brown' },
        { name: '27', cost: 60, color: 'brown' },
        { name: '28', cost: 60, color: 'brown' },
        { name: '29', cost: 60, color: 'brown' },
        { name: '30', cost: 60, color: 'brown' },
        { name: '31', cost: 60, color: 'brown' },
        { name: '32', cost: 60, color: 'brown' },
        { name: '33', cost: 60, color: 'brown' },
        { name: '34', cost: 60, color: 'brown' },
        { name: '35', cost: 60, color: 'brown' },
        { name: '36', cost: 60, color: 'brown' },
        { name: '37', cost: 60, color: 'brown' },
        { name: '38', cost: 60, color: 'brown' },
        { name: '39', cost: 60, color: 'brown' },
    ]

    const makeMove = (num) => {
        const newPos = (pos + num) % 40
        setPos(newPos)
        props.update(properties[newPos])
    }

    return (
        <div className='game-board'>

            <div className='up-row'>
                <Cell name={properties[20].name} cost={properties[20].color} color='brown' pos={pos} />
                <Cell name={properties[21].name} cost={properties[21].color} color='brown' pos={pos} />
                <Cell name={properties[22].name} cost={properties[22].color} color='brown' pos={pos} />
                <Cell name={properties[23].name} cost={properties[23].color} color='brown' pos={pos} />
                <Cell name={properties[24].name} cost={properties[24].color} color='brown' pos={pos} />
                <Cell name={properties[25].name} cost={properties[25].color} color='brown' pos={pos} />
                <Cell name={properties[26].name} cost={properties[26].color} color='brown' pos={pos} />
                <Cell name={properties[27].name} cost={properties[27].color} color='brown' pos={pos} />
                <Cell name={properties[28].name} cost={properties[28].color} color='brown' pos={pos} />
                <Cell name={properties[29].name} cost={properties[29].color} color='brown' pos={pos} />
                <Cell name={properties[30].name} cost={properties[30].color} color='brown' pos={pos} />
            </div>

            <div className='center-container'>
                <div className='left-col'>
                    <Cell name={properties[11].name} cost={properties[11].color} color='brown' pos={pos} />
                    <Cell name={properties[12].name} cost={properties[12].color} color='brown' pos={pos} />
                    <Cell name={properties[13].name} cost={properties[13].color} color='brown' pos={pos} />
                    <Cell name={properties[14].name} cost={properties[14].color} color='brown' pos={pos} />
                    <Cell name={properties[15].name} cost={properties[15].color} color='brown' pos={pos} />
                    <Cell name={properties[16].name} cost={properties[16].color} color='brown' pos={pos} />
                    <Cell name={properties[17].name} cost={properties[17].color} color='brown' pos={pos} />
                    <Cell name={properties[18].name} cost={properties[18].color} color='brown' pos={pos} />
                    <Cell name={properties[19].name} cost={properties[19].color} color='brown' pos={pos} />
                </div>

                <GameZone updatePos={makeMove} />

                <div className='right-col'>
                    <Cell name={properties[31].name} cost={properties[31].color} color='brown' pos={pos} />
                    <Cell name={properties[32].name} cost={properties[32].color} color='brown' pos={pos} />
                    <Cell name={properties[33].name} cost={properties[33].color} color='brown' pos={pos} />
                    <Cell name={properties[34].name} cost={properties[34].color} color='brown' pos={pos} />
                    <Cell name={properties[35].name} cost={properties[35].color} color='brown' pos={pos} />
                    <Cell name={properties[36].name} cost={properties[36].color} color='brown' pos={pos} />
                    <Cell name={properties[37].name} cost={properties[37].color} color='brown' pos={pos} />
                    <Cell name={properties[38].name} cost={properties[38].color} color='brown' pos={pos} />
                    <Cell name={properties[39].name} cost={properties[39].color} color='brown' pos={pos} />
                </div>
            </div>

            <div className='down-row'>
                <Cell name={properties[0].name} cost={properties[0].color} color='brown' pos={pos} />
                <Cell name={properties[1].name} cost={properties[1].color} color='brown' pos={pos} />
                <Cell name={properties[2].name} cost={properties[2].color} color='brown' pos={pos} />
                <Cell name={properties[3].name} cost={properties[3].color} color='brown' pos={pos} />
                <Cell name={properties[4].name} cost={properties[4].color} color='brown' pos={pos} />
                <Cell name={properties[5].name} cost={properties[5].color} color='brown' pos={pos} />
                <Cell name={properties[6].name} cost={properties[6].color} color='brown' pos={pos} />
                <Cell name={properties[7].name} cost={properties[7].color} color='brown' pos={pos} />
                <Cell name={properties[8].name} cost={properties[8].color} color='brown' pos={pos} />
                <Cell name={properties[9].name} cost={properties[9].color} color='brown' pos={pos} />
                <Cell name={properties[10].name} cost={properties[10].color} color='brown' pos={pos} />
            </div>





        </div>
    )
}