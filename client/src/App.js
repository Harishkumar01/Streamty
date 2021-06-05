import React from 'react'
import {Typography, AppBar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '1400px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar position="static" color="primary">
        <Typography variant="h3" align="center">
              Streamty
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <br />
        <Notifications />
      </Options>
    </div>
  );
}

export default App;