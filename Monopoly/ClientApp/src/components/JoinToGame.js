import React, { useEffect, useState } from 'react'
import { useAuth0 } from '../react-auto0-wrapper';
import { Button } from 'reactstrap';
import AbortController from "abort-controller"

export default function JoinToGame(props) {

    const { getTokenSilently } = useAuth0();
    const [games, setGames] = useState([])
    let isMounted = false

    useEffect(() => {
        isMounted = true

        const abortController = new AbortController()
        const signal = abortController.signal
        getTokenSilently().then(token => {
            fetch('api/games', {
                signal: signal,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
                .then(response => response.json())
                .then(games => {
                    if (isMounted) {
                        setGames(games)
                    }
                })
        })

        return function cleanup() {
            isMounted = false
        }
    })

    return (
        <div>
            <h3>Список игр</h3>
            {games.map(game => (
                <p className="detail-item" key={game.id}>
                    {game.name}
                    <Button className="float-right" onClick={() => props.joinToGame(game.id)}>Играть</Button>
                </p>
            ))}
        </div>
    )
}
