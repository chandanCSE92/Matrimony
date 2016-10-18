import React from 'react'
import {Component} from 'react'
import img from '../asset/image/home-banner.jpg'
import * as F from '../lib/flexbox'
import R from 'ramda'

export default class Home extends Component {
  render() {
    return (
      <div className="panel">

        <div style={{backgroundImage: `url(${img})`,width:'100%',height:'80%',display: 'flex',flexDirection: 'column',justifyContent:'space-between'}}>
<div style={Object.assign({}, {marginLeft: '-50px'}, F.frsa)}>
<div>
logo
</div>

         <div>
         <a>Login</a>
         <span></span>

         <a>Help</a>
         <span></span>

         </div>
         </div>
         <div>
         <div style={{justifyContent: 'center', display: 'flex'}}>
          <p style={{fontSize: '32px',color:'white',width:'33%',textAlign: 'center'}}>We bring people together.
         Love unites them...</p>

         </div>

         <div style={{width:'100%',height:'150px',backgroundColor:'rgba(0,0,0,0.5)'}}>
         </div>

         </div>

        </div>
</div>

    )
  }
}
