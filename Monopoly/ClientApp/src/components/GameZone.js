import React from 'react'

import PlayerInfo from './PlayerInfo'



export default function GameZone(props) {  

    return (
        <div className='game-zone'>

            {props.userName &&  <PlayerInfo {...props}/>}            
            {!props.userName &&  <h3>Ждем соперника</h3>}       

        </div>
    )
}