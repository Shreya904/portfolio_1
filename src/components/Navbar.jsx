import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="mx-auto flex justify-between items-center w-full">
        <h1 className="text-white text-2xl">Welcome to My Portfolio</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} md:flex md:items-center`}
        >
          <Link to="/" className="text-white block md:inline-block mr-4">
            Home
          </Link>
          <Link
            to="/projects"
            className="text-white block md:inline-block mr-4"
          >
            Projects
          </Link>
          <Link to="/about" className="text-white block md:inline-block mr-4">
            About
          </Link>
          <Link to="/contact" className="text-white block md:inline-block">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
