import React, { Component } from 'react'
import Board from './Board/board'
import './game.css'

class Game extends Component {
  constructor(props){
    super(props)
      this.state = {
        winnerStatus : null,
        gameStatus : null,
        playBtn : false,
        playerTurn : true
      }
  }  
  playAgain(){
    this.setState({
      winnerStatus : null,
      gameStatus : null,
      playBtn : null,
      playerTurn : true
    })
  }

  gameWinner(turnValue){
    this.setState({
       winnerStatus : <span> { `Game Winner: ${turnValue}` }</span>,
       playBtn : true,
       playerTurn : false
      // playagain : <button onClick={()=>{this.playAgain()}} class = "playBtn" > Play Again </button>
    })
  }
  gamingStatus(){
    this.setState({
      gameStatus : `Match Drawn`,
      playBtn : true,
      playerTurn : false
     // playagain : <button onClick={()=>{this.playAgain()}} class = "playBtn" > Play Again </button>
    })
  }
  render() {
    return (
      <div class = "gameContainer">
        <Board playerTurn = {this.state.playerTurn} playBtn = {this.state.playBtn} playAgain = {()=>{this.playAgain()}} gamingStatus = {()=>{this.gamingStatus()}} winnerStatus = {this.state.winnerStatus}  gameWinner = {(turnValue)=>{this.gameWinner(turnValue)}} />
        <span class = "gameStatus" > {this.state.winnerStatus} </span>
        <span class = 'gameStatus' > {this.state.gameStatus}</span>
        <span class = 'gameStatus' > {this.state.playagain} </span>   
      </div>
    )
  }
}

export default Game