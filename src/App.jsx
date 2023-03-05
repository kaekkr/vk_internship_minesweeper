import { useState } from "react";
import GameField from "./components/GameField";
import Statistics from "./components/Statistics";

const App = () => {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [numberOfFlags, setNumberOfFlags] = useState(0);
  const [game, setGame] = useState(0);
  const [temp, setTemp] = useState(false);
  const [time, setTime] = useState(0);


  const smileClick = () => {
    setIsGameRunning((prevState) => !prevState);
    setGame(0);
    setNumberOfFlags(0);
    setTemp(false); 
    setTime(0); 
  };

  return (
    <div className="bg-blue-500 h-screen w-screen flex items-center">
      <div className="bg-[#bdbdbd] p-5 flex flex-col items-center space-y-5">
        <Statistics
          numberOfFlags={numberOfFlags}
          isGameRunning={isGameRunning}
          isTimerRunning={isTimerRunning}
          smileClick={smileClick}
          game={game}
          temp={temp}
          time={time} 
          setTime={setTime}
        />
        <GameField
          isGameRunning={isGameRunning}
          setNumberOfFlags={setNumberOfFlags}
          numberOfFlags={numberOfFlags}
          game={game}
          setGame={setGame}
          temp={temp}
          setTemp={setTemp}
        />
      </div>
    </div>
  );
};

export default App;
