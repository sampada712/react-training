import { chdir } from "process";
import { checkServerIdentity } from "tls";

export default class TicTacToe{
    private _cells:string[];
    private _next:string = 'O';
    private _winner:string|null=null;
    private _winningMoves:number[]|null=null;
    private _moveCount:number=0;

    constructor(){
        this._cells=[
        '',  '',   '',
        '',  '',   '',
        '',  '',   ''
        ];
    }

    get gameOver(){
        return this._moveCount==9||this._winner;
    }

    get winner(){
        return this._winner;
    }

    get cells(){
        return this._cells;
    }

    get next(){
        return this._next;
    }

    get winningMoves(){
        return this._winningMoves;
    }

    move(pos:number){
        //if game is over or current cell is occupied
        if(this.gameOver || this._cells[pos]){
            return false;
        }
        this._cells[pos]=this._next;
        this._next=this._next==='O'?'X':'O';
        this._moveCount++;
        this.check();
        return true;
    }

    check(){
        let winningMovesList:number[][]=[
            //rows
            [0,1,2],
            [3,4,5],
            [6,7,8],

            //columns
            [0,3,6],
            [1,4,7],
            [2,5,8],

            //diagnol
            [0,4,8],
            [2,4,6]
        ]
        for(let winningMoves of winningMovesList){
            //winningMoves is an array of 3 number
            let [a,b,c] = winningMoves; //array destructuring

            let cells=this._cells;

            if(cells[a]!=='' && cells[a]===cells[b] && cells[a]===cells[c]){
                this._winner=cells[a];
                this._winningMoves=winningMoves;
                return winningMoves;            
            }
        }
        return null;
    }

}