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
    this.videoCanplay = this.videoCanplay.bind(this)

    this.state = {stage: 0, left: false, right: false, buttonl: false, buttonr: false, canvas1: 0, canvasAnimate: true}
  }

  videoCanplay(){
    var video = document.getElementById('video')
    if(video.paused === true){
      video.play()
    }
  }

  videoEnded(){
    
    var video = document.getElementById('video')

    if(this.state.stage === 0) {  
      video.src = './video/q1.mp4'
      video.loop = true
      // video.play()
      this.setState({stage: 1, buttonr: true})
    }
    else if(this.state.stage === 1) {
      if(this.state.left === true) {
        video.src = './video/q1-left.mp4'
        video.loop = true
        // video.play()
      }
      else{
        video.src = './video/q1-right.mp4'
        video.loop = true
        // video.play()
      }
    }
    else if(this.state.stage === 2) {
      if(this.state.left === true) {
        video.src = './video/q2-left.mp4'
        video.loop = true
        // video.play()
      }
      else{
        video.src = './video/q2-right.mp4'
        video.loop = true
        // video.play()
      }
    }
  }

  canvasTouchStart(e) {
    // console.log(123)
    if(window.innerWidth > 768){
      return
    }

    if(this.state.stage < 1){
      return
    }
    // console.log(456)
   
    var video = document.getElementById('video')

    if(e.touches[0].pageX < window.innerWidth / 2){

      if(this.state.stage === 1){
        video.src = './video/q1-left-turn.mp4'
        video.loop = false
        // video.play()
        this.setState({left: true})
      }
      
      else if(this.state.stage === 2) {
        video.src = './video/q2-left-turn.mp4'
        video.loop = false
        // video.play()
        this.setState({left: true})
      }
      
      // console.log('left')
    }
    else{
      if(this.state.stage === 1){
        video.src = './video/q1-right-turn.mp4'
        video.loop = false
        // video.play()
        this.setState({right: true})
      }
      else if(this.state.stage === 2) {
        video.src = './video/q2-right-turn.mp4'
        video.loop = false
        // video.play()
        this.setState({right: true})
      }
      // console.log('right')
    }
  }

  test(){
    var video = document.getElementById('video')
    video.play()
    this.setState({test: 'hidden'})
  }

  canvasTouchEnd(e){
    var video = document.getElementById('video')
    if(window.innerWidth > 768){
      return
    }
    if(this.state.stage === 1) {
      video.src = './video/q1.mp4'
      video.loop = true
      // video.play()
      this.setState({left: false, right: false})
    }
    else if(this.state.stage === 2) {
      video.src = './video/q2.mp4'
      video.loop = true
      // video.play()
      this.setState({left: false, right: false})
    }
  }

  mouseDownHandle(e){
    // console.log(123)
    if(window.innerWidth <= 768){
      return
    }
    if(this.state.stage < 1){
      return
    }
    // console.log(456)
   
    var video = document.getElementById('video')

    if(e.pageX < window.innerWidth / 2){

      if(this.state.stage === 1){
        video.src = './video/q1-left-turn.mp4'
        video.loop = false
        // video.play()
        this.setState({left: true})
      }
      
      else if(this.state.stage === 2) {
        video.src = './video/q2-left-turn.mp4'
        video.loop = false
        // video.play()
        this.setState({left: true})
      }
      
      // console.log('left')
    }
    else{
      if(this.state.stage === 1){
        video.src = './video/q1-right-turn.mp4'
        video.loop = false
        // video.play()
        this.setState({right: true})
      }
      else if(this.state.stage === 2) {
        video.src = './video/q2-right-turn.mp4'
        video.loop = false
        // video.play()
        this.setState({right: true})
      }
      // console.log('right')
    }
  }

  mouseUpHandle(e){
    var video = document.getElementById('video')
    if(window.innerWidth <= 768){
      return
    }
    if(this.state.stage === 1) {
      video.src = './video/q1.mp4'
      video.loop = true
      // video.play()
      this.setState({left: false, right: false})
    }
    else if(this.state.stage === 2) {
      video.src = './video/q2.mp4'
      video.loop = true
      // video.play()
      this.setState({left: false, right: false})
    }
  }

  prevPage(){
    // console.log(4)
    var video = document.getElementById('video')
    if(this.state.stage === 2){
      video.src = './video/q1.mp4'
      video.loop = true
      // video.play()
      this.setState({stage: 1, buttonl: false, buttonr: true, canvas1: 100, canvasAnimate: true})
      setTimeout(() => {
        this.setState({canvas1: 0, canvasAnimate: false})
      }, 700)
    }
  }

  nextPage() {
    // console.log(5)
    var video = document.getElementById('video')
    if(this.state.stage === 1){
      video.src = './video/q2.mp4'
      video.loop = true
      // video.play()
      this.setState({stage: 2, buttonl: true, buttonr: false, canvas1: -100, canvasAnimate: true})
      setTimeout(() => {
        this.setState({canvas1: 0, canvasAnimate: false})
      }, 700)
    }
  }

  componentDidMount() {
    
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    var video = document.getElementById('video')
    setInterval(() => {
      
      ctx.drawImage(video, 0, 0, 1920, 1080)
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

    var canvasClass = classNames({
      'animate': this.state.canvasAnimate
    })

    var canvasStyle1 = {
      transform: 'translate(' + this.state.canvas1 + '%, 0)'
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
        <canvas id="canvas" className={canvasClass} width="1920" height="1080" style={canvasStyle1} onTouchStart={this.canvasTouchStart} onTouchEnd={this.canvasTouchEnd} onMouseUp={this.mouseUpHandle} onMouseDown={this.mouseDownHandle} />
        <div id="video-contain">
          <video id="video" src="./video/intro.mp4" onEnded={this.videoEnded} onCanPlay={this.videoCanplay} playsInline />
        </div>
      </div>
    );
  }
}

export default App;
