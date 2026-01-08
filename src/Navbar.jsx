import Logo from './logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-20 w-20 mr-2" />
        </div>
        <div>
          <Link to="/" className="text-white hover:text-gray-300 mx-2">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300 mx-2">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-300 mx-2">Contact</Link>
          <Link to="/airdrop" className="text-white hover:text-gray-300 mx-2">Airdrop</Link>
          <Link to="/whitepaper" className="text-white hover:text-gray-300 mx-2">Whitepaper</Link>
          <Link to="/staking" className="text-white hover:text-gray-300 mx-2">Staking</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;