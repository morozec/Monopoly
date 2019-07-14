import React from 'react'
import { Button } from 'reactstrap'
import { useAuth0 } from "./../react-auto0-wrapper";

import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

export default function GameZone(props) {
    const auth0 = useAuth0();
    auth0.getIdTokenClaims()
        .then(data => console.log(data))
    const { isAuthenticated, loginWithRedirect, getTokenSilently } = auth0;


    let reactDice
    const rollAll = () => {
        reactDice.rollAll()
    }

    const rollDoneCallback = (num) => {
        if (reactDice) {//пропускаем начальный колбэк, который вызывается сам
            console.log(`You rolled a ${num}`)
            props.updatePos(num)
        }
    }

    const goToServer = () => {
        getTokenSilently().then(token => {
            //console.log(token)
            fetch('api/private', {
                method: 'GET',
                headers: {                    
                    'Authorization': 'Bearer ' + token,
                }
            })
                .then(response => {
                    console.log(response)
                    return response.json()
                })
                .then(data => console.log(data))
        })
    }



    return (



        <div className='game-zone'>

            {!isAuthenticated && (
                <Button color='primary'
                    onClick={() =>
                        loginWithRedirect({})
                    }
                >
                    Log in
                </Button>
            )}


            {isAuthenticated &&
                <ReactDice
                    numDice={2}
                    rollDone={rollDoneCallback}
                    disableIndividual
                    ref={dice => reactDice = dice}
                />
            }

            {isAuthenticated &&
                <Button color='primary' onClick={goToServer}>Бросить кости</Button>
            }
        </div>
    )
}