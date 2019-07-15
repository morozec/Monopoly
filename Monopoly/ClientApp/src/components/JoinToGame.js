import React, { useEffect, useState } from 'react'
import { useAuth0 } from '../react-auto0-wrapper';
import { Button } from 'reactstrap';

export default function JoinToGame() {

    const { getTokenSilently } = useAuth0();
    const [games, setGames] = useState([])

    useEffect(() => {
        getTokenSilently().then(token => {    
            fetch('api/games', {
                method:'GET',
                headers:{                    
                    'Authorization': `Bearer ${token}`,
                }
            })
            .then(response => response.json())
            .then(games => setGames(games))
        })
    })

    return (
        <div className='login-container'>
            <h3>Список игр</h3>
            {games.map(game => (
                <p className="detail-item" key={game.id}>
                    {game.name}
                    <Button className="float-right">Играть</Button>
                </p>
            ))}
        </div>
    )
}
