import React, { Component } from 'react'

import './Thumbnail.css'
class Thumbnail extends Component {
    state = {
        isOpen: false,
        description: ''
    }

    handleShowImage = () => {
        this.setState({isOpen : !this.state.isOpen})
    }

    setData = () => {

    }

    getData = () => {
        
    }



    render() { 
        return (  
            <div className = 'Thumbnail'>
                <img src = {this.props.thumbnail} alt = '' onClick = {this.handleShowImage}/>
                {this.state.isOpen && (
                        <div className = 'modal'>
                            <span className = 'close' onClick = {this.handleShowImage}> &times; </span>
                            <h2 className = 'caption'> {this.props.title} </h2> 
                            <img className = 'modal-content' src = {this.props.url} alt =''/>
                            <form onSubmit = {this.setData}>
                                <div className = 'description-form'>
                                    <label htmlFor = 'description'>Add Description</label> <br/>
                                    <input type = 'text' id = 'description' name = 'description' value = {this.state.description} onChange = {this.onChange}/>
                                </div>
                                <button type = 'submit'>Submit</button>
                            </form>
                        </div>
                )}
            </div>
        )
    }
}
 
export default Thumbnail;