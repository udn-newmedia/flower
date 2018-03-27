import React, { Component } from 'react';
import classNames from 'classnames'

import './App.css';

class App extends Component {
  constructor(){
    super()

    this.videoEnded = this.videoEnded.bind(this)
    this.canvasTouchStart = this.canvasTouchStart.bind(this)
    this.canvasTouchEnd = this.canvasTouchEnd.bind(this)
    this.test = this.test.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
    this.mouseDownHandle = this.mouseDownHandle.bind(this)
    this.mouseUpHandle = this.mouseUpHandle.bind(this)

    this.state = {stage: 0, left: false, right: false, buttonl: false, buttonr: false, canvas1: 0, canvas2: 100, video: null, video2: null}
  }

  videoEnded(){
    
    var video, video2

    if(this.state.stage === 0) {  
      video = document.getElementById('video-2')
      video.play()
      video2 = document.getElementById('video-7')
      this.setState({stage: 1, video: video, buttonr: true, video2: video2})
    }
    else if(this.state.stage === 1) {
      if(this.state.left === true) {
        video = document.getElementById('video-4')
        video.currentTime = 0
        video.play()
        this.setState({video: video})
      }
      else{
        video = document.getElementById('video-6')
        video.currentTime = 0
        video.play()
        this.setState({video: video})
      }
    }
    else if(this.state.stage === 2) {
      if(this.state.left === true) {
        video = document.getElementById('video-9')
        video.currentTime = 0
        video.play()
        this.setState({video2: video})
      }
      else{
        video = document.getElementById('video-11')
        video.currentTime = 0
        video.play()
        this.setState({video2: video})
      }
    }
  }

  canvasTouchStart(e) {
    console.log(123)
    if(this.state.stage < 1){
      return
    }
    console.log(456)
   
    var video

    if(e.touches[0].pageX < window.innerWidth / 2){

      if(this.state.stage === 1){
        video = document.getElementById('video-3')
        video.play()
        this.setState({left: true, video: video})
      }
      
      else if(this.state.stage === 2) {
        video = document.getElementById('video-8')
        video.play()
        this.setState({left: true, video2: video})
      }
      
      console.log('left')
    }
    else{
      if(this.state.stage === 1){
        video = document.getElementById('video-5')
        video.play()
        this.setState({right: true, video: video})
      }
      else if(this.state.stage === 2) {
        video = document.getElementById('video-10')
        video.play()
        this.setState({right: true, video2: video})
      }
      console.log('right')
    }
  }

  test(){
    var video = document.getElementById('video')
    video.play()
    this.setState({test: 'hidden'})
  }

  canvasTouchEnd(e){
    var video, temp, i
    if(this.state.stage === 1) {
      video = document.getElementById('video-2')
      for(i = 3; i <=6;i++){
        temp = document.getElementById('video-' + i)
        temp.pause()
      }
      this.setState({left: false, right: false, video: video})
    }
    else if(this.state.stage === 2) {
      video = document.getElementById('video-7')
      for(i = 8; i <= 11;i++){
        temp = document.getElementById('video-' + i)
        temp.pause()
      }
      this.setState({left: false, right: false, video2: video})
    }
  }

  mouseDownHandle(e){
    console.log(123)
    console.log(123)
    if(this.state.stage < 1){
      return
    }
    console.log(456)
   
    var video

    if(e.pageX < window.innerWidth / 2){

      if(this.state.stage === 1){
        video = document.getElementById('video-3')
        video.play()
        this.setState({left: true, video: video})
      }
      
      else if(this.state.stage === 2) {
        video = document.getElementById('video-8')
        video.play()
        this.setState({left: true, video2: video})
      }
      
      console.log('left')
    }
    else{
      if(this.state.stage === 1){
        video = document.getElementById('video-5')
        video.play()
        this.setState({right: true, video: video})
      }
      else if(this.state.stage === 2) {
        video = document.getElementById('video-10')
        video.play()
        this.setState({right: true, video2: video})
      }
      console.log('right')
    }
  }

  mouseUpHandle(e){
    var video, temp, i
    if(this.state.stage === 1) {
      video = document.getElementById('video-2')
      for(i = 3; i <=6;i++){
        temp = document.getElementById('video-' + i)
        temp.pause()
      }
      this.setState({left: false, right: false, video: video})
    }
    else if(this.state.stage === 2) {
      video = document.getElementById('video-7')
      for(i = 8; i <= 11;i++){
        temp = document.getElementById('video-' + i)
        temp.pause()
      }
      this.setState({left: false, right: false, video2: video})
    }
  }

