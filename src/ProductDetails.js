import React, { Component } from 'react';
import Button from './Button';

export default class ProductDetails extends Component{
    
    render(){
        return (
            <div className="card col-md-4">
                <div className="card-body">
                    <h3>{this.props.details.name}</h3>
                    <img src={this.props.details.imageUrl}/>
                    <h4>Description:</h4>
                    <p> {this.props.details.description}</p>
                    <p><b>Rating:</b> {this.props.details.customerRating}</p>
                </  div>
                <Button add={this.props.addCart} remove={this.props.removeCart} />
                
            </div>
                
        )
    }
}