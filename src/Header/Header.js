import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() { 
        return (  
            <div className = 'Header'>
                <header>
                    <h2>Album Gallary</h2>
                    <p> Click on image to enlargen</p>
                </header>
            </div>
        )
    }
}
 
export default Header;