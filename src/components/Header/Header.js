import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
class Header extends Component{
    render(){
        return(
            <div className="Header">
                <h1>Game Central</h1>
                <div className="menu">
                    <Link className="menuLinks" to='/'>Home</Link>
                    <Link className="menuLinks" to='/dice'>Dice</Link>
                </div>
            </div>
        )
    }
}

export default Header;