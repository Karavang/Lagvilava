import { useEffect, useState } from "react";
import "../index.css";
import EtajerkasList from "./components/EtajerkasList";
import Header from "./components/Header";
import Hero from "./components/Hero";
import History from "./components/History";
import loadingGIf from "./images/logo.gif";

function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const fakePageLoad = setTimeout(() => {
      setIsPageLoaded(true);
    }, 2000);
    return () => clearTimeout(fakePageLoad);
  }, []);
  return isPageLoaded ? (
    <>
      <div className="header-hero-back">
        <Header />
        <Hero />
      </div>
      <EtajerkasList />
      <History />
    </>
  ) : (
    <div className="loading-back">
      <img
        src={loadingGIf}
        alt=""
      />
      <h1 className="main-title">Lagvilava</h1>
    </div>
  );
}

export default App;
