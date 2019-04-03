import React, { Component } from 'react';

export default class Button extends Component{

    render(){
        return (
            <div>
            <button
            className="ml-1 btn btn-primary"
            onClick={()=>{
                this.props.add()
            }}  >Add to Cart</button>
            <button
            className="ml-1 btn btn-danger"
            onClick={()=>{
                this.props.remove()
            }}  >Remove</button>
            </div>
        )
    }
}