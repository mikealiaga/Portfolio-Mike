import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; 
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Footer from "./components/footer"
import "./App.css";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full "> {/* Ensure content starts below navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <div className="full">
        <Footer />
      </div>
    </div>
  );
}

export default App;