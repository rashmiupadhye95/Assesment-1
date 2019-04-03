import React, { Component } from 'react';

export default class Image extends Component{
    constructor(){
        super();
        
    }
    render(){
        return (
            <img className="card-img-top" src={this.props.imageUrl}></img>
        )
    }
}