import React, { Component } from 'react';
import cookie from 'react-cookies'

import './choice.less'
import pic4 from '@/assets/imgs/4.jpg'
import pic5 from '@/assets/imgs/5.jpg'
import music from '@/assets/imgs/music.png'
import confrim from '@/assets/imgs/confrim.png'

class choice extends Component{
  constructor(props){
    super(props)
    this.state = {
      isShow:false,
      isPlay:false
    }
  }

  componentWillMount(){
    let currectId = cookie.load('currectId')
    let options = cookie.load('options')
    let music = cookie.load('music')
    this.setState({
      currectId,
      options,
      music
    })
  }

  render(){
    return(
      <div className="choice">
        <div className="choice-start" style={{display:this.state.isShow ? 'flex':'none'}}>
          <img className="icon-introduce" src={pic5} alt=""/>
          <img className="icon-music" src={music} style={{animation:this.state.isPlay ? 'cir 1s linear infinite' : ''}} alt=""/>
          <div className="options">
              <div className="options-word" onClick={() => this.choose(0)}>
                <div className="option-cir"></div>
                A.{this.state.options[0].name}
              </div>
              <div className="options-word" onClick={() => this.choose(1)}>
                <div className="option-cir"></div>
                B.{this.state.options[1].name}
              </div>
          </div>
          <audio id="audioCont" src={this.state.music}></audio>
        </div>
        <div className="choice-before" style={{display:this.state.isShow ? 'none':'flex'}}>
          <img className="icon-introduce" src={pic4} alt=""/>
          <div className="btn" onClick={() => this.toNext()}></div>
          <div className="confrim" onClick={() => this.toNext()}>
            <img src={confrim} className="confrim-btn" alt=""/>
          </div>
        </div>

      </div>
    )
  }
  choose(i){
    if(i == this.state.currectId){
      this.props.history.push('/currect')
    }else{
      this.props.history.push('/wrong')
    }
  }
  toNext(){
    this.setState({
      'isShow':true,
      'isPlay':true
    })
    let audio = document.getElementById('audioCont')
    let that = this;
    audio.play()
    audio.addEventListener('ended',function(){
      that.setState({
        'isPlay':false
      })
    })
  }
}

export default choice
