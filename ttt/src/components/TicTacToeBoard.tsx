import { render } from '@testing-library/react';
import React from 'react';
import Cell from './TicTacToeCell'

let boardStyle={
    maxWidth:"250px"
}

interface BoardProps{
    cells:String[];
    onCellClick(cellId:number):void;
    winningMoves:number[]|null;
    over:boolean;
}

export default (props:BoardProps)=>{
    let onCellClick = props.onCellClick;
    let cells = props.cells;
    let over = props.over;
    let winningMoves = props.winningMoves;
    return (
        <div style={boardStyle} className='container'>
            <div className='row'>
                <Cell over={over} winningMoves={winningMoves} id={0} cellClicked={()=>onCellClick(0)} value={cells[0]}/>
                <Cell over={over} winningMoves={winningMoves} id={1} cellClicked={()=>onCellClick(1)} value={cells[1]}/>
                <Cell over={over} winningMoves={winningMoves} id={2} cellClicked={()=>onCellClick(2)} value={cells[2]}/>
            </div>
            <div className='row'>
                <Cell over={over} winningMoves={winningMoves} id={3} cellClicked={()=>onCellClick(3)} value={cells[3]}/>
                <Cell over={over} winningMoves={winningMoves} id={4} cellClicked={()=>onCellClick(4)} value={cells[4]}/>
                <Cell over={over} winningMoves={winningMoves} id={5} cellClicked={()=>onCellClick(5)} value={cells[5]}/>
            </div>
            <div className='row'>
                <Cell over={over} winningMoves={winningMoves} id={6} cellClicked={()=>onCellClick(6)} value={cells[6]}/>
                <Cell over={over} winningMoves={winningMoves} id={7} cellClicked={()=>onCellClick(7)} value={cells[7]}/>
                <Cell over={over} winningMoves={winningMoves} id={8} cellClicked={()=>onCellClick(8)} value={cells[8]}/>
            </div>
        </div>
        );
}

