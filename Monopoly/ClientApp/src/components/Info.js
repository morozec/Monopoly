import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap'
import { useAuth0 } from '../react-auto0-wrapper';
import NewGame from './NewGame'

import './Info.css'
import JoinToGame from './JoinToGame';
import * as signalR from '@aspnet/signalr';

export default function Info(props) {

    const { isAuthenticated, loginWithRedirect, getTokenSilently, user } = useAuth0();
    const [status, setStatus] = useState(isAuthenticated ? 'loggedIn' : 'notLoggedIn')
    const [playerId, setPlayerId] = useState(-1)
    const [hubConnection, setHubConnection] = useState(null)


    useEffect(() => {
        console.log('effect')
        if (isAuthenticated) {
            getTokenSilently().then(token => {
                fetch('api/player', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({ name: user.name })
                })
                    .then(response => response.json())
                    .then(playerId => setPlayerId(playerId))
            })

            const hc = new signalR.HubConnectionBuilder()
                .withUrl('https://localhost:44347/turn')
                .configureLogging(signalR.LogLevel.Information)
                .build()
            hc.start()
                .then(() => console.log('connection start'))
                .catch(err => console.log('Error while establishing connection :('));

            hc.on('turn', (data) => console.log(data))
            setHubConnection(hc)

        }        
    }, [isAuthenticated])

    const createGame = (gameName) => {
        setStatus('isPlaying')

        getTokenSilently().then(token => {
            fetch('api/game', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ name: gameName, creatorId: playerId })
            })
        })
    }

    const joinToGame = () => {
        setStatus('isPlaying')
        hubConnection.invoke('SendToAll', '2nd player')
    }

    let content;
    switch (status) {
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
                        onClick={() => setStatus('newGame')}
                    >
                        Новая игра
                    </Button>

                    <Button color='secondary' block
                        onClick={() => setStatus('joinToGame')}
                    >
                        Присоединиться к игре
                    </Button>
                </div>
            )
            break
        case 'newGame':
            content = (
                <div className='login-container'>
                    <NewGame createGame={createGame} />
                </div>
            )
            break
        case 'joinToGame':
            content = <JoinToGame joinToGame={joinToGame} />
            break
        case 'isPlaying':
            content = (
                <div className='game-info'>
                    <h3>Игрок 1</h3>

                    <p className="detail-item">
                        Денег на счету
                    <span className="float-right">{`${props.money}$`}</span>
                    </p>

                    <p className="detail-item">
                        Участки в собственности
                    </p>
                    {props.properties.map(p => <div key={p.name}>{p.name}</div>)}

                </div>
            )
            break
        default:
            throw new Error('unknown status')
    }


    return content;
}