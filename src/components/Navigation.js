import { Link } from 'react-router-dom';
import './styles/Navigation.css';

function Navigation() {
  return (
    <ul className="nav-bar">
      <li className="subject">
        <Link to="/" />
      </li>
      <li>
        <Link to="/screeners" />
      </li>
      <li />
    </ul>
  );
}

export default Navigation;
