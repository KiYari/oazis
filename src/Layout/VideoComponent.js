import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Container, Grid, Typography} from '@material-ui/core';
import ReactPlayer from 'react-player/youtube'
import Header from './Header'
import Nav from './Nav';

const useStyles = theme => ({
  cont: {
    marginLeft: 24,
    backgroundColor: 'red'
  },
  mainContainer: {
    height: '100vh',
    backgroundColor: 'green',
  },
  videoContainer: {

  }
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
  vid_inf = (props) => {
    fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='+(window.location.href).split("/")[4]+'&key=AIzaSyDChwSyYbFWJl2LJOgBbSwBcs6WAxb9Qv4').then(response => response.json()).then(data => {
      var _data = {id: 0, channelTitle: data['items'][0]['snippet']['channelTitle'],
        title: data['items'][0]['snippet']['title'],
        publishedAt: data['items'][0]['snippet']['publishedAt'],
        desc: data['items'][0]['snippet']['localized']['description'],
      channelId: data['items'][0]['snippet']['channelId']};
      this.setState({vinf: _data});
    }).catch(err => alert("Wrong!ffff"))
  }

  render() {
    const {classes} = this.props;

    return (<div>
      <Header>
        <Nav/>
      </Header>
      <div className={classes.mainContainer}>
        <ReactPlayer width="100%" height="80%" url={'https://www.youtube.com/watch?v=' + (window.location.href).split("/")[4]}/>
      </div>

    </div>)
  }
}

export default withStyles(useStyles)(VideoComponent)
