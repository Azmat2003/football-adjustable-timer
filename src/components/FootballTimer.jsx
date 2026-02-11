import { useState, useEffect } from "react";
import "../styles/footballTimer.css";
import Copyright from "./Copyright";

function FootballTimer() {
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTotalSeconds((prev) => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const handleReset = () => {
        setIsRunning(false);
        setTotalSeconds(0);
    };


    const [showAdjust, setShowAdjust] = useState(false);
    const [inputMin, setInputMin] = useState(0);
    const [inputSec, setInputSec] = useState(0);



    return (
  <div className="page-wrapper">
    <div className="timer-container">
      <div className="timer-box">
        <div className="time-display">
          {minutes} : {seconds}
        </div>

        <div className="controls">
          <button
            className="primary"
            onClick={() => setIsRunning((prev) => !prev)}
          >
            {isRunning ? "Pause" : "Start"}
          </button>

          <button onClick={handleReset}>Reset</button>

          <div className="adjust-wrapper">
            <button
              onClick={() => {
                setIsRunning(false);
                setShowAdjust((prev) => !prev);
              }}
            >
              Adjust
            </button>

            {showAdjust && (
              <div className="adjust-panel">
                <input
                  type="number"
                  min="0"
                  max="200"
                  placeholder="Minutes"
                  value={inputMin}
                  onChange={(e) => setInputMin(e.target.value)}
                />

                <input
                  type="number"
                  min="0"
                  max="59"
                  placeholder="Seconds"
                  value={inputSec}
                  onChange={(e) => setInputSec(e.target.value)}
                />

                <button
                  className="primary"
                  onClick={() => {
                    const min = Number(inputMin);
                    const sec = Number(inputSec);

                    if (min < 0 || min > 200 || sec < 0 || sec > 59) return;

                    setTotalSeconds(min * 60 + sec);
                    setShowAdjust(false);
                    setIsRunning(true);
                  }}
                >
                  Set
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    <Copyright />
  </div>
);

}

export default FootballTimer;
