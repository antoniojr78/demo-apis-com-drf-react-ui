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
                <h1 className="text-center text-info">List of Authors</h1>
                <ul className="list-group">
                {this.state.authors.map(author => 
                <div style={{textAlign: "left"}} key={author.id}>
                    <li className="list-group-item">{author.name}</li>
                    <li className="list-group-item">{author.address}</li>
                    <li className="list-group-item">{author.site === null || author.site.trim() === '' ? 'Not Informed' : author.site}</li>
                    <li className="list-group-item">{author.email}</li>
                    <br />
                </div>
                )}
                </ul>
            </div>
        )
    }
}
