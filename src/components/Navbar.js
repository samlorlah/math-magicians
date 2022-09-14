import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2 className="Logo">Math Magician</h2>
      <ul>
        <li>
          <NavLink end activeClassName="active" style={{ textDecoration: 'none', color: '#fff' }} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" style={{ textDecoration: 'none', color: '#fff' }} to="/calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" style={{ textDecoration: 'none', color: '#fff' }} to="/quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
