import React, { Component } from 'react';

import './index.less';
import cookie from 'react-cookies'
import Loading from '@/component/loading/loading'
import pic1 from '@/assets/imgs/1.jpg'
import pic2 from '@/assets/imgs/2.jpg'
import pic3 from '@/assets/imgs/3.jpg'
import pic4 from '@/assets/imgs/4.jpg'
import pic5 from '@/assets/imgs/5.jpg'
import pic6 from '@/assets/imgs/6.jpg'
import pic7 from '@/assets/imgs/7.jpg'
import pic8 from '@/assets/imgs/8.jpg'

import bx1 from '@/assets/music/bx1.mp3'
import bx2 from '@/assets/music/bx2.mp3'
import es1 from '@/assets/music/es1.mp3'
import es2 from '@/assets/music/es2.mp3'
import gl1 from '@/assets/music/gl1.mp3'
import gl2 from '@/assets/music/gl2.mp3'
import yd1 from '@/assets/music/yd1.mp3'
import yd2 from '@/assets/music/yd2.mp3'
import yn1 from '@/assets/music/yn1.mp3'
import yn2 from '@/assets/music/yn2.mp3'


class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      status:true,
      loadItem:[
        {
          id:2,
          src:pic2,
          isLoad:false
        },
        {
          id:3,
          src:pic3,
          isLoad:false
        },
        {
          id:4,
          src:pic4,
          isLoad:false
        },
        {
          id:5,
          src:pic5,
          isLoad:false
        },
        {
          id:6,
          src:pic6,
          isLoad:false
        },
        {
          id:7,
          src:pic7,
          isLoad:false
        },
        {
          id:8,
          src:pic8,
          isLoad:false
        }
      ],
      questions:[
        {
          id:1,
          name:'埃塞俄比亚',
          music:[
            es1,
            es2
          ]
        },{
          id:2,
          name:'巴西',
          music:[
            bx1,
            bx2
          ]
        },
        {
          id:3,
          name:'哥伦比亚',
          music:[
            gl1,
            gl2
          ]
        },{
          id:4,
          name:'印度尼西亚',
          music:[
            yd1,
            yd2
          ]
        },{
          id:5,
          name:'越南',
          music:[
            yn1,
            yn2
          ]
        }
      ],
      options:[],
      currect:0
    }
  }
  componentWillMount(){
    // 取两个随机数
    // 取第一个随机数
    let random1 = Math.round(Math.random() * 4)
    let questions = [...this.state.questions]
    let options = [...this.state.options]
    options.push(questions[random1])
    delete questions[random1]
    // 取第二个随机数
    let random2 = Math.round(Math.random() * 3)
    let restQuestion = []
    questions.map((v,i) => {
      restQuestion.push(v)
    })
    options.push(restQuestion[random2])
    // 再选取正确的答案
    let currectId = Math.round(Math.random())
    console.log(options)
    console.log(currectId)
    this.setState({
      options:options,
      currectId:currectId
    })
    cookie.save('currectId',currectId)
    cookie.save('options',JSON.stringify(options))
    cookie.save('music',options[currectId].music[currectId])
  }
  render() {
    return (
      <div className="index">
        <Loading isShow={this.state.status}></Loading>
        <img
           className="imgGroup"
           src={pic1}
           alt=""
         />
         <div className="btn" onClick={() => this.toNext()}></div>
         <div className="loadItem">
           {this.state.loadItem.map((item,i) => (
             <img
               src={item.src}
               alt=""
               onLoad={() => this.isLoadFinish(i)}
             />
           ))}
           <audio src={this.state.options[this.state.currectId].music[this.state.currectId]}></audio>
         </div>
      </div>
    );
  }

  //图片预加载
  isLoadFinish(i){
    // 给当前完成的i 改变状态值
    let loadItem = [...this.state.loadItem]
    loadItem[i].isLoad = true
    this.setState({
      loadItem:loadItem
    })

    let isAllLoaded = true
    this.state.loadItem.map((v,i) => {
      if(!v.isLoad){
        isAllLoaded = false
      }
    })

    if(isAllLoaded){
      this.setState({
        status:false
      })
    }
  }

  toNext(){
    this.props.history.push('/introduce')
  }
}

export default index;
