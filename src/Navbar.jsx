import Logo from './logo.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-green-600">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-20 w-20 mr-2" />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
          <Link to="/airdrop" className="text-white hover:text-gray-300">Airdrop</Link>
          <Link to="/whitepaper" className="text-white hover:text-gray-300">Whitepaper</Link>
          <Link to="/staking" className="text-white hover:text-gray-300">Staking</Link>
        </div>
      </div>

      {/* Mobile menu (conditionally rendered) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-700 pb-4">
          <div className="flex flex-col items-center space-y-2">
            <Link to="/" className="text-white hover:text-gray-300" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/about" className="text-white hover:text-gray-300" onClick={toggleMobileMenu}>About</Link>
            <Link to="/contact" className="text-white hover:text-gray-300" onClick={toggleMobileMenu}>Contact</Link>
            <Link to="/airdrop" className="text-white hover:text-gray-300" onClick={toggleMobileMenu}>Airdrop</Link>
            <Link to="/whitepaper" className="text-white hover:text-gray-300" onClick={toggleMobileMenu}>Whitepaper</Link>
            <Link to="/staking" className="text-white hover:text-gray-300" onClick={toggleMobileMenu}>Staking</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;