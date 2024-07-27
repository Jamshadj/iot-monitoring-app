import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import styles from './Navbar.module.css';  
import UserIcon from '../../svgs/userIcon';
import ExitIcon from '../../svgs/exitIcon';

const Navbar = () => {
  const navigate = useNavigate(); 

  const handleUserIconClick = () => {
    navigate('/user-details');
  };

  const handleExitIconClick = () => {
    window.location.href = 'https://www.estrotech.in/'; 
  };

  return (
    <AppBar position="fixed" className={styles.navbar}>
      <Toolbar className={styles.toolbar}>
        <div className={styles.logo}>PanelO</div>
        <div className={styles.icons}>
          <div onClick={handleUserIconClick} className={styles.icon}>
            <UserIcon /> 
          </div>
          <div onClick={handleExitIconClick} className={styles.icon}>
            <ExitIcon />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
