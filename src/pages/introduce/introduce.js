import React, { Component } from 'react';

import './introduce.less'
import pic2 from '@/assets/imgs/2.jpg'

class introduce extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className="introduce">
        <img className="icon-introduce" src={pic2} alt=""/>
        <div className="btn" onClick={() => this.toNext()}></div>
      </div>
    )
  }

  toNext(){
    this.props.history.push('/map')
  }
}

export default introduce
