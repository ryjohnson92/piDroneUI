import React, { Component } from 'react';
import Camera from "./import/camera";
import Header from './import/header';
import style from './style.js'
class Index extends Component {
    state = { 
        style:{
            bgColor:'#323232',
            base:{
                
            },
            header:{
                width:'100vw',
                minHeight:'10vh',
                backgroundColor:'red'
            }
        }
     }
     constructor(){
        super();
         this.style = new style()
     }
    render() { 
        return ( 
            <div style={this.style.main}>
                <Header style={this.style.header} />
                <h2>Welcome to react!</h2> 
                <Camera style={this.style.camera}/>
            </div>
            );
    }
}
 
export default Index;