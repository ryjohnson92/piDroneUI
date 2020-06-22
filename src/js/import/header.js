import React, { Component } from 'react';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header style={this.props.style}>
                some content
            </header>
         );
    }
}
 
export default Header;