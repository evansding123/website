import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },

  paper :{
    padding: 10,

    backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'row'
  },

  card: {
    width: 275,
    marginLeft: '5%',
    marginBottom: '5%',
    marginTop: '5%',
    padding: 10,
    backgroundColor: '#757de8',

  },

  header: {
    color: 'grey',
    fontWeight: 40
  },

  name: {

  }




}));

const Summary = (props) => {

  const classes = useStyles();


  return(
    <Container maxWidth="xl">
      <Typography className = {classes.header} align = 'left' variant = 'h2'>ABOUT ME</Typography>
      <Paper variant = 'outlined' className = {classes.paper}>
        <Card className = {classes.card}>
          <Typography className = {classes.name} variant = 'h4'>Evans Ding</Typography>
          <br></br>
          <Typography className = {classes.name} align = 'left'>&nbsp;&nbsp;&nbsp;&nbsp;Hello! I am a fullstack software engineer that specializes in backend apis as well as front end integration.</Typography>
        </Card>
        <Card className = {classes.card}>
          <Typography variant = 'h4'>Technologies</Typography>
          <br></br>
          <Typography align = 'justify'>{'Javascript (ES6+)'}</Typography>
          <Typography align = 'justify'>{'React.js'}</Typography>
        </Card>
      </Paper>
    </Container>
  )
}

export default Summary;