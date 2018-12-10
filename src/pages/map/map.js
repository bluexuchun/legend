import React, { Component } from 'react';

import './map.less'
import pic3 from '@/assets/imgs/3.jpg'

class map extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className="map">
        <img className="icon-introduce" src={pic3} alt=""/>
        <div className="btn" onClick={() => this.toNext()}></div>
      </div>
    )
  }

  toNext(){
    this.props.history.push('/choice')
  }
}

export default map
