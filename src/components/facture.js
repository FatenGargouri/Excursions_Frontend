import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button,Badge} from 'react-bootstrap';
import axios from 'axios';
import { Redirect} from "react-router-dom";
import { MDBCard,MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
class Facture extends Component {

    constructor(props) {

            super(props);
            this.state = {
                ar: [],
                codeFact : '',
                client: '',
                excurtions: '',
                paiement: '',
            redirect: null
        }
}
        componentDidMount = () => {
            const { id } = this.props.match.params;
            this.GetOne(id);
            this.GetOne1(this.state.client);
            this.GetOne2(this.state.excurtions);
            this.GetOne3(this.state.paiement);
            this.getFactures();
        }
        componentDidUpdate() { this.getFactures(); }
        getFactures = async () => {
            await axios.get("http://localhost:3006/factures")
              .then(response =>
                this.setState({
                  ar: response.data
                }))
              .catch(function (error) {
                console.log(error);
              })
          }
        GetOne = async (id) => {
            await axios.get('http://localhost:3006/factures/' + id)
                .then(response => {
                    this.setState({
                        codeFact: response.data.codeFact,
                        client : response.data.client,
                        excurtions : response.data.excurtions,
                        paiement : response.data.paiement,
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        GetOne1 = async (id) => {
            await axios.get('http://localhost:3006/clients/' + id)
                .then(response => {
                    this.setState({
                        clNom: response.data.clNom,
                        clPrenom: response.data.clPrenom,
                        clDate: response.data.clDate,
                        clMail: response.data.clMail,
                        clTel: response.data.clTel,
                        clPays: response.data.clPays,
                        clVille: response.data.clVille,
                        clMess: response.data.clMess,
                        clCodePostal: response.data.clCodePostal
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        Addclient = () => {
            const { id } = this.props.match.params;
            const clientObject = {
                _id: id,
                type: this.state.type,
                numCarte: this.state.numCarte,
                codeSec: this.state.codeSec,
                ville: this.state.ville,
                datePaie: this.state.datePaie,
                CodePostal: this.state.CodePostal,
            };
            axios.post('http://localhost:3006/factures', clientObject)
                .then(res => console.log(res.data));
                this.setState({ redirect: "/accueil" });
        }
        handleChange = (e) => {
            let nam = e.target.name;
            let val = e.target.value;
            this.setState({ [nam]: val });
        }
        GetOne2 = async (id) => {
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
        GetOne3 = async (id) => {
            await axios.get('http://localhost:3006/paiements/' + id)
                .then(response => {
                    this.setState({           
            type: response.data.type,
            numCarte: response.data.numCarte,
            codeSec: response.data.codeSec,
            ville: response.data.ville,
            datePaie: response.data.datePaie,
            CodePostal: response.data.CodePostal,
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
                <label style={{ display: 'flex',float:'left', justifyContent: 'center',fontWeight:'bold',color:'#D500F9',fontSize:'60px',fontStyle:'italic',fontFamily:'Times new Romon' }}>Votre Facture</label><br></br><br></br><br></br><br></br>
                                                 <MDBCardText><strong><label style={{ float: 'left',color:'#6A1B9A',fontSize:'22px',fontFamily:'Times new Romon' }}>Code Facture:</label></strong><h4 style={{color:'black',fontFamily:'Times new Romon' }}>{this.state.codeFact}</h4></MDBCardText><br></br>
                                                <MDBCardText><strong><label style={{ float: 'left',color:'#6A1B9A',fontSize:'22px',fontFamily:'Times new Romon' }}>Nom :</label></strong><h4 style={{color:'black',fontFamily:'Times new Romon' }}>{this.state.client.clNom}</h4></MDBCardText><br></br>
                                                 <MDBCardText><strong><label style={{ float: 'left',color:'#6A1B9A',fontSize:'22px',fontFamily:'Times new Romon' }}>Prenom:</label></strong><h4 style={{color:'black',fontFamily:'Times new Romon' }}>{this.state.client.clPrenom}</h4></MDBCardText><br></br>
                                            <MDBCardText><strong><label style={{ float: 'left',color:'#6A1B9A',fontSize:'22px',fontFamily:'Times new Romon' }}>Date Naissance:</label></strong><h4 style={{color:'black',fontFamily:'Times new Romon' }}>{this.state.client.clDate}</h4></MDBCardText><br></br>
                                        <MDBCardText><strong><label style={{ float: 'left',color:'#6A1B9A',fontSize:'22px',fontFamily:'Times new Romon' }}>Telephone:</label></strong><h4 style={{color:'black',fontFamily:'Times new Romon' }}>{this.state.client.clTel}</h4></MDBCardText><br></br>
                                        <MDBCardText><strong><label style={{ float: 'left',color:'#6A1B9A',fontSize:'22px',fontFamily:'Times new Romon' }}>Email:</label></strong><h4 style={{color:'black',fontFamily:'Times new Romon' }}>{this.state.client.clMail}</h4></MDBCardText><br></br>
                                                <MDBCardText><strong><label style={{ float: 'left',color:'#6A1B9A',fontSize:'22px',fontFamily:'Times new Romon' }}>Pays :</label></strong><h4 style={{color:'black',fontFamily:'Times new Romon' }}>{this.state.client.clPays}</h4></MDBCardText><br></br>
                                                 <MDBCardText><strong><label style={{ float: 'left',color:'#6A1B9A',fontSize:'22px',fontFamily:'Times new Romon' }}>Ville:</label></strong><h4 style={{color:'black',fontFamily:'Times new Romon' }}>{this.state.client.clVille}</h4></MDBCardText><br></br>
                                            <MDBCardText><strong><label style={{ float: 'left',color:'#6A1B9A',fontSize:'22px',fontFamily:'Times new Romon' }}>Code Postal:</label></strong><h4 style={{color:'black',fontFamily:'Times new Romon' }}>{this.state.client.clCodePostal}</h4></MDBCardText><br></br>
                                        <MDBCardText><strong><label style={{ float: 'left',color:'#6A1B9A',fontSize:'22px',fontFamily:'Times new Romon' }}>Excursion:</label></strong><h4 style={{color:'black',fontFamily:'Times new Romon' }}>{this.state.excurtions.titre}</h4></MDBCardText><br></br>
                                        <MDBCardText><strong><label style={{ float: 'left',color:'#6A1B9A',fontSize:'22px',fontFamily:'Times new Romon' }}>Date de Paiement:</label></strong><h4 style={{color:'black',fontFamily:'Times new Romon' }}>{this.state.paiement.datePaie}</h4></MDBCardText><br></br><br></br>
                                        <MDBCardText><strong><label style={{ float: 'left',color:'#6A1B9A',fontSize:'22px',fontFamily:'Times new Romon',float:'left' }}>Prix:</label></strong><h4 style={{color:'black',fontFamily:'Times new Romon',float:'left' }}><Badge pill bg="secondary">{this.state.excurtions.prix}DT</Badge></h4></MDBCardText><br></br>
                                        <hr></hr>
                                        <div className="d-grid gap-2">
  <Button variant="outline-secondary" href="/panier">
    Enregistrer
  </Button>
  </div>
</div>
        );
    }
}
export default Facture;