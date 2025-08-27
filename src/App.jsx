import Header from "./components/Header";
import Footer from "./components/Footer";
import backgrounds from "./backgrounds";
import { useState, useEffect } from "react";
import "./main.css";
import Focus from "./pages/focus/Focus";
import About from "./pages/about/About";
function App() {
  const [backgroundOrder, setBackground] = useState(0);
  const [isFullscreen, setFullscreen] = useState(false);
  const elem = document.documentElement;
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
    setBackground((backgroundOrder + 1) % backgrounds.length);
  }

  function togglePage() {
    setPage(!page);
  }

  useEffect(() => {
    const img = new Image();
    img.src = backgrounds[backgroundOrder].source;
  }, [backgroundOrder]);

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
        attributionLink={backgrounds[backgroundOrder].link}
        attributionText={backgrounds[backgroundOrder].attribution}
      />
    </div>
  );
}

export default App;
