import React, { Component } from 'react'
import Square from './Square/square'
import './board.css'

class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      squares : Array(9).fill(null),
      turn : "X",
      status : "X",
      buttonClicks : 0
    }
  }

  changeState(){
    this.setState({
      squares : Array(9).fill(null),
      turn : "X",
      status : "X",
      buttonClicks : 0
    })
  }

  handleClick(i){
    const newSquare = this.state.squares.slice();
    
  if(this.props.winnerStatus == null){
    if(newSquare[i] == null){
      console.log("button clicked", i); 
      if(this.state.turn == "X"){  
          newSquare[i] = "X"
          this.setState({
            turn : "O",
            status : "O",
            buttonClicks : this.state.buttonClicks + 1
          })
      }else{
          newSquare[i] = "O"
          this.setState({
            turn : "X",
            status : "X",
            buttonClicks : this.state.buttonClicks + 1
          })
      }
      this.setState({
            squares : newSquare
      })
    this.callWinner()
    this.forceUpdate(this.callWinner)
     } else {
       alert("Can't update already filled blocks")
     }
  } else {
    alert("game winner already declared")
  }
  }
  callWinner(){
    let turnValue;
     (this.state.turn == "O") ?  turnValue = "X" :turnValue = "O"
     
      if(this.state.squares[0] == this.state.squares[1] && this.state.squares[1] == this.state.squares[2] && this.state.squares[2] !== null){
       this.props.gameWinner(turnValue)
      } 
      else if(this.state.squares[3] == this.state.squares[4] && this.state.squares[4] == this.state.squares[5] && this.state.squares[5] !== null){ 
        this.props.gameWinner(turnValue)
       }
       else if(this.state.squares[6] == this.state.squares[7] && this.state.squares[7] == this.state.squares[8] && this.state.squares[8] !== null){
        this.props.gameWinner(turnValue)
       }
       else if(this.state.squares[0] == this.state.squares[3] && this.state.squares[3] == this.state.squares[6] && this.state.squares[6] !== null){
        this.props.gameWinner(turnValue)
       }
       else if(this.state.squares[1] == this.state.squares[4] && this.state.squares[4] == this.state.squares[7] && this.state.squares[7] !== null){ 
        this.props.gameWinner(turnValue)
       }
       else if(this.state.squares[2] == this.state.squares[5] && this.state.squares[5] == this.state.squares[8] && this.state.squares[8] !== null){
        this.props.gameWinner(turnValue)
       }
       else if(this.state.squares[0] == this.state.squares[4] && this.state.squares[4] == this.state.squares[8] && this.state.squares[8] !== null){
        this.props.gameWinner(turnValue)
       }
       else if(this.state.squares[2] == this.state.squares[4] && this.state.squares[4] == this.state.squares[6] && this.state.squares[6] !== null){
        this.props.gameWinner(turnValue)
       }
        else if(this.state.buttonClicks == 9){
          this.props.gamingStatus();
       }
  }
  createSquare(i){
    return <Square buttonClicks = {this.state.buttonClicks}  click = {() => {this.handleClick(i)}} value = {this.state.squares[i]} />
  }
  render() {
    return (
     <div class="boardContainer">
       <h1> Tic Tac Toe</h1>
        {(this.props.playerTurn) ? <span class = "nextPlayer" > Player Turn : {this.state.status} </span>: null }
        {(this.props.playBtn) ? <h2>Game Over</h2> : null }
         <table>
           <tbody>
             <tr>
               <td>{this.createSquare(0)}</td>
               <td>{this.createSquare(1)}</td>
               <td>{this.createSquare(2)}</td>
             </tr>
             <tr>
               <td>{this.createSquare(3)}</td>
               <td>{this.createSquare(4)}</td>
               <td>{this.createSquare(5)}</td>
             </tr>
             <tr>
               <td>{this.createSquare(6)}</td>
               <td>{this.createSquare(7)}</td>
               <td>{this.createSquare(8)}</td>
             </tr>
           </tbody>
         </table>
          {this.props.playBtn ? <button  onClick={()=>{this.changeState(); this.props.playAgain()}} class = "playbtn" >Play agian</button>: null } 
     </div>
         
    )
  }
}

export default Board