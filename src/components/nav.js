import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import logo from './image/logo2.jpg';
import { Link} from "react-router-dom";
import { Button} from 'react-bootstrap';
class Nav extends Component {

  constructor(props) {
    super(props);

}

render(){
    return(
<div className="nav" class="is-preload homepage">
		<div id="page-wrapper">
					<div id="header-wrapper">
					<header id="header" class="container">
							<div style={{float:'left'}}>
								<img src={logo} width="120px" style={{paddingBottom:"25px"}} height="120px"></img>
							</div>
							<nav id="nav">
								<ul>
									<li class="current"><a href="/accueil">Acceuil</a></li>
									<li><a href="/excursions">Excurtions</a></li>
									<li><a href="/apropos">Apropos</a></li>
									<li><a href="/contact">Contact</a></li>
									<li><Link to={'/login'}><Button variant="danger">Connexion</Button></Link></li>
									<li><Link to={'/connexion'}><Button variant="primary">SignIn</Button></Link></li>
								</ul>
								
								
								
							</nav>
					</header>
				</div>
</div>
</div>
);
}
}
export default Nav;