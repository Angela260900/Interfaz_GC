import React, {Component} from "react";
import './content.css'
import boxer from '../../img/boxer.png'
import bulldog from '../../img/bulldog.png'
import dalamata from '../../img/dalmata.png'
import estadistica from '../../img/estadistica.png'
import golden from '../../img/golden.png'
import husky from '../../img/husky.png'
import labrador from '../../img/labrador.png'
import pastor from '../../img/pastor.png'
import perros from '../../img/perros.png'
import terrier from '../../img/terrier.png'

class Content extends Component{
    render(){
        return(
            <div className="contents">
            <h2>Razas Populares</h2>
            <div className="container-card">
                <div>
                    <h2>Labrador retriever</h2>
                    <img src={labrador}></img>
                </div>
                <div>
                    <h2>Bulldog francés</h2>
                    <img src={bulldog}></img>
                </div>
                <div>
                    <h2>Golden retriever</h2>
                    <img src={golden}></img>
                </div>
                <div>
                    <h2>Pastor alemán</h2>
                    <img src={pastor}></img>
                </div>
            </div>
            <div className="container-card-2">
                <div className="card1">
                    <h2>Estadisticas</h2>
                    <img src={estadistica}></img>
                </div>
                <div className="card2">
                    <img src={perros}></img>
                </div>
            </div>
            <div className="container-card">
                <div>
                    <h2>Husky siberiano</h2>
                    <img src={husky}></img>
                </div>
                <div>
                    <h2>Dalmata</h2>
                    <img src={dalamata}></img>
                </div>
                <div>
                    <h2>Boxer</h2>
                    <img src={boxer}></img>
                </div>
                <div>
                    <h2>Yorkshire Terrier</h2>
                    <img src={terrier}></img>
                </div>
            </div>
        </div>
        )
    }
}

export default Content;