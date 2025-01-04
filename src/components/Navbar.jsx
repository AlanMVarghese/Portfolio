//rafce
import logo from "../assets/logo.png";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaInstagramSquare,
} from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mt-1  mb-20 flex items-center justify-between py-6 lg:mt-5 lg:px-20">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="mx-4 lg:mx-8 flex items-center justify-center gap-4 text-2xl text-white ">
        <a
          href="https://www.linkedin.com/in/alan-mathew-varghese-06605b314/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AlanMVarghese"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/a.lan__.__"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
