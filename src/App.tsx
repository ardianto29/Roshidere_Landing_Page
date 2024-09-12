import { useEffect } from "react";
import Home from "./pages/Home";
import Lenis from "lenis";
import "remixicon/fonts/remixicon.css";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //     console.log(e);
    // });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <Home />;
}

export default App;
