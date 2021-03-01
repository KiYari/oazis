import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Container, Grid, Typography} from '@material-ui/core';
import ReactPlayer from 'react-player/youtube'
import Header from './Header'

const useStyles = theme => ({
  cont: {
    marginLeft: 24,
  },
  mainContainer: {
    height: '100%',
    position: 'absolute'
  },
  vidContainer: {
    marginTop: '88.2px',
    margin: '5vh',
  },

});

class VideoComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      vis: [],
      vinf: {},
      comments: [],
      logo: '',
    }
  }

  render() {
    const {classes} = this.props;

    return (<div>
      <Header></Header>
      <div style={{background: 'red', position: 'absolute', width: '100vw', height: '100vh', opacity: 0.5}}></div>
      <div className={classes.mainContainer}>
        <div className={classes.vidContainer}>
          <ReactPlayer width="85vw" height="85vh" url={'https://www.youtube.com/watch?v=' + (window.location.href).split("/")[4]}/>
        </div>
      </div>

    </div>)
  }
}

export default withStyles(useStyles)(VideoComponent)
