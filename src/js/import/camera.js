import React, { Component } from 'react';
import BaseImage from '../staticFiles/base.gif'
class Camera extends Component {
    state = { 
        style :{
            backgroundcolor:'red',
            image:BaseImage
        }
     }
    componentDidMount(){
        if (this.props.image){
          //  this.setState({image:this.props.image})
        }
        
    }
    render() { 
        return ( 
            <div style={this.props.style}>
                <img style={this.props.style.image}src={BaseImage} alt="Video camera feed"/>
                <div style={this.props.style.cOptions}>
                    options
                </div>
            </div> );
    }
}
 
export default Camera;