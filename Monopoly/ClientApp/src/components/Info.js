import React from 'react'

import NewGame from './NewGame'

import PlayerInfo from './PlayerInfo'

import JoinToGame from './JoinToGame';
import StartMenu from './StatMenu'


export default function Info(props) {  

    let content;
    switch (props.status) {
        case 'notLoggedIn':
        case 'loggedIn':
            content = <StartMenu {...props} />          
            break
        case 'newGame':
            content = <NewGame createGame={props.createGame} />
            break
        case 'joinToGame':
            content = <JoinToGame joinToGame={props.joinToGame} />
            break
        case 'waitingForOpp':
            content = <h3>Ждем соперника</h3>                
            break
        case 'playing':
            content = <PlayerInfo {...props}/>
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