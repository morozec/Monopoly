import React from 'react'
import Cell from './Cell'
import './Board.css'
import GameZone from './GameZone';

export default function Board(props) {   
    
    const {properties} = props   

    return (       
        <div className='game-board'>

            <div className='up-row'>
                <Cell name={properties[20].name} cost={properties[20].cost} color='brown' {...props} />
                <Cell name={properties[21].name} cost={properties[21].cost} color='brown' {...props} />
                <Cell name={properties[22].name} cost={properties[22].cost} color='brown' {...props} />
                <Cell name={properties[23].name} cost={properties[23].cost} color='brown' {...props} />
                <Cell name={properties[24].name} cost={properties[24].cost} color='brown' {...props} />
                <Cell name={properties[25].name} cost={properties[25].cost} color='brown' {...props} />
                <Cell name={properties[26].name} cost={properties[26].cost} color='brown' {...props} />
                <Cell name={properties[27].name} cost={properties[27].cost} color='brown' {...props} />
                <Cell name={properties[28].name} cost={properties[28].cost} color='brown' {...props} />
                <Cell name={properties[29].name} cost={properties[29].cost} color='brown' {...props} />
                <Cell name={properties[30].name} cost={properties[30].cost} color='brown' {...props} />
            </div>

            <div className='center-container'>
                <div className='left-col'>
                    <Cell name={properties[11].name} cost={properties[11].cost} color='brown' {...props} />
                    <Cell name={properties[12].name} cost={properties[12].cost} color='brown' {...props} />
                    <Cell name={properties[13].name} cost={properties[13].cost} color='brown' {...props} />
                    <Cell name={properties[14].name} cost={properties[14].cost} color='brown' {...props} />
                    <Cell name={properties[15].name} cost={properties[15].cost} color='brown' {...props} />
                    <Cell name={properties[16].name} cost={properties[16].cost} color='brown' {...props} />
                    <Cell name={properties[17].name} cost={properties[17].cost} color='brown' {...props} />
                    <Cell name={properties[18].name} cost={properties[18].cost} color='brown' {...props} />
                    <Cell name={properties[19].name} cost={properties[19].cost} color='brown' {...props} />
                </div>

                <GameZone {...props} />

                <div className='right-col'>
                    <Cell name={properties[31].name} cost={properties[31].cost} color='brown' {...props} />
                    <Cell name={properties[32].name} cost={properties[32].cost} color='brown' {...props} />
                    <Cell name={properties[33].name} cost={properties[33].cost} color='brown' {...props} />
                    <Cell name={properties[34].name} cost={properties[34].cost} color='brown' {...props} />
                    <Cell name={properties[35].name} cost={properties[35].cost} color='brown' {...props} />
                    <Cell name={properties[36].name} cost={properties[36].cost} color='brown' {...props} />
                    <Cell name={properties[37].name} cost={properties[37].cost} color='brown' {...props} />
                    <Cell name={properties[38].name} cost={properties[38].cost} color='brown' {...props} />
                    <Cell name={properties[39].name} cost={properties[39].cost} color='brown' {...props} />
                </div>
            </div>

            <div className='down-row'>
                <Cell name={properties[0].name} cost={properties[0].cost} color='brown' {...props} />
                <Cell name={properties[1].name} cost={properties[1].cost} color='brown' {...props} />
                <Cell name={properties[2].name} cost={properties[2].cost} color='brown' {...props} />
                <Cell name={properties[3].name} cost={properties[3].cost} color='brown' {...props} />
                <Cell name={properties[4].name} cost={properties[4].cost} color='brown' {...props} />
                <Cell name={properties[5].name} cost={properties[5].cost} color='brown' {...props} />
                <Cell name={properties[6].name} cost={properties[6].cost} color='brown' {...props} />
                <Cell name={properties[7].name} cost={properties[7].cost} color='brown' {...props} />
                <Cell name={properties[8].name} cost={properties[8].cost} color='brown' {...props} />
                <Cell name={properties[9].name} cost={properties[9].cost} color='brown' {...props} />
                <Cell name={properties[10].name} cost={properties[10].cost} color='brown' {...props} />
            </div>





        </div>
    )
}