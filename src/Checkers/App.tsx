import React, {useEffect, useState} from 'react';
import {Node} from './Common/Node'
import './App.css';
import CheckersNode from "./CheckersNode/CheckersNode";

function App() {
  const [board, setBoard] = useState<Node[][]>([]);

  useEffect(() => {
    setBoard(getInitialBoard);
  }, [])

  const createNode = (row: number, col: number, isBlackPiece: boolean, isWhitePiece: boolean, isActive: boolean) => {
    return {
      row: row,
      col: col,
      isActive: isActive,
      isBlackPiece: isBlackPiece,
      isWhitePiece: isWhitePiece,
    } as Node;
  }

  const getInitialBoard = () => {
    const board = [];
    let offset = 0;
    for (let row = 0; row < 8; row++) {
      offset++;
      const currentRow = [];
      for (let col = 0; col < 8; col++) {
        const isBlack = (col + offset) % 2 !== 0 && row < 3;
        const isWhite = (col + offset) % 2 !== 0 && row > 4;
        currentRow.push(createNode(row, col, isBlack, isWhite, false));
      }
      board.push(currentRow);
    }
    return board;
  }

  const nodes = board.map((row) => {
    return (
      <div className={"grid-row"}>
        {row.map((node, key) => {
          const {row, col, isActive, isWhitePiece, isBlackPiece} = node;
          return <CheckersNode row={row} col={col} isActive={isActive} isWhitePiece={isWhitePiece}
                               isBlackPiece={isBlackPiece}/>
        })}
      </div>
    )
  })

  return (
    <div id="app">
      <main className={'main'}>
        <div className={'board'}>
          {nodes}
        </div>
      </main>
    </div>
  );
}

export default App;
