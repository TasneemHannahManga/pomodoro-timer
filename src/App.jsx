import Header from "./components/header";
import Footer from "./components/footer";
import backgrounds from "./backgrounds";
import { useState } from "react";
import "./main.css";
import Focus from "./pages/focus/focus";
import About from "./pages/about/About";

function App() {
  const [backgroundOrder, setBackground] = useState(0);
  const [isFullscreen, setFullscreen] = useState(false);
  var elem = document.documentElement;
  const [page, setPage] = useState(true);

  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }

  function toggleFullscreen() {
    setFullscreen(!isFullscreen);
    isFullscreen ? closeFullscreen() : openFullscreen();
  }

  function ChangeBackground() {
    backgroundOrder < 3 ? setBackground(backgroundOrder + 1) : setBackground(0);
  }

  function togglePage() {
    setPage(!page);
  }

  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url("${backgrounds[backgroundOrder].source}")`,
      }}
    >
      <Header
        toggleBackground={ChangeBackground}
        toggleFullscreen={toggleFullscreen}
        fullscreen={isFullscreen}
        page={page}
        togglePage={togglePage}
      />
      {page ? <Focus /> : <About />}
      <Footer
        attrributionLink={backgrounds[backgroundOrder].link}
        attributionText={backgrounds[backgroundOrder].attribution}
      />
    </div>
  );
}

export default App;
