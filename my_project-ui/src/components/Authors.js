import React, { Component } from 'react'
import axios from 'axios'

export default class Authors extends Component {
    state = {
        authors: []
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/authors/')
        .then(res => {
            const authors = res.data;
            this.setState({authors});
        })
    }

    render() {
        return (
            <div>
                {this.state.authors.map(author => 
                    <li key={author.id}>{author.name}</li>    
                )}
            </div>
        )
    }
}
