import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link from React Router
import "../styles/colors.css"; 
import "../styles/navbarStyles.css";

export default function Footer() {
  return (
    <footer className="black2-bg py-12 px-16 w-full">
      
      {/* Navigation Links */}
      <div className="flex space-x-6 mb-8">
        <Link to="/" className="grey-txt text-lg">Projects</Link>
        <Link to="/portfolio" className="grey-txt text-lg">Portfolio</Link>
        <Link to="/about" className="grey-txt text-lg">About Me</Link>
        <Link to="/contact" className="grey-txt text-lg">Contact</Link>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center space-x-8">
        {/* GitHub */}
        <a href="https://github.com/mikealiaga" className="flex items-center space-x-2 grey-txt" target="_blank" rel="noopener noreferrer">
          <FaGithub size={48} />
          <span className="text-4xl">GitHub</span>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/miguel-aliaga-torres/" className="flex items-center space-x-2 grey-txt" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={48} />
          <span className="text-4xl">LinkedIn</span>
        </a>
      </div>
    </footer>
  );
}