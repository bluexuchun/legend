import React, { Component } from 'react';
import '@/assets/css/animate.css'
import './loading.less';
import loading from '@/assets/imgs/loading.png'

class loadComponent extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return (
      <div
        className="loading"
        style={{display:this.props.isShow ? '':'none'}}
        >
        <img className="icon-loading" src={loading} alt=""/>
        <div className="loading-text">加载中...</div>
      </div>
    )
  }
}

export default loadComponent