  prevPage(){
    console.log(4)
    if(this.state.stage === 2){
      var video = document.getElementById('video-2')
      video.currentTime = 0
      video.play()
      this.setState({stage: 1, buttonl: false, buttonr: true, canvas1: 0, canvas2: 100})
    }
  }

  nextPage() {
    console.log(5)
    if(this.state.stage === 1){
      var video = document.getElementById('video-7')
      video.currentTime = 0
      video.play()
      this.setState({stage: 2, buttonl: true, buttonr: false, canvas1: -100, canvas2: 0})
    }
  }

  componentDidMount() {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    var video = document.getElementById('video')
    var canvas2 = document.getElementById('canvas2')
    var ctx2 = canvas2.getContext('2d')
    var video2 = document.getElementById('video-7')
    this.setState({video : video, video2: video2 })
    
    setInterval(() => {
      ctx.drawImage(this.state.video, 0, 0, 1920, 1080)
      ctx2.drawImage(this.state.video2, 0, 0, 1920, 1080)
    }, 33)
    
  }

  render() {

    var btnlClass = classNames({
      'page-button': true,
      'hidden': !this.state.buttonl
    })

    var btnrClass = classNames({
      'page-button': true,
      'hidden': !this.state.buttonr
    })

    var canvasStyle1 = {
      transform: 'translate(' + this.state.canvas1 + '%, 0)'
    };

    var canvasStyle2 = {
      transform: 'translate(' + this.state.canvas2 + '%, 0)'
    };

    return (
      <div id="app">
        <div id="remind">
          <img src="./image/remind.jpg" alt="remind" />
        </div>
        <div className="logo-contain">
          <img className="hidden-md hidden-lg" src="./image/logo.png" alt="logo" />
          <img className="hidden-xs hidden-sm" src="./image/web/logo.png" alt="logo" />
        </div>
        <div id="count-contain">
          <div id="count">花博倒數</div>
          <span className="number">1</span>
          <span className="number">2</span>
          <span className="number">3</span>
        </div>
        <div className={this.state.test} id="test" onClick={this.test} >
          <img src="./image/intro.png" alt="intro" />
        </div>
        <div id="left-button" className={btnlClass} onClick={this.prevPage} >
          <img className="hidden-md hidden-lg" src="./image/buttonl.png" alt="buttonl" />
          <img className="hidden-xs hidden-sm" src="./image/web/buttonl.png" alt="buttonl" />
        </div>
        <div id="right-button" className={btnrClass} onClick={this.nextPage}>
          <img className="hidden-md hidden-lg" src="./image/buttonr.png" alt="buttonr" />
          <img className="hidden-xs hidden-sm" src="./image/web/buttonr.png" alt="buttonr" />
        </div>
        <canvas id="canvas" width="1920" height="1080" style={canvasStyle1} onTouchStart={this.canvasTouchStart} onTouchEnd={this.canvasTouchEnd} onMouseUp={this.mouseUpHandle} onMouseDown={this.mouseDownHandle} />
        <canvas id="canvas2" width="1920" height="1080" style={canvasStyle2} onTouchStart={this.canvasTouchStart} onTouchEnd={this.canvasTouchEnd} onMouseUp={this.mouseUpHandle} onMouseDown={this.mouseDownHandle} />
        <div id="video-contain">
          <video id="video" src="./video/intro.mp4" onEnded={this.videoEnded} playsInline />
          <video id="video-2" src="./video/q1.mp4" onEnded={this.videoEnded} playsInline loop muted/>
          <video id="video-3" src="./video/q1-left-turn.mp4" onEnded={this.videoEnded} playsInline muted/>
          <video id="video-4" src="./video/q1-left.mp4" onEnded={this.videoEnded} playsInline loop muted/>
          <video id="video-5" src="./video/q1-right-turn.mp4" onEnded={this.videoEnded} playsInline muted/>
          <video id="video-6" src="./video/q1-right.mp4" onEnded={this.videoEnded} playsInline loop muted/>
          <video id="video-7" src="./video/q2.mp4" onEnded={this.videoEnded} playsInline loop muted/>
          <video id="video-8" src="./video/q2-left-turn.mp4" onEnded={this.videoEnded} playsInline muted/>
          <video id="video-9" src="./video/q2-left.mp4" onEnded={this.videoEnded} playsInline loop muted/>
          <video id="video-10" src="./video/q2-right-turn.mp4" onEnded={this.videoEnded} playsInline muted/>
          <video id="video-11" src="./video/q2-right.mp4" onEnded={this.videoEnded} playsInline loop muted/>
        </div>
      </div>
    );
  }
}

export default App;
