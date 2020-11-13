import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../public/static/ph-logo.png';
import '../../styles/components/layout/navbar.scss';

const Navbar = () => {
  const history = useHistory();
  return (
    <nav className="navContainer">
      <img src={logo} alt="Logo" onClick={() => history.push('/')} />
    </nav>
  );
};

export default Navbar;
