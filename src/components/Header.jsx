import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import TimerIcon from "@mui/icons-material/Timer";
import "./components.css";

function Header(props) {
  return (
    <header>
      <nav>
        {props.page ? (
          <button
            onClick={props.togglePage}
            aria-label="Go to more information"
            aria-hidden={props.page ? "false" : "true"}
          >
            <ReadMoreIcon htmlColor="white" />
          </button>
        ) : (
          <button
            onClick={props.togglePage}
            aria-label="Go to focus page"
            aria-hidden={props.page ? "true" : "false"}
          >
            <TimerIcon htmlColor="white" />
          </button>
        )}
        <button
          onClick={props.toggleBackground}
          aria-label="Change background picture"
        >
          <WallpaperIcon htmlColor="white" />
        </button>
        {props.fullscreen ? (
          <button
            onClick={props.toggleFullscreen}
            aria-label="Exit full screen"
            aria-hidden={props.fullscreen ? "true" : "false"}
          >
            <FullscreenExitIcon htmlColor="white" />
          </button>
        ) : (
          <button
            onClick={props.toggleFullscreen}
            aria-label="Enter full screen"
            aria-hidden={props.fullscreen ? "false" : "true"}
          >
            <FullscreenIcon htmlColor="white" />
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
