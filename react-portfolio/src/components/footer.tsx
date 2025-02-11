import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/colors.css"; // Ensure colors.css is correctly imported

export default function Footer() {
  return (
    <footer className="black2-bg py-12 px-16">
      {/* Navigation Links */}
      <div className="flex space-x-6 mb-8">
        <a href="#" className="grey-txt text-lg">Projects</a>
        <a href="#" className="grey-txt text-lg">Portfolio</a>
        <a href="#" className="grey-txt text-lg">About Me</a>
        <a href="#" className="grey-txt text-lg">Contact</a>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center space-x-8">
        {/* GitHub */}
        <a href="https://github.com/yourprofile" className="flex items-center space-x-2 grey-txt">
          <FaGithub size={48} />
          <span className="text-4xl">GitHub</span>
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/yourprofile" className="flex items-center space-x-2 grey-txt">
          <FaLinkedin size={48} />
          <span className="text-4xl">LinkedIn</span>
        </a>
      </div>
    </footer>
  );
}