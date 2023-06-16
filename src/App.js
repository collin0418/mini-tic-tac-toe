import React, { useState } from 'react';
import './App.css';
import Square from './Square';

function App() {
  const[squares,setSquare] =useState(Array(9).fill(null));

  function handleClick(i){
    const nextSquares = squares.slice();
    nextSquares[i]="X";
    setSquare(nextSquares);
  }

  return (
<>
<div className='board-row'>
  <Square value={squares[0]} onClickSqure={() =>handleClick(0)}/>
  <Square value={squares[1]} onClickSqure={() =>handleClick(1)}/>
  <Square value={squares[2]} onClickSqure={() =>handleClick(2)}/>
</div>
<div className='board-row'>
  <Square value={squares[3]} onClickSqure={() =>handleClick(3)}/>
  <Square value={squares[4]} onClickSqure={() =>handleClick(4)}/>
  <Square value={squares[5]} onClickSqure={() =>handleClick(5)}/>
</div>
<div className='board-row'>
  <Square value={squares[6]} onClickSqure={() =>handleClick(6)}/>
  <Square value={squares[7]} onClickSqure={() =>handleClick(7)}/>
  <Square value={squares[8]} onClickSqure={() =>handleClick(8)}/>
</div>
</> 
);     
}

export default App;
