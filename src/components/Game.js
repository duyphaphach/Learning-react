import * as React from "react";
import Board from "./Board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      turnX: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares;

    // Check if this square is checked or already had a winner
    if (squares[i] || this.calculateWinner(squares)) {
      return;
    }
    // Copy present board state
    const newSquares = squares.slice(0);
    // Update new board state
    newSquares[i] = this.state.turnX ? 'X' : 'O';
    // Update history and turn
    this.setState({
      history: history.concat({
        squares: newSquares,
      }),
      stepNumber: history.length,
      turnX: !this.state.turnX
    });
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  jumpTo (move) {
    this.setState({
      stepNumber: move,
      turnX: (move % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const squares = current.squares;

    // Show winner
    const winner = this.calculateWinner(squares);

    // Show moves
    const moves = history.map((step, move) => {
      const text = move ? 'Go to move #' + move : 'Back to start';
      return (
        <li key={move}>
          <button className='time-travel' onClick={() => {
            this.jumpTo(move)
          }}>{text}</button>
        </li>
      )
    });


    const status = (winner) => {
      if (winner) {
        return (
          <div className="status">{'Winner: ' + winner}</div>
        );
      } else {
        return (
          <div className="status">{'Next player: ' + (this.state.turnX ? 'X' : 'O')}</div>
        )
      }
    };

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={squares} handleClick={this.handleClick}/>
        </div>
        <div className="game-info">
          {status(winner)}
          {moves}
        </div>
      </div>
    )
  }
}

export default Game;
