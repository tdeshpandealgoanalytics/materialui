// src/pages/AnotherPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    list: {
      width: 200,
    },
  });
  
const AnotherPage = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="app">
      {/* Hamburger Button to Toggle Drawer */}
      <button className="hamburger" onClick={handleDrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
      </button>

      {/* Drawer-like Navbar on the Left */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <div className={classes.list}>
          <List>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemText primary="About" />
              </ListItem>
            </Link>
            {/* Add more menu items as needed */}
          </List>
        </div>
      </Drawer>

      {/* Content */}
      <div className="content">
        <h1>Another Page</h1>
        <p>Hello, this is Another Page.</p>
      </div>
    </div>
  );
};

export default AnotherPage;
