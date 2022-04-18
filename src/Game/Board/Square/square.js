import React, { Component } from 'react'
import './square.css'

export class Square extends Component {
  render() {
    return (
      <div >
        <button class = "sqrBtn" onClick={this.props.click} > {this.props.value} </button>
      </div>
    )
  }
}

export default Square

// className= {(this.props.buttonClicks % 2 == 0) ? "player1" : "player2"}