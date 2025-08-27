import Timer from "./focus-components/Timer";
import Sounds from "./focus-components/Sounds";
import "./focus.css";

function Focus() {
  return (
    <>
      <div className="focus-container">
        <Timer />
        <Sounds />
      </div>
    </>
  );
}

export default Focus;
