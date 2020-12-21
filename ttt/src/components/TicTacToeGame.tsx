import React,{Component} from 'react'
import TicTacToeBoard from './TicTacToeBoard'
import TicTacToe from '../services/TicTacToe'

let resetStyle={
    color:'white',
    align:'left',
    width:'20%',
    marginBottom:'10px' //JS does not recognize hyphen(margin-bottom)
}

// export default ()=>{
//     return (
//         <div className='container game'>    
//             <h1>Tic Tac Toe</h1>
//             <h2>Next Move: O</h2>
//             <TicTacToeBoard/>
//         </div>
//     )
// }

export default class Game extends Component{
    private gameService:TicTacToe;
    state = {
        next: 'O',
        cells: ['', '', '',
            '', '', '',
            '', '', ''
        ],
        winner: '', 
        winningMoves:null,
        over:false,
        message:'Start : O'
    }

    constructor(){
        super({});
        this.onCellClick = this.onCellClick.bind(this); //alternate is to right lambda function
        this.gameService= new TicTacToe();
    }

    onCellClick(cellId: number) {
        console.log(`cell ${cellId} clicked`);
        if(!this.gameService.move(cellId)){
            return; //nothing changed in the game
        }
        if(this.gameService.winner){
            this.setState({
                winner:this.gameService.winner,
                message:`Winner is ${this.gameService.winner}`,
                winningMoves:this.gameService.winningMoves
            })
        }else if(this.gameService.gameOver && !this.gameService.winner){
            this.setState({
                message:'Stalemate'
            })
        } else{ 
            this.setState({ 
                message:`Next Move : ${this.gameService.next}`,
            })
        }
        this.setState({cells: [...this.gameService.cells],over:this.gameService.gameOver});
    }

    reset =()=>{
        this.gameService= new TicTacToe();
        this.setState({
            next: this.gameService.next,
            cells:[...this.gameService.cells],
            winner: this.gameService.winner, 
            winningMoves:this.gameService.winningMoves,
            over:this.gameService.gameOver,
            message:'Start : O'
        }); 
    }

    render(){
        return (
            <div className='container game'>    
                <h1>Tic Tac Toe</h1>
                <h2>{this.state.message}</h2>
                <button className='btn btn-danger' style={resetStyle} onClick={this.reset}>Reset</button>
                <TicTacToeBoard onCellClick={this.onCellClick} 
                    cells={this.state.cells} 
                    winningMoves={this.state.winningMoves} 
                    over={this.state.over}/>
            </div>
        )
    }
}