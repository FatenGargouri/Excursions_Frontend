import React from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row,Col,Form } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';


class Reserver extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clNom :'',
            clPrenom:'',
            clDate:'',
            clMail:'',
            clTel:'',
            clPays:'',
            clVille:'',
            clMess:'',
            clCodePostal:'',
            redirect: null
        }
    }

    
    Addclient = () => {
        const { id } = this.props.match.params;
        const clientObject = {
            _id: id,
            clNom: this.state.clNom,
            clPrenom: this.state.clPrenom,
            clDate: this.state.clDate,
            clMail: this.state.clMail,
            clTel: this.state.clTel,
            clPays: this.state.clPays,
            clVille: this.state.clVille,
            clMess: this.state.clMess,
            clCodePostal: this.state.clCodePostal
        };
        axios.post('http://localhost:3006/clients', clientObject)
            .then(res => console.log(res.data));
            this.setState({ redirect: "/paiement" });
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
    <Form.Group as={Col} controlId="formNom">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Nom</Form.Label>
      <Form.Control required style={{backgroundColor:'#FCE4EC'}} type="text" name="clNom" placeholder="Entrer Nom" value={this.state.clNom} onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formPrenom">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Prenom</Form.Label>
      <Form.Control required style={{backgroundColor:'#FCE4EC'}} type="text" name="clPrenom" placeholder="Entrer Prenom" value={this.state.clPrenom} onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formMat">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Date Naissance</Form.Label>
      <Form.Control required style={{backgroundColor:'#FCE4EC'}} type="text" name="clDate" placeholder="Entrer Date de naissance" value={this.state.clDate} onChange={this.handleChange}/>
    </Form.Group>
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formMail">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Email</Form.Label>
      <Form.Control required style={{backgroundColor:'#FCE4EC'}} type="email" name="clMail" placeholder="Entrer Email" value={this.state.clMail} onChange={this.handleChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="formTel">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Telephone</Form.Label>
      <Form.Control required style={{backgroundColor:'#FCE4EC'}} type="text" name="clTel" placeholder="Entrer Telephone" value={this.state.clTel} onChange={this.handleChange} />
    </Form.Group>
    </Row>
    
  <Row className="mb-3">
    <Form.Group as={Col} controlId="form">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Pays</Form.Label>
      <Form.Control required style={{backgroundColor:'#FCE4EC'}} type="text" name="clPays" placeholder="Entrer Pays" value={this.state.clPays} onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="form">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Ville</Form.Label>
      <Form.Control required style={{backgroundColor:'#FCE4EC'}} type="text" name="clVille" placeholder="Entrer Ville" value={this.state.clVille} onChange={this.handleChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="formCodePostal">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Code Postal</Form.Label>
      <Form.Control required style={{backgroundColor:'#FCE4EC'}} type="text" name="clCodePostal" placeholder="Entrer Code Postal" value={this.state.clCodePostal} onChange={this.handleChange} />
    </Form.Group>
  </Row>
  <Row className="mb-3">
  

    <Form.Group as={Col} controlId="formMessage">
      <Form.Label style={{fontSize:'22px',float:'left',color:'#F50057',fontFamily:'Times New Romon' }}>Message</Form.Label>
      <textarea required style={{backgroundColor:'#FCE4EC'}} type="textarea" cols="40" rows="5" name="clMess" placeholder="Entrer Votre Message" value={this.state.clMess} onChange={this.handleChange} />
    </Form.Group>
  </Row>
  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check required style={{backgroundColor:'#FCE4EC'}} type="checkbox" style={{float:'left'}} label="Confirmer Vos Donnés" />
  </Form.Group>
<div>
  
  <br></br><br></br><button className="btn btn-danger m-1" style={{float:'right'}} type="submit" href='/addCde'>
    Reserver
  </button>
  </div>
  <br></br><br></br>

            </form>
        );
    }
}
export default Reserver;