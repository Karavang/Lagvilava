import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import EtajerkasList from "./components/EtajerkasList";
import Header from "./components/Header";
import Hero from "./components/Hero";
import History from "./components/History";
import ModalCallMe from "./components/ModalCallMe";
import loadingGIf from "./images/logo.gif";

function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isModal, setIsModal] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isModal ? "hidden" : "scroll";
  }, [isModal]);
  useEffect(() => {
    const fakePageLoad = setTimeout(() => {
      setIsPageLoaded(true);
    }, 2000);
    return () => clearTimeout(fakePageLoad);
  }, []);
  return isPageLoaded ? (
    <>
      {isModal && <ModalCallMe setIsModal={setIsModal} />}
      <div className="header-hero-back">
        <Header />
        <Hero setIsModal={setIsModal} />
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
