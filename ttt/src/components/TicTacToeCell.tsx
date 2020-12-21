import React from 'react';

interface CellProps{
    value:String;
    cellClicked:()=>void;
    winningMoves:number[]|null;
    over:boolean;
    id:number;
}

export default ({value,cellClicked,over,winningMoves,id}:CellProps)=>{
    let cellStyle={
        background: value||over?'#EEE':'white',
        cursor:value||over?'not-allowed':'pointer'
    }
    let handler = value||over?(()=>{console.log('You cant click here')}):cellClicked
    const disabled = value?true:false;
    if(winningMoves ){
        let [a,b,c]=winningMoves;
        if(id===a || id===b || id===c)
            cellStyle.background='lightgreen';
    }
    return (
        <button disabled={disabled} 
                style={cellStyle} 
                onClick={handler}
                className='cell'>
                {value}
        </button>
    );
}