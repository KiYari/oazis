import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Container, Grid, Typography} from '@material-ui/core';
import ReactPlayer from 'react-player/youtube'
import Header from './Header'

const useStyles = theme => ({
  buttonContainer: {
    width: 94,
    height: 94,
  },

});

class VideoComponent extends React.Component {
  constructor() {
    super();

  }

  render() {
    const {classes} = this.props;

    return (<div className={classes.buttonContainer}>
      abc
    </div>)
  }
}

export default withStyles(useStyles)(VideoComponent)
