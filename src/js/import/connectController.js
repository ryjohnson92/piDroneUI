import React, { Component } from 'react';
import Controler from "../staticFiles/xbox.gif"
class ConnectController extends Component {
    state = {  }
    style={
        width:'100vw',
        height:'100vh',
        zindex:1,
        backgroundColor:'black',
        position:'abosulte',
        top:'0',
        left:'0',
        margin:'auto'
    }
    img={
        marginTop:'10%',
        marginLeft:'35%',
        width:'30%'
    }
    render() { 
        return ( <div style={this.style}>
            <img style={this.img} src={Controler}></img>
            <h2 style={{
                marginTop:'5%',
                color:'white',
                width:"100%",
                textAlign:'center'
            }}>Please connect a controller</h2>
        </div> );
    }
}
 
export default ConnectController;