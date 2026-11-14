import { Link } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          ⚽ North Bengal Futsal Cup
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/matches" className="nav-link">
              Matches
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/standings" className="nav-link">
              Standings
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teams" className="nav-link">
              Teams
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/players" className="nav-link">
              Players
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tournament" className="nav-link">
              Tournament
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" className="nav-link">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
