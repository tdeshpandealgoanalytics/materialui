import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

const CustomDrawer = ({ open, onClose }) => {
  const handleDrawerClose = () => {
    onClose(false);
  };

  const StyledList = styled('div')({
    width: 200,
  });

  return (
    <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
      <StyledList>
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
          <Link to="/cards" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemText primary="Cards" />
            </ListItem>
          </Link>
        </List>
      </StyledList>
    </Drawer>
  );
};

export default CustomDrawer;
