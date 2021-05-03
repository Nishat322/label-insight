import React, { Component } from 'react'

import './Thumbnail.css'
class Thumbnail extends Component {
    render() { 
        return (  
            <div className = 'Thumbnail'>
                <a href = {this.props.url}><img src = {this.props.thumbnail} alt = ''/></a>
            </div>
        )
    }
}
 
export default Thumbnail;