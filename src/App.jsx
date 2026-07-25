import { useEffect, useState } from "react";

import Home from "./pages/Home";

import Loader from "./components/Loader/Loader";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Cursor from "./components/Cursor/Cursor";
import MouseGlow from "./components/MouseGlow/MouseGlow";

import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Loader
  if (loading) {
    return <Loader />;
  }

  // Main App
  return (
    <>
      <Cursor />
      <MouseGlow />
      <ScrollProgress />
      <Home />
    </>
  );
}

export default App;