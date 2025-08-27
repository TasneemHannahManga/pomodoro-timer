import "./about.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

function About() {
  return (
    <>
      <div className="about-container">
        <h1>About</h1>
        <section>
          <h2>Pomodoro</h2>
          <p>
            The Pomodoro Technique helps you to stay productive by working in
            short, focused bursts followed by regular breaks. You commit to one
            task, stay fully engaged, then pause to recharge- repeating the
            cycle until the work feels less overwhelming and more doable.
          </p>
        </section>
        <section>
          <button className="support-button">Support My Work</button>
          <div className="social-links">
            <a aria-label="Click to access our Facebook page." href="#">
              <FacebookIcon htmlColor="white" fontSize="large" />
            </a>
            <a aria-label="Click to access our X page." href="#">
              <XIcon htmlColor="white" fontSize="large" />
            </a>
            <a aria-label="Click to access our YouTube page." href="#">
              <YouTubeIcon htmlColor="white" fontSize="large" />
            </a>
            <a aria-label="Click to access our Instagram page." href="#">
              <InstagramIcon htmlColor="white" fontSize="large" />
            </a>
            <a aria-label="Click to access our Pinterest page." href="#">
              <PinterestIcon htmlColor="white" fontSize="large" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
