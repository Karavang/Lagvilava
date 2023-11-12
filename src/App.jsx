import "../index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import History from "./components/History";

function App() {
  return (
    <>
      <div className="header-hero-back">
        <Header />
        <Hero />
      </div>
      <History />
      <Footer />
    </>
  );
}

export default App;
