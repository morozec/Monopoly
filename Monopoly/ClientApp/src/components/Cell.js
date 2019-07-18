import React from 'react'
import './Cell.css'

export default function Cell(props){
    return(
        <div className='cell'>
           
            <div className={`cell-header ${props.color}`}>
                
            </div>
            <div className='cell-body' >
                <p><b>{props.name}</b></p>               
                {props.myToken && props.myPos === +props.name && <img src={props.myToken} alt='not found'/>}   
                {props.oppToken && props.oppPos === +props.name && <img src={props.oppToken} alt='not found'/>}   
                <p><b>{`${props.cost}$`}</b></p>

            </div>
        </div>
    )
}