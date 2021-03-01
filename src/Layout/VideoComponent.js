import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
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
    marginLeft: '15vw',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonBox: {
    marginLeft: 12,
    marginRight: 12,
  }
});

class VideoComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      current: (window.location.href).split("/")[4],
      button_id: 0,
      button_names: ['First', 'Second', 'Third']
    }
  }

  change_url = () => {
    switch (this.state.current) {
      case 'xHF2bm32f3Q':
        if (this.state.button_id === 1){
          this.setState({
            current: 'GfpyreJCdYQ',
            button_names: ['mama', 'papa', 'deda'],
          })
        }
        if (this.state.button_id === 2){
          this.setState({
            current: '264eiQWUTRI',
            button_names: ['pop', 'jip', 'aue'],
          })
        }
        if (this.state.button_id === 3){
          this.setState({
            current: 'o0YiZF9XZL0',
            button_names: ['ya', 'da', 'de'],
          })
        }

        break;
      default:
        this.setState({current: 'xHF2bm32f3Q', button_names: ['First', 'Second', 'Third']})
    }

  }

  button_01 = async () => {
    this.state.button_id = 1;
    this.change_url()
    this.forceUpdate()
  }

  button_02 = async () => {
    this.state.button_id = 2;
    this.change_url()
    this.forceUpdate()
  }

  button_03 = async () => {
    this.state.button_id = 3;
    this.change_url()
    this.forceUpdate()
  }


  render() {
    const {classes} = this.props;

    return (<div>
      <Header></Header>
      <div style={{background: 'red', position: 'absolute', width: '100vw', height: '100vh', opacity: 0.5}}></div>
      <div className={classes.mainContainer}>
        <div className={classes.vidContainer}>
          <ReactPlayer controls="true" width="70vw" height="70vh" url={'https://www.youtube.com/watch?v=' + this.state.current}/>
        </div>
        <div className={classes.buttonContainer}>
          <div className={classes.buttonBox}>
            <Button variant="contained" color="secondary" onClick={() => { this.button_01(); }}>
              {this.state.button_names[0]}
            </Button>
          </div>
          <div className={classes.buttonBox}>
            <Button variant="contained" color="secondary" onClick={() => { this.button_02(); }}>
              {this.state.button_names[1]}
            </Button>
          </div>
          <div className={classes.buttonBox}>
            <Button variant="contained" color="secondary" onClick={() => { this.button_03(); }}>
              {this.state.button_names[2]}
            </Button>
          </div>
        </div>

      </div>

    </div>)
  }
}

export default withStyles(useStyles)(VideoComponent)
