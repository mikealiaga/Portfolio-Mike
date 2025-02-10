import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; 
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import "./App.css";

function App() {
  return (
    <>
      <main className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
    </>
  );
}

export default App;