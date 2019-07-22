import React from 'react'

export default function PlayerInfo(props) {    

    return (
        <div className='player-info'>
            <h3>{props.user.name}</h3>

            <p className="detail-item">
                Денег на счету
                <span className="float-right">{`${props.money}$`}</span>
            </p>

            <p className="detail-item">
                Участки в собственности
            </p>
            {props.playerProperties.map(p => <div key={p.name}>{p.name}</div>)}            

        </div>
    )
}
