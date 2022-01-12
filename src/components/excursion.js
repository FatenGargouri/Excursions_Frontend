import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button,Row,Col,Card,Container,Badge} from "react-bootstrap";
import { MDBRow,MDBCol,MDBCard, MDBCardBody, MDBCardTitle} from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link } from "react-router-dom";


class Excursions extends Component {

    constructor(props) {

        super(props);
        this.state = { excurtionss: [] };
    }
    componentDidMount = async () => {
        this.getExcursions()

    }
    componentDidUpdate() { this.getExcursions(); }
    getExcursions = async () => {
        await axios.get("http://localhost:3006/excurtionss")
            .then(response =>
                this.setState({
                    excurtionss: response.data
                }))
            .catch(function (error) {
                console.log(error);
            })
    }
    GetOne = async (id) => {
        await axios.get('http://localhost:3006/excurtionss/' + id)
            .then(response => {
                this.setState({
                    titre: response.data.titre,
                    desc: response.data.desc,
                    duree: response.data.duree,
                    prix: response.data.prix,
                    nomHotel: response.data.nomHotel,
                    activites: response.data.activites,
                    destination: response.data.destination,
                    img: response.data.img,
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <div className="Excursions" >
                <br></br><br></br><br></br>
               




                <Row className="justify-content-md-center">
    <Col md="auto">
        <MDBRow className='row-cols-1 row-cols-md-3 g-3'>
        {this.state.excurtionss.map((l) =>
                    <MDBCol >
                    <MDBCard>
                            
                            <MDBCardBody>
                    <div class="card-body">
                        <img  style={{ width: '16rem', height: '13rem' }} src={l.img}/>
                        <br></br>
                        <MDBCardTitle style={{Color:'#1A237E',fontStyle:'times new romon',fontSize:'23px',float:'left'}}>{l.titre}</MDBCardTitle><br></br><br></br><br></br>
                        <h4 style={{color:'#1A237E',fontStyle:'Times new romon',fontSize:'23px',float:'left'}}>Prix: <Badge pill bg="dark">{l.prix} DT</Badge></h4><br></br><br></br>
                        <hr></hr>
                        <Link className="btn btn-primary" to={"/detail/" + l._id}>Plus de Detail </Link>
                    </div>
                    </MDBCardBody>
                          </MDBCard>
                          </MDBCol>
                )
            }
            
            </MDBRow>
    </Col>
  </Row>
            </div>
        );
    }
}
export default Excursions;