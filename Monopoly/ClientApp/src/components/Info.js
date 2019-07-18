import React from 'react'
import { Button } from 'reactstrap'
import NewGame from './NewGame'
import { useAuth0 } from "./../react-auto0-wrapper";

import './Info.css'
import JoinToGame from './JoinToGame';


export default function Info(props) {

    const { loginWithRedirect, user } = useAuth0();

    let content;
    switch (props.status) {
        case 'notLoggedIn':
            content = (
                <div className='login-container'>
                    <Button color='primary' block
                        onClick={() =>
                            loginWithRedirect({})
                        }
                    >
                        Log in
                    </Button>
                </div>
            )
            break
        case 'loggedIn':
            content = (
                <div className='login-container'>
                    <Button color='secondary' block
                        onClick={() => props.setStatus('newGame')}
                    >
                        Новая игра
                    </Button>

                    <Button color='secondary' block
                        onClick={() => props.setStatus('joinToGame')}
                    >
                        Присоединиться к игре
                    </Button>
                </div>
            )
            break
        case 'newGame':
            content = (
                <div className='login-container'>
                    <NewGame createGame={props.createGame} />
                </div>
            )
            break
        case 'joinToGame':
            content = <JoinToGame joinToGame={props.joinToGame} />
            break
        case 'waitingForOpp':
            content = (
                <div className='game-info'>
                    <h3>Ждем соперника</h3>
                </div>
            )
            break
        case 'playing':
            content = (
                <div className='game-info'>
                    <h3>{user.name}</h3>

                    <p className="detail-item">
                        Денег на счету
                    <span className="float-right">{`${props.money}$`}</span>
                    </p>

                    <p className="detail-item">
                        Участки в собственности
                    </p>
                    {props.myProperties.map(p => <div key={p.name}>{p.name}</div>)}

                </div>
            )
            break
        default:
            throw new Error('unknown status')
    }


    return content;
}