import { useEffect, useState } from "react";
import createGameField from "../utilities/createGameField";
import { marked } from "../utilities/mark";
import SingleField from "./SingleField";

const GameField = ({
  isGameRunning,
  setNumberOfFlags,
  numberOfFlags,
  game,
  setGame,
  temp,
  setTemp,
}) => {
  const [grid, setGrid] = useState([]);
  const [nonBombCount, setNonBombCount] = useState(0);
  const [bombsLocation, SetBombsLocation] = useState([]);

  useEffect(() => {
    const gameField = () => {
      const newGameField = createGameField();
      setNonBombCount(16 * 16 - 40);
      SetBombsLocation(newGameField.bombsLocation);
      setGrid(newGameField.gameField);
    };
    gameField();
  }, [isGameRunning]);

  const mouseDown = () => {
    setGame(3);
  };

  const mouseUp = () => {
    setGame(0);
  };

  const leftClick = (r, c) => {
    if (!temp) setTemp(true); 
    if (grid[r][c].marked || game === 1) return;
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[r][c].value === 1000) {
      for (let i = 0; i < bombsLocation.length; i++) {
        newGrid[bombsLocation[i][0]][bombsLocation[i][1]].marked = true;
      }
      newGrid[r][c].redBomb = true;
      setGrid(newGrid);
      setGame(1);
      setTemp(false); 
    } else {
      let newMarkedGameField = marked(newGrid, r, c, nonBombCount);
      setGrid(newMarkedGameField.arr);
      setNonBombCount(newMarkedGameField.newNonBombCount);
      if (newMarkedGameField.newNonBombCount === 0) {
        setGame(2);
        setTemp(false); 
      }
    }
  };

  const rightClick = (e, r, c) => {
    e.preventDefault();
    if (grid[r][c].flagged === 1) {
      let newGrid = JSON.parse(JSON.stringify(grid));
      newGrid[r][c].flagged = 2;
      setGrid(newGrid);
    } else if (grid[r][c].flagged === 0) {
      let newGrid = JSON.parse(JSON.stringify(grid));
      newGrid[r][c].flagged = 1;
      setGrid(newGrid);
      if (numberOfFlags < 40) {
        setNumberOfFlags((numberOfFlags) => numberOfFlags + 1);
      }
    } else if (grid[r][c].flagged === 2) {
      let newGrid = JSON.parse(JSON.stringify(grid));
      newGrid[r][c].flagged = 0;
      setGrid(newGrid);
      if (numberOfFlags < 40) {
        setNumberOfFlags((numberOfFlags) => numberOfFlags - 1);
      }
    }
  };

  return (
    <div className="flex flex-row w-1/4 border">
      {grid.map((row, idx) => {
        return (
          <div key={idx}>
            {row.map((col, idx) => {
              return (
                <SingleField
                  key={idx}
                  leftClick={leftClick}
                  rightClick={rightClick}
                  details={col}
                  mouseDown={mouseDown}
                  mouseUp={mouseUp}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GameField;
