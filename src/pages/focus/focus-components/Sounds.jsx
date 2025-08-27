import { useRef } from "react";
import sounds from "../../../sounds";
import "../focus.css";

function Sounds() {
  const fire = useRef(new Audio(sounds[0].source));
  const rain = useRef(new Audio(sounds[1].source));
  const thunder = useRef(new Audio(sounds[2].source));

  const currentAudio = useRef(null);

  function playAudio(event) {
    const selected = event.target.value;

    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }

    switch (selected) {
      case "fire":
        fire.current.play();
        currentAudio.current = fire.current;
        break;
      case "rain":
        rain.current.play();
        currentAudio.current = rain.current;
        break;
      case "thunder":
        thunder.current.play();
        currentAudio.current = thunder.current;
        break;

      default:
        currentAudio.current = null;
        break;
    }
  }
  return (
    <>
      <select onChange={playAudio}>
        <option value="">- Select Soundtrack -</option>
        <option value="fire">Cracking Fire</option>
        <option value="rain">Heavy Rainfall</option>
        <option value="thunder">Thunder Shower</option>
      </select>
    </>
  );
}

export default Sounds;
