import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super()

    this.draw = this.draw.bind(this)
    this.videoEnded = this.videoEnded.bind(this)

    this.state = {stage: 0}
  }

  videoEnded(){
    if(this.state.stage === 0) {
      var video = document.getElementById('video')
      video.src = `${process.env.PUBLIC_URL}/video/q1.mp4`
      video.loop = true
      video.play()
      this.setState({stage: 1})
    }
  }

  draw(){

    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    var video = document.getElementById('video')

    ctx.drawImage(video, 0, 0, 667, 375)

    requestAnimationFrame(this.draw)
  }

  componentDidMount() {
    
    var video = document.getElementById('video')

    video.play()
    this.draw()
    
  }

  render() {
    return (
      <div className="App">
        <canvas id="canvas" width="667" height="375" />
        <div id="video-contain">
          <video id="video" src={process.env.PUBLIC_URL + '/video/intro.mp4'} onEnded={this.videoEnded}/>
        </div>
      </div>
    );
  }
}

export default App;
