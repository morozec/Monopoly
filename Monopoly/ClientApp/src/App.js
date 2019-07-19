import React, { useState, useEffect } from 'react';
import Board from './components/Board'
import Info from './components/Info'
import './App.css'
import { useAuth0 } from "./react-auto0-wrapper";
import * as signalR from '@aspnet/signalr';
import car from './img/car.png'
import dog from './img/dog.png'


export default function App() {
  const { isAuthenticated, getTokenSilently, user } = useAuth0();
  const [status, setStatus] = useState(isAuthenticated ? 'loggedIn' : 'notLoggedIn')
  const [playerId, setPlayerId] = useState(-1)
  const [gameId, setGameId] = useState(-1)
  const [hubConnection, setHubConnection] = useState(null)
  const [isMyTurn, setIsMyTurn] = useState(false)

  const [myPos, setMyPos] = useState(0)
  const [money, setMoney] = useState(1000)
  const [myProperties, setMyProperties] = useState([])
  const [myToken, setMyToken] = useState(null)

  const [oppPos, setOppPos] = useState(0)
  const [oppToken, setOppToken] = useState(null)

  const properties = [
    { name: '0', cost: 100, color: 'brown' },
    { name: '1', cost: 100, color: 'brown' },
    { name: '2', cost: 100, color: 'brown' },
    { name: '3', cost: 100, color: 'brown' },
    { name: '4', cost: 100, color: 'brown' },
    { name: '5', cost: 100, color: 'brown' },
    { name: '6', cost: 100, color: 'brown' },
    { name: '7', cost: 100, color: 'brown' },
    { name: '8', cost: 100, color: 'brown' },
    { name: '9', cost: 100, color: 'brown' },
    { name: '10', cost: 100, color: 'brown' },
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
   

  useEffect(() => {
    console.log('effect')
    if (isAuthenticated) {
      //добавление пользователя
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

      //настройка signalR
      const hc = new signalR.HubConnectionBuilder()
        .withUrl('https://localhost:44347/turn')
        .configureLogging(signalR.LogLevel.Information)
        .build()
      hc.start()
        .then(() => console.log('connection start'))
        .catch(err => console.log('Error while establishing connection :('));
     
      hc.on('turn', (newOppPos) => {
        setIsMyTurn(true)
        setOppPos(newOppPos)
      })    

      setHubConnection(hc)
    }
  }, [isAuthenticated])  


  const handleJoined = (joinedGameId) => {    
    if (gameId === joinedGameId) {
      console.log('opponent joined')
      setStatus('playing')
      setIsMyTurn(true)
      setOppToken(dog)
    }
  }

  useEffect(() => {
    if (gameId !== -1){
      console.log('hc effect')
      hubConnection.on('joined', handleJoined)
    }    
  }, [gameId])
  

  const createGame = (gameName) => {
    getTokenSilently().then(token => {
      fetch('api/game', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ name: gameName, creatorId: playerId })
      })
        .then(response => response.json())
        .then(newGameId => {         
          setStatus('waitingForOpp')
          setGameId(newGameId)         
          setMyToken(car)   
        })
    })
  }

  const joinToGame = (gameId) => {

    getTokenSilently().then(token => {
      fetch('api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ playerId: playerId, gameId: gameId })
      })
      .then(() => {
        setStatus('playing')
        setMyToken(dog)
        setOppToken(car)
      })
    })

    hubConnection.invoke('Join', gameId)
  }

  const backToStartMenu = () => {
    setStatus('loggedIn')
  }

  const handleTurn = (num) => {
    const newPos = (myPos + num) % 40
    setMyPos(newPos)
    const property = properties[newPos]
    setMoney(money - property.cost)
    setMyProperties([...myProperties, property])

    setIsMyTurn(false)
    hubConnection.invoke('Turn', newPos)
  }


  return (
    <div className='game'>
      <Board
        status={status}
        isMyTurn={isMyTurn}
        properties={properties}
        myPos={myPos}
        oppPos={oppPos}
        handleTurn={handleTurn}
        myToken={myToken}
        oppToken={oppToken}
      />
      <Info
        status={status}
        setStatus={setStatus}
        createGame={createGame}
        joinToGame={joinToGame}
        backToStartMenu={backToStartMenu}
        money={money} myProperties={myProperties} />
    </div>
  )
}
