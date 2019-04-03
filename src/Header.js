import React, { Component } from 'react';

export default class Header extends Component{
    
    render(){
        return (
                <nav className="navbar navbar-expand-sm bg-secondary ">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <span className="nav-link"><i className="fas fa-shopping-cart">
                        </i>
                        <label className="badge">{this.props.counter}</label></span>
                        
                        </li>
                    </ul>
                </nav>
                
        )
    }
}