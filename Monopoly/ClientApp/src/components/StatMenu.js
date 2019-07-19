import React from 'react'
import { useAuth0 } from "./../react-auto0-wrapper";
import { Button } from 'reactstrap'


export default function StatMenu(props) {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    return (
        <div>
            <Button color='primary' block disabled={isAuthenticated}
                onClick={() =>
                    loginWithRedirect({})
                }
            >
                Log in
            </Button>

            <Button color='primary' block disabled={!isAuthenticated}
                onClick={() => props.setStatus('newGame')}
            >
                Новая игра
            </Button>

            <Button color='primary' block disabled={!isAuthenticated}
                onClick={() => props.setStatus('joinToGame')}
            >
                Присоединиться к игре
            </Button>
        </div>
    )
}
