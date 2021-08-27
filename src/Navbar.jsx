import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const Navbar = (props) => {
  return(
    <div>
      <AppBar position = 'static'>
        <Toolbar>
          <div>About</div>
          <div>Experience</div>
          <div>Works</div>
          <div>Contact</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;