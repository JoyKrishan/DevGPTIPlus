import React, { useState, useEffect } from "react";

function Timer({ update }) {
  const [elapsedTime, setElapsedTime] = useState(0);

  const refreshTimer = () => {
    setElapsedTime((elapsedTime) => {
      update(elapsedTime);
      return elapsedTime + 1;
    });
  };

  useEffect(() => {
    const timerId = setInterval(refreshTimer, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div
      className="bg-slate-200 rounded flex flex-row w-24 justify-center
    font-semibold cursor-default"
    >
      <p>
        {Math.floor((elapsedTime / (60 * 60)) % 24) > 0
          ? Math.floor((elapsedTime / (60 * 60)) % 24) + ":"
          : ""}
      </p>
      <p>
        {Math.floor((elapsedTime / 60) % 60) < 10
          ? "0" + Math.floor((elapsedTime / 60) % 60)
          : Math.floor((elapsedTime / 60) % 60)}
        :
      </p>
      <p>
        {Math.floor(elapsedTime % 60) < 10
          ? "0" + Math.floor(elapsedTime % 60)
          : Math.floor(elapsedTime % 60)}
      </p>
    </div>
  );
}