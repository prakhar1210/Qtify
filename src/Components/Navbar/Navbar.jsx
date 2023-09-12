import React from 'react'
import Logo from '../../assets/logoImage.png';
import style from '../Navbar/Navbar.module.css';
import Button from './Button/Button';

const Navbar = () => {
  return (
    <nav style={style.navbar}>
        <Logo />

        <Button />
    </nav>
  )
}

export default Navbar
