import React, { Component } from 'react';
import Camera from "./import/camera";
import Header from './import/header';
import ControlPanel from './import/controlPanel';
import style from './style.js'
class Index extends Component {
    state = { 

     }
     constructor(){
        super();
         this.style = new style()
     }
    render() { 
        return ( 
            <React.Fragment>
                <Header style={this.style.header} />
                <div style={this.style.main}>
                    <Camera style={this.style.camera}/>
                    <ControlPanel style={this.style.cp}/>
                </div>
            </React.Fragment>
            
            );
    }
}
 
export default Index;