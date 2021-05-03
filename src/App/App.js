import React, { Component } from 'react'
import Thumbnail from '../Thumbnail/Thumbnail'
import './App.css'

class App extends Component {
    state = {
        images: [],
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res =>
                !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .then((images) => {
                this.setState( {images} )
            })
            .catch(error => {
                console.error({error})
            })
    }

    render() { 
        const {images} = this.state
        const size = 25
        return (  
            <div className = 'App'>
                <h1>Album Gallery</h1>
                <div className = 'App-images'>
                    {images.slice(0, size).map(image => 
                        <Thumbnail 
                            key = {image.id}
                            thumbnail = {image.thumbnailUrl}
                            url = {image.url}
                            title = {image.title}
                        />,
                    )}
                
                </div>
            </div>
        )
    }
}
 
export default App