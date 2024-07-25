import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import styles from './Navbar.module.css';  
import UserIcon from '../../svgs/userIcon';
import ExitIcon from '../../svgs/exitIcon';

const Navbar = () => {
  return (
    <AppBar position="fixed" className={styles.navbar}>
      <Toolbar className={styles.toolbar}>
        <div className={styles.logo}>PanelO</div>
        <div className={styles.icons}>
            <UserIcon/>

            <ExitIcon />

        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
