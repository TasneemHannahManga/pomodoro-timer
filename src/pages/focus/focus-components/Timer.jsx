import { useEffect, useState } from "react";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import "../focus.css";

function Timer() {
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [timerIsRunning, setTimerRunning] = useState(false);
  const beep = new Audio("audios/beep.mp3");

  function startTimer() {
    setTimerRunning(true);
  }

  function stopTimer() {
    setTimerRunning(false);
  }

  function resetTimer() {
    setTimerRunning(false);
    setTimeRemaining(60);
  }

  function increaseTime() {
    setTimeRemaining(timeRemaining < 30 * 60 ? timeRemaining + 60 : 30 * 60);
  }

  function decreaseTime() {
    setTimeRemaining(timeRemaining > 2 * 60 ? timeRemaining - 60 : 60);
  }

  useEffect(() => {
    let intervalId;

    if (timerIsRunning) {
      intervalId = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timerIsRunning, timeRemaining]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimerRunning(false);
      beep.play();
    }
  }, [timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = Math.floor(timeRemaining % 60);

  return (
    <>
      <div className="timer-container">
        <p role="timer">
          {minutes == 0 ? "00" : minutes}:{seconds == 0 ? "00" : seconds}
        </p>
        {timerIsRunning ? null : (
          <div aria-expanded={timerIsRunning ? "false" : "true"}>
            <button
              onClick={decreaseTime}
              aria-label="Click to decrease time."
              className="button sm-button"
            >
              <RemoveCircleIcon htmlColor="white" />
            </button>
            <button
              onClick={increaseTime}
              aria-label="Click to increase time."
              className="button sm-button"
            >
              <AddCircleIcon htmlColor="white" />
            </button>
          </div>
        )}
      </div>
      <div className="timer-controls">
        {timerIsRunning ? (
          <button
            onClick={stopTimer}
            aria-hidden={timerIsRunning ? "false" : "true"}
            className="button lg-button"
            aria-label="Click to pause timer."
          >
            <PauseIcon fontSize="large" htmlColor="white" />
          </button>
        ) : (
          <button
            onClick={startTimer}
            aria-hidden={timerIsRunning ? "true" : "false"}
            className="button lg-button"
            aria-label="Click to resume or start timer."
          >
            <PlayArrowIcon htmlColor="white" fontSize="large" />
          </button>
        )}
        <button
          onClick={resetTimer}
          className="button lg-button"
          aria-label="Click to restart timer."
        >
          <RestartAltIcon htmlColor="white" fontSize="large" />
        </button>
      </div>
    </>
  );
}

export default Timer;
