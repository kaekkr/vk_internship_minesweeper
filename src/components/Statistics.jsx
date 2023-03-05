import { useEffect, useState } from "react";
const Statistics = ({
  numberOfFlags,
  isGameRunning,
  smileClick,
  game,
  temp,
  time,
  setTime,
}) => {

  useEffect(() => {
    const incrementTime = () => {
      setTimeout(() => {
        let newTime = time + 1;
        setTime(newTime);
      }, 1000);
    };
    if (temp) incrementTime();
  }, [temp, time]);

  return (
    <figure className="flex justify-between items-center w-1/4 border p-2">
      <figure className="flex">
        <img src="0.jpg" alt="" />
        <img src={`${Math.floor((40 - numberOfFlags) / 10)}.jpg`} alt="" />
        <img src={`${(40 - numberOfFlags) % 10}.jpg`} alt="" />
      </figure>
      <button onClick={() => smileClick()}>
        <img
          src={
            game === 1
              ? "smile_dead.jpg"
              : game === 2
              ? "smile_cool.jpg"
              : game === 3
              ? "smile_suprised.jpg"
              : "smile.jpg"
          }
          alt=""
        />
      </button>
      <figure className="flex">
        <img src={`${Math.floor(time / 100)}.jpg`} alt="" />
        <img src={`${Math.floor(time / 10)}.jpg`} alt="" />
        <img src={`${time % 10}.jpg`} alt="" />
      </figure>
    </figure>
  );
};

export default Statistics;
