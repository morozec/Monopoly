import React from 'react'
import './Cell.css'
import car from './../img/car.png'

export default function Cell(props){
    return(
        <div className='cell'>
           
            <div className={`cell-header ${props.color}`}>
                
            </div>
            <div className='cell-body' >
                <p>{props.name}</p>               
                {props.isToken && <img src={car} alt='not found'/>}               
                <p>{props.cost}</p>

            </div>
        </div>
    )
}