import React, { Component } from 'react';
import Camera from "./import/camera";
import Header from './import/header';
import ControlPanel from './import/controlPanel';
import style from './style.js'
import Connected from './import/connectController'
class Index extends Component {
    state = { 
        controler:false
     }
     constructor(){
        super();
        console.log(navigator.getGamepads())
        this.gamepadListener()
         this.style = new style()
     }
    render() { 
        return ( 
            <React.Fragment>
                {this.controllerConnected()}
            </React.Fragment>
            
            );
    }
    controllerConnected(){
        if(!this.state.controler){
            return <Connected />
        }
        else{
           return <React.Fragment>
                <Header style={this.style.header} />
                <div style={this.style.main}>
                    <Camera style={this.style.camera}/>
                    <ControlPanel style={this.style.cp}/>
                </div>
            </React.Fragment>
        }
    }
    gamepadListener(){
        window.addEventListener("gamepadconnected", this.connected.bind(this,true));
        window.addEventListener("gamepaddisconnected", this.connected.bind(this,false));
    }
    connected(state=false){
        this.setState({
            controler:state
        })
    }
}
 
export default Index;