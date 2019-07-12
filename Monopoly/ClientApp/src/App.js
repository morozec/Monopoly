import React, { useState } from 'react';
import Board from './components/Board'
import Info from './components/Info'
import Player from './components/Player'
import './App.css'
import { useAuth0 } from "./react-auto0-wrapper";
import { Button } from 'reactstrap'
import Loading from "./components/Loading";

export default function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  const [money, setMoney] = useState(1000)
  const [properties, setProperties] = useState([])

  const buyProperty = (property) => {
    setMoney(money - property.cost)
    setProperties([...properties, property])
  }

  return (
    <div className='game'>
      <Board update={(property) => buyProperty(property)} />
      <Info money={money} properties={properties} />
    </div>
  )
}
