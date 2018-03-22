import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    var video = document.getElementById('video')

    // video.play()
    
  }

  render() {
    return (
      <div className="App">
        <canvas id="canvas" />
        <div id="video-contain">
          <video id="video" src={process.env.PUBLIC_URL + '/video/intro.mp4'} />
        </div>
      </div>
    );
  }
}

export default App;
