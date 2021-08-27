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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // "& header" : {
    //   justifyContent: 'flex-end',
    //   flexDirection: 'row'
    // }
  },

  appbar: {
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  toolbar: {
    left: "auto",
    "& div" : {
      marginLeft: 5
    }
  }
}));



const Navbar = (props) => {

  const classes = useStyles();


  return(
    <div className = {classes.root}>
      <AppBar className = {classes.appbar} position = 'fixed'>
        <Toolbar className = {classes.toolbar}>
          <Button>About</Button>
          <Button>Experience</Button>
          <Button>Works</Button>
          <Button>Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;