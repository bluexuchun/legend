import React, { Component } from 'react';

import './wrong.less'
import pic7 from '@/assets/imgs/7.jpg'
import refresh from '@/assets/imgs/refresh.png'

class wrong extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="wrong">
        <img className="icon-refresh" src={refresh} onClick={() => this.refresh()} alt=""/>
        <img className="icon-introduce" src={pic7} alt=""/>
      </div>
    )
  }
  refresh(){
    this.props.history.push('/restart')
  }
}

export default wrong
