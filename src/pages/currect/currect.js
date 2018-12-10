import React, { Component } from 'react';

import './currect.less'
import pic6 from '@/assets/imgs/6.jpg'
import refresh from '@/assets/imgs/refresh.png'

class choice extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="currect">
        <img className="icon-refresh" src={refresh} onClick={() => this.refresh()} alt=""/>
        <img className="icon-introduce" src={pic6} alt=""/>
      </div>
    )
  }
  refresh(){
    this.props.history.push('/restart')
  }
}

export default choice
