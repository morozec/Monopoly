import React from 'react'
import { useAuth0 } from "./../react-auto0-wrapper";

export default function PlayerInfo(props) {
    const { user } = useAuth0();

    return (
        <div className='player-info'>
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
}
