import React, { Component } from 'react';
import DroneConsole from './droneConsole';
class ControlPanel extends Component {
    state = {}
    render() {
        let link = "https://www.openstreetmap.org/export/embed.html?bbox=-87.40042179822923%2C46.538910411903124%2C-87.39826798439027%2C46.53996942533793&amp;layer=mapnik" 
        return (<div style={this.props.style}>
            <iframe 
                width="100%" 
                height="50%" 
                frameborder="0" 
                scrolling="no" 
                marginheight="0" 
                marginwidth="0" 
                src={link} 
                style={{}}>
            </iframe>
            <br />
            <small style={{display:'none'}}>
                <a href="https://www.openstreetmap.org/#map=19/46.53944/-87.39934">View Larger Map</a></small>
            <DroneConsole style={this.props.style.droneConsole}/>
        </div>);
    }
}

export default ControlPanel;