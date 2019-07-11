import React from 'react'

export default function Info(props) {
    return (
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
}