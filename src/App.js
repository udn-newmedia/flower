import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super()

    this.draw = this.draw.bind(this)
    this.videoEnded = this.videoEnded.bind(this)
    this.canvasTouchStart = this.canvasTouchStart.bind(this)
    this.canvasTouchEnd = this.canvasTouchEnd.bind(this)

    this.state = {stage: 0, left: false, right: false}
  }

  videoEnded(){
    var video = document.getElementById('video')

    if(this.state.stage === 0) {  
      video.src = `${process.env.PUBLIC_URL}/video/q1.mp4`
      video.loop = true
      this.setState({stage: 1})
    }
    else if(this.state.stage === 1) {
      if(this.state.left === true) {
        video.src = `${process.env.PUBLIC_URL}/video/q1-left.mp4`
        video.loop = true
      }
      else{
        video.src = `${process.env.PUBLIC_URL}/video/q1-right.mp4`
        video.loop = true
      }
    }
  }

  canvasTouchStart(e) {
    console.log(123)
    if(this.state.stage < 1){
      return
    }
    console.log(456)
    var video = document.getElementById('video')

    if(e.touches[0].pageX < window.innerWidth / 2){
      
      video.loop = false
      video.src = `${process.env.PUBLIC_URL}/video/q1-left-turn.mp4`
      this.setState({left: true})
      console.log('left')
    }
    else{
      video.loop = false
      video.src = `${process.env.PUBLIC_URL}/video/q1-right-turn.mp4`
      this.setState({right: true})
      console.log('right')
    }
  }

  canvasTouchEnd(e){
    
    if(this.state.stage === 1) {
      var video = document.getElementById('video')
      video.src = `${process.env.PUBLIC_URL}/video/q1.mp4`
      video.loop = true
      this.setState({left: false, right: false})
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
    
    this.draw()
    
  }

  render() {
    return (
      <div className="App">
        <canvas id="canvas" width="667" height="375" onTouchStart={this.canvasTouchStart} onTouchEnd={this.canvasTouchEnd} />
        <div id="video-contain">
          <video id="video" src={process.env.PUBLIC_URL + '/video/intro.mp4'} onEnded={this.videoEnded} autoPlay playsInline />
        </div>
      </div>
    );
  }
}

export default App;
