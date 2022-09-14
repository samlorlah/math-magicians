import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2 className="Logo">Math Magician</h2>
      <ul>
        <li>
          <Link style={{ textDecoration: 'none', color: '#fff' }} to="/">Home</Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: '#fff' }} to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: '#fff' }} to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
