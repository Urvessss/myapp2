import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar({user}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        {user && <React.Fragment>
          <li className="nav-item">
          <NavLink className="nav-link" to="/movies">Movie</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">{user.name}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
          </React.Fragment>}
        
        {!user &&
        <React.Fragment>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
        </React.Fragment>
        }
        
        
      </ul>
</nav>
  );
}

export default Navbar;