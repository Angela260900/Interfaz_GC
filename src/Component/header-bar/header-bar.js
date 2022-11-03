import React, {Component} from "react";
import './header-bar.css'
import imagen from '../../img/user.png'

class Header extends Component{
    render(){
        return(
            <div className="bar">
            <div className="user">
                <img src={imagen}></img>
                <p>Angela Pulido</p>
            </div>
            <ul>
                <li>
                    <a href="">Sobre Perros</a>
                </li>
                <li>
                    <a href="">Razas</a>
                </li>
                <li>
                    <a href="">Tamaños</a>
                </li>
                <li>
                    <a href="">Cuidados</a>
                </li>
            </ul>
            <div className="container-button">
                <button>Adopta Ya!</button>
            </div>
        </div>
        )
    }
}

export default Header;