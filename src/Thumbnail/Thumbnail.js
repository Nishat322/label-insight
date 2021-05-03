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

    onChange = e => {
        this.setState({description: e.target.value})
    }

    setData = () => {
        let obj = {id: this.props.id, description: this.state.description}
        localStorage.setItem('description', JSON.stringify(obj))
    }

    getData = () => {
        let data = localStorage.getItem('description')
        data = JSON.parse(data)
        if(data.id === this.props.id) {
            return data.description
        }

        return 'No Description'
    }

    render() { 
        return (  
            <div className = 'Thumbnail'>
                <img src = {this.props.thumbnail} alt = '' onClick = {this.handleShowImage}/>
                {this.state.isOpen && (
                        <div className = 'modal'>
                            <span className = 'close' onClick = {this.handleShowImage}> &times; </span>
                            <h2 className = 'caption'> {this.props.title} </h2> 
                            <div className = 'flex'>
                                <img className = 'modal-content' src = {this.props.url} alt =''/>
                                <div className = 'flex-two'>
                                    <form onSubmit = {this.setData}>
                                        <div className = 'description-form'>
                                            <label htmlFor = 'description'>Add Description</label> <br/>
                                            <input type = 'text' id = 'description' name = 'description' value = {this.state.description} onChange = {this.onChange}/>
                                        </div>
                                        <button type = 'submit'>Submit</button>
                                    </form>
                                    <div className = 'description-text'> Description: {this.getData()} </div>
                                </div>
                            </div>
                        </div>
                )}
            </div>
        )
    }
}
 
export default Thumbnail;