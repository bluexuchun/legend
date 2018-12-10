import React, { Component } from 'react';
import cookie from 'react-cookies'
import './restart.less'
import pic8 from '@/assets/imgs/8.jpg'

class restart extends Component{
  constructor(props){
    super(props)
    this.state = {
      password:1
    }
  }

  render(){
    return(
      <div className="restart">
        <input className="icon-input" type="password" onChange={this.onHandleChange.bind(this)} />
        <img className="icon-introduce" src={pic8} alt=""/>
        <div className="btn" onClick={() => this.toNext()}></div>
      </div>
    )
  }
  toNext(){
    if(this.state.pinput == this.state.password){
      cookie.remove('currectId')
      cookie.remove('options')
      cookie.remove('music')
      this.props.history.push('/')
    }else{
      alert('填写的密码不匹配，请重新填写')
    }

  }
  onHandleChange(e){
    this.setState({
      pinput:e.target.value
    })
  }
}

export default restart
