import React from 'react'
import Cell from './Cell'
import './Board.css'

export default function Board() {
    return (
        <div className='game-board'>




            <div className='up-row'>
                <Cell name='21' cost='60' color='brown' />
                <Cell name='22' cost='60' color='brown' />
                <Cell name='23' cost='60' color='red' />
                <Cell name='24' cost='60' color='red' />
                <Cell name='25' cost='60' color='red' />
                <Cell name='26' cost='60' color='red' />
                <Cell name='27' cost='60' color='red' />
                <Cell name='28' cost='60' color='red' />
                <Cell name='29' cost='60' color='red' />
                <Cell name='30' cost='60' color='red' />
                <Cell name='31' cost='60' color='red' />
            </div>

            <div className='center-container'>
                <div className='left-col'>
                    <Cell name='12' cost='60' color='blue' />
                    <Cell name='13' cost='60' color='blue' />
                    <Cell name='14' cost='60' color='brown' />
                    <Cell name='15' cost='60' color='brown' />
                    <Cell name='16' cost='60' color='brown' />
                    <Cell name='17' cost='60' color='brown' isToken='true'/>
                    <Cell name='18' cost='60' color='brown' />
                    <Cell name='19' cost='60' color='brown' />
                    <Cell name='20' cost='60' color='brown' />
                </div>

                <div className='right-col'>
                    <Cell name='32' cost='60' color='blue' />
                    <Cell name='33' cost='60' color='blue' />
                    <Cell name='34' cost='60' color='brown' />
                    <Cell name='35' cost='60' color='brown' />
                    <Cell name='36' cost='60' color='brown' />
                    <Cell name='37' cost='60' color='brown' />
                    <Cell name='38' cost='60' color='brown' />
                    <Cell name='39' cost='60' color='brown' />
                    <Cell name='40' cost='60' color='brown' />
                </div>
            </div>

            <div className='down-row'>
                <Cell name='1' cost='60' color='blue' />
                <Cell name='2' cost='60' color='blue' />
                <Cell name='3' cost='60' color='brown' />
                <Cell name='4' cost='60' color='brown' />
                <Cell name='5' cost='60' color='brown' />
                <Cell name='5' cost='60' color='brown' />
                <Cell name='6' cost='60' color='brown' />
                <Cell name='7' cost='60' color='brown' />
                <Cell name='8' cost='60' color='brown' />
                <Cell name='9' cost='60' color='brown' />
                <Cell name='10' cost='60' color='brown' />
                <Cell name='11' cost='60' color='brown' />
            </div>





        </div>
    )
}