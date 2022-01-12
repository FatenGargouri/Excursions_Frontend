import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Row, Button,Form} from 'react-bootstrap';
import axios from 'axios';
import img from './image/img3.jpg';

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomEtPren : '',
            mail: '',
            tel: '',
            mess: '',
            redirect: null
        }
    }
	Addcontact = () => {
        const contactObject = {
            nomEtPren : this.state.nomEtPren ,
            mail: this.state.mail,
            tel: this.state.tel,
            mess: this.state.mess
        };

        axios.post('http://localhost:3006/contacts', contactObject)
            .then(res => console.log(res.data));
        this.setState({ redirect: "/accueil" });
    }
    handleChange = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({ [nam]: val });
    }
    render() {

        return (
            <div className="Contact">
				<br></br>
				<br></br>
                <br></br>
                <p style={{ float: 'left',fontSize:'40px',color:'#AD1457',fontFamily:'Times New Romon' }}>Contactez Nous</p>
                <br></br>
				<br></br>
                <br></br>
                <hr></hr>
				<Row>
					<Col>
                <Form onSubmit={this.Addcontact} style={{paddingLeft:'50px', color:'#EC407A',fontSize:'20px' }}>
                    <Row >
                        <Col sm={6} controlId="formGrid">
                            <label style={{ float: 'left',color:'#00ACC1',fontFamily:'times new romon',fontSize:'22px' }}>Email</label>
                            <Form.Control name="mail" value={this.state.mail} onChange={this.handleChange} placeholder="Enter email" />
                            <label style={{ float: 'left',color:'#00ACC1',fontFamily:'times new romon',fontSize:'22px' }}>Nom et Prenom</label>
                            <Form.Control name="nomEtPren" value={this.state.nomEtPren} onChange={this.handleChange}  placeholder="Entrer nom et prenom" />
						</Col>
                    </Row>
                    <Row>
                        <Col sm={6} controlId="formGrid">
                            <label style={{ float: 'left',color:'#00ACC1',fontFamily:'times new romon',fontSize:'22px' }}>Télephone</label>
                            <Form.Control placeholder="Entrer Telephone" name="tel" value={this.state.tel} onChange={this.handleChange} />
                            <label style={{ float: 'left',color:'#00ACC1',fontFamily:'times new romon',fontSize:'22px' }}>Votre Message</label>
                            <Form.Control placeholder="Entrer votre message" name="mess" value={this.state.mess} onChange={this.handleChange} />
						</Col>
                    </Row>
                    <br></br><br></br><Button style={{ float: 'left' }} variant="primary" type="submit">
                        Envoyer
  </Button><br></br>
                </Form>
				</Col>
				<Col><img src={img}></img></Col>
				</Row>
            </div>
        );
    }
}
export default Contact;