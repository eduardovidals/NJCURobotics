import React from 'react';
import './CheckersNode.css';
import {Node} from "../Common/Node";
import Draggable from 'react-draggable';

interface Props extends Node {
  row: number,
  col: number,
  isBlackPiece: boolean,
  isWhitePiece: boolean
}

function CheckersNode(props: Props) {
  const {row, col, isBlackPiece, isWhitePiece} = props;
  const offset = row % 2 === 0 ? 1 : 0;
  const expr = (col + offset) % 2 !== 0;
  return (
    <div className={`tile ${expr ? 'tile-black' : 'tile-white'}`}>
      {
        <Draggable>
          <div className={isBlackPiece ? 'black-piece' : isWhitePiece ? 'white-piece' : ''}/>
        </Draggable>
      }
    </div>
  )
}

export default CheckersNode;
