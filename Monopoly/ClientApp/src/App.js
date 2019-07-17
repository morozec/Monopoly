import React, { useState, useEffect } from 'react';
import Board from './components/Board'
import Info from './components/Info'
import './App.css'
import { useAuth0 } from "./react-auto0-wrapper";
import * as signalR from '@aspnet/signalr';


export default function App() {
  const { isAuthenticated, getTokenSilently, user } = useAuth0();  
  const [status, setStatus] = useState(isAuthenticated ? 'loggedIn' : 'notLoggedIn')
  const [playerId, setPlayerId] = useState(-1)
  const [hubConnection, setHubConnection] = useState(null)

  const [money, setMoney] = useState(1000)
  const [properties, setProperties] = useState([])

  useEffect(() => {   
    console.log('effect')
    if (isAuthenticated) {
      getTokenSilently().then(token => {
        fetch('api/addPlayer', {
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

  const joinToGame = (gameId) => {
    setStatus('isPlaying')

    getTokenSilently().then(token => {
      fetch('api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ playerId: playerId, gameId: gameId })
      })
    })

    hubConnection.invoke('SendToAll', '2nd player')
  }


  const buyProperty = (property) => {
    setMoney(money - property.cost)
    setProperties([...properties, property])
  }

  return (
    <div className='game'>
      <Board
        update={(property) => buyProperty(property)} />
      <Info
        status={status}
        setStatus={setStatus}
        createGame={createGame}
        joinToGame={joinToGame}
        money={money} properties={properties} />
    </div>
  )
}
