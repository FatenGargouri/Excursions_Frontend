import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { Redirect,Link } from "react-router-dom";
class Detail extends Component {

    constructor(props) {

        super(props);
        this.state = {
            excurtionss:[],
            titre: '',
            desc: '',
            duree:'',
            prix: '',
            nomHotel:'',
            activites:'',
            destination: '',
            redirect: null
        }
    }
    componentDidMount = () => {
        const { id } = this.props.match.params;
        this.GetOne(id);
        this.getExcursions();
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
        await axios.get('http://localhost:3006/excurtionss/' +id)
            .then(response => {
                this.setState({
                    titre: response.data.titre,
                    desc: response.data.desc,
                    duree: response.data.duree,
                    prix: response.data.prix,
                    nomHotel: response.data.nomHotel,
                    activites: response.data.activites,
                    destination: response.data.destination,
                    img: response.data.img
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }




    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            
            <div className="Detail" style={{ width: '100%', padding: '3rem 4rem' }}>
                <label style={{ display: 'flex', justifyContent: 'center',color:'#C2185B',fontSize:'40px',fontStyle:'italic',fontFamily:'Times new Romon' }}>{this.state.titre}</label><br></br><br></br>
                <Row gutter={[8, 8]}>
                    <Col sm={8}>
                        <img src={this.state.img} width={400} height={250} alt={this.state.titre} />
                    </Col>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item variant="danger"><strong><label style={{ float: 'left',color:'#C2185B',fontSize:'22px',fontFamily:'Times new Romon' }}>Description: </label></strong>{this.state.desc}</ListGroup.Item>
                            <ListGroup.Item variant="danger"><strong><label style={{ float: 'left',color:'#C2185B',fontSize:'22px',fontFamily:'Times new Romon' }}>Duree: </label></strong>{this.state.duree}</ListGroup.Item>
                            <ListGroup.Item variant="danger"><strong><label style={{ float: 'left',color:'#C2185B',fontSize:'22px',fontFamily:'Times new Romon' }}>Prix: </label></strong>{this.state.prix} DT</ListGroup.Item>
                            <ListGroup.Item variant="danger"><strong><label style={{ float: 'left',color:'#C2185B',fontSize:'22px',fontFamily:'Times new Romon' }}>Nom hotel: </label></strong>{this.state.nomHotel}<br></br></ListGroup.Item>
                            <ListGroup.Item variant="danger"><strong><label style={{ float: 'left',color:'#C2185B',fontSize:'22px',fontFamily:'Times new Romon' }}>Activites: </label></strong>{this.state.activites}</ListGroup.Item>
                            <ListGroup.Item variant="danger"><strong><label style={{ float: 'left',color:'#C2185B',fontSize:'22px',fontFamily:'Times new Romon' }}>Destination: </label></strong>{this.state.destination}<br></br></ListGroup.Item>
                        </ListGroup>

<hr></hr>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <br></br><Link to={'/reserver'}><Button variant="danger">Reserver</Button></Link></div>
                    </Col>
                </Row>


            </div>
        );
    }
}
export default Detail;