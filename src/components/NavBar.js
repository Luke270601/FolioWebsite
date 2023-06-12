import { Link } from 'react-router-dom';
import '../css/Navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Contact</Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects" className="navbar-link">Projects</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
