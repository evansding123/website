import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

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
    minwidth: 275,
    marginLeft: '5%',
    marginBottom: '5%',
    marginTop: '5%',
    padding: 10,
    backgroundColor: '#757de8',

  },

  header: {
    color: 'grey',
    fontWeight: 40
  }




}));

const Projects = (props) => {

  const classes = useStyles();


  return(
    <Container maxWidth="xl">
      <Typography className = {classes.header} align = 'left' variant = 'h2'>PROJECTS</Typography>
      <Paper variant = 'outlined' className = {classes.paper}>
        <Card className = {classes.card}>
          <Typography align = 'left' variant = 'h5'>Pixel RPG</Typography>
          <Link href = 'https://github.com/evansding123/PixelRPG'>https://github.com/evansding123/PixelRPG</Link>
        </Card>

      </Paper>
    </Container>
  )
}

export default Projects;