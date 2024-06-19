import React from "react";
import { GoGoal, GoPlay } from "react-icons/go";
import "./node.css";

const Node = (props) => {
  const {
    row,
    col,
    isStart,
    isFinish,
    isWall,
    isVisited,
    isShortest,
    onMouseEnter,
    onMouseDown,
    onMouseUp,
    width,
    height,
    numRows,
    numColumns,
  } = props;

  const extraClass = isStart
    ? "node-start"
    : isFinish
    ? "node-finish"
    : isWall
    ? "node-wall"
    : isShortest
    ? "node-shortest-path"
    : isVisited
    ? "node-visited"
    : "";

  let cellWidth = Math.floor((width - 15) / numColumns);
  let cellHeight;
  if (width > 1500) {
    cellHeight = Math.floor((height - 70) / numRows);
  } else if (width > 1000) {
    cellHeight = Math.floor((height - 70) / numRows);
  } else if (width > 500) {
    cellHeight = Math.floor((height - 60) / numRows);
  } else if (width > 0) {
    cellHeight = Math.floor((height - 50) / numRows);
  }

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClass}`}
      style={{ "--width": `${cellWidth}px`, "--height": `${cellHeight}px` }}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseUp={() => onMouseUp()}
    >
      {isStart && <GoPlay className="icon-start text-lg" />}
      {isFinish && <GoGoal className="icon-finish text-lg" />}
    </div>
  );
};

export default Node;
