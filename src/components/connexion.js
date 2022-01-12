import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBCol,MDBRow,MDBContainer,MDBCard,MDBCardImage,MDBCardOverlay } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link,Redirect } from "react-router-dom";
import img from './image/img7.jpg';

class Connexion extends Component {
  constructor(props) {
    super(props)
    this.state = {
        redirect: null,
    }
  }
    handleSubmit = e =>{
      e.preventDefault();
      const data={
        nom:this.nom,
        prenom:this.prenom,
        email:this.email,
        password:this.password
      };
      axios.post('http://localhost:3006/api/auth/register',data)
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err);
      })
      this.setState({ redirect: "/login" });
    }
    
    render() {
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
    }
        return (
            <div className="SignUp">
                <br></br><br></br><br></br><br></br>
              <MDBCard background='dark' className='text-white'>
      <MDBCardImage overlay src={img} height="770px" alt='...' />
      <MDBCardOverlay>
      <MDBContainer>
                <MDBRow><br></br><br></br></MDBRow>
  <MDBRow className='md-4'>
  <MDBCol md="2"></MDBCol>
    <MDBCol md="2">
      <br></br>
    <h1  style={{color:'black',fontWeight:'bold',fontFamily:'Times New Roman',fontStyle:'italic'}}>S'inscrire</h1>
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label style={{color:'#F57F17',float:'left',fontFamily:'times new romon',fontSize:'21px'}}>Nom</label>
        <input type="text" name="nom" required value={this.state.nom} onChange={e=>this.nom=e.target.value} className="form-control" placeholder="Nom" />
        </div>
        <div className="form-group">
        <label style={{color:'#F57F17',float:'left',fontFamily:'times new romon',fontSize:'21px'}}>Prenom</label>
        <input type="text" name="prenom" required value={this.state.prenom} onChange={e=>this.prenom=e.target.value} className="form-control" placeholder="Prenom" />
        </div>
        <div className="form-group">
        <label style={{color:'#F57F17',float:'left',fontFamily:'times new romon',fontSize:'23px'}}>Email</label>
        <input type="email" name="email" required value={this.state.email} onChange={e=>this.email=e.target.value} className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
        <label style={{color:'#F57F17',float:'left',fontFamily:'times new romon',fontSize:'23px'}}>Mot de Passe</label>
        <input type="password" name="password" required value={this.state.password} onChange={e=>this.password=e.target.value} className="form-control" placeholder="Mot de Passe" />
        </div><br></br>
          <button type="submit" className=" btn btn-success btn-block" style={{fontSize:'13px',width:'40%'}}>S'inscrire</button>
          
          <MDBCol md='11'>
                <p className='font-small d-flex justify-content-end' style={{color:'#607D8B'}}>
                  Have an account?
                  <Link to='/login' className='green-text ml-1 font-weight-bold'  style={{color:'#37474F'}}>
                    Log in
                  </Link>
                </p>
              </MDBCol>
      </form>
    </MDBCol>
  </MDBRow>
 
 
</MDBContainer>
      </MDBCardOverlay>
    </MDBCard>
                
            </div>
        );
    }
}
export default Connexion;