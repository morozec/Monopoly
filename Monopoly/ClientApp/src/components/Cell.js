import React from 'react'
import './Cell.css'
import car from './../img/car.png'

export default function Cell(props){
    return(
        <div className='cell'>
           
            <div className={`cell-header ${props.color}`}>
                
            </div>
            <div className='cell-body' >
                <p><b>{props.name}</b></p>               
                {props.pos === +props.name && <img src={car} alt='not found'/>}   
                <p><b>{`${props.cost}$`}</b></p>

            </div>
        </div>
    )
}