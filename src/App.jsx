import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Jobs/>
      <AboutUs/>
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
