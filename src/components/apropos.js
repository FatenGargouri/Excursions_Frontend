import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import img from './image/equipe.jpg';
import img1 from './image/nous.png';
import { Row,Col } from 'react-bootstrap';



class Apropos extends Component {
    state = {

    }

    render() {

        return (
            <div className="Apropos">
                <br></br>
                <br></br>
                <br></br>
                <h2 style={{ float: 'left', color: '#880E4F' }}>Qui Sommes-nous</h2>
                
                <div style={{ float: 'left' }}>
                
                <hr></hr>
                <p style={{ float: 'left',fontSize:'20px' }}>
                Let's enjoy est une agence d'excursion virtuelle publié le 09/12/2021 dans le domine de voyage et l'ambiance pour satisfaire les besoins et les préférences de nos clients en proposant des </p>
                <p style={{ float: 'left',fontSize:'20px' }}>organisations  merveilleux avec des prix raisonnables. </p><br></br><br></br><br></br><br></br>
                <img src={img1} style={{float:'center'}} width="500px" height="300px"/>
                </div>

                <br></br><br></br><br></br><br></br><h2 style={{ float: 'left', color: '#880E4F' }}>Notre Equipe</h2>
                <br></br><br></br>
                <div style={{ float: 'left' }}>
                <hr></hr>
                <p style={{ float: 'left',fontSize:'20px' }}>Passionnés, curieux et créatifs, l'équipe  est composé de plusieurs talons pluridisciplinaires. </p>
                <br></br><br></br>
                <img src={img} style={{float:'center'}} width="500px" height="300px"/>
                 <p  style={{ float: 'left',fontSize:'20px' }}>Une équipe complète de 20 personnes pour concrétiser les donnés, organiser des sorties,
                 vous découvrir les bons plans d'excursion et répondre à vos questions à tout moment.. </p>
                
                </div>
            </div>
        );
    }
}
export default Apropos;