import React from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row,Col,Form } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';


class Paiement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type :'',
            numCarte:'',
            codeSec:'',
            ville:'',
            datePaie:'',
            CodePostal:'',
            redirect: null
        }
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
        axios.post('http://localhost:3006/paiements', clientObject)
            .then(res => console.log(res.data));
            this.setState({ redirect: "/accueil" });
    }
    handleChange = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({ [nam]: val });
    }
    render() {
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
    }
        return (
            <form onSubmit={this.Addclient}>
                <br></br><br></br><br></br><h1 style={{color:'#AD1457',float:'left',fontFamily:'Times New Romon' }}>S'il vous Plait remplir cette formulaire</h1><br></br><br></br><br></br>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formType">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Type:</Form.Label>
      <Form.Control required style={{backgroundColor:'#FCE4EC'}} type="text" name="type" placeholder="Entrer Type Carte" value={this.state.type} onChange={this.handleChange}/>
    </Form.Group>
  </Row>

<Row className="mb-3">
  <Form.Group as={Col} controlId="formNum">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Numero Carte</Form.Label>
      <Form.Control required style={{backgroundColor:'#FCE4EC'}} type="text" name="numCarte" placeholder="Entrer Numero de Carte" value={this.state.numCarte} onChange={this.handleChange}/>
    </Form.Group>
</Row>
    
  <Row className="mb-3">
    <Form.Group as={Col} controlId="form">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Code Securite</Form.Label>
      <Form.Control required style={{backgroundColor:'#FCE4EC'}} type="text" name="codeSec" placeholder="Entrer Code Securite" value={this.state.codeSec} onChange={this.handleChange}/>
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formMessage">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Ville</Form.Label>
      <Form.Control required style={{backgroundColor:'#FCE4EC'}} type="text"  name="ville" placeholder="Entrer Ville" value={this.state.ville} onChange={this.handleChange} />
    </Form.Group>
    <Form.Group as={Col} controlId="formMessage">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Code Postal</Form.Label>
      <Form.Control required style={{backgroundColor:'#FCE4EC'}} type="text" name="CodePostal" placeholder="Entrer Code Postal" value={this.state.CodePostal} onChange={this.handleChange} />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="form">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Date Paiement</Form.Label>
      <Form.Control required style={{backgroundColor:'#FCE4EC'}} type="text" name="datePaie" placeholder="Entrer Date Paiement" value={this.state.datePaie} onChange={this.handleChange}/>
    </Form.Group>
  </Row>
  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check required style={{backgroundColor:'#FCE4EC'}} type="checkbox" style={{float:'left'}} label="Confirmer Vos Donnés" />
  </Form.Group>
<div>
  
  <br></br><br></br><button className="btn btn-danger m-1" style={{float:'right'}} type="submit"><Link className="btn btn-primary" to={"/acceuil"}></Link>
    Payer
  </button>
  </div>
  <br></br><br></br>

            </form>
        );
    }
}
export default Paiement;