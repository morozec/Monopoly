import React from 'react'

import PlayerInfo from './PlayerInfo'



export default function GameZone(props) {  

    return (
        <div className='game-zone'>

            {props.user &&  <PlayerInfo {...props}/>}            
            {!props.user &&  <h3>Ждем соперника</h3>}       

        </div>
    )
}