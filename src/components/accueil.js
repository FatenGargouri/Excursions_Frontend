import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel, Col, Row} from 'react-bootstrap';
import React, { Component } from 'react';
import img1 from './image/img1.jpg';
import img2 from './image/img2.jpg';
import img3 from './image/img3.jpg';
import img4 from './image/img4.jpg';
import img5 from './image/img5.jpg';
import img6 from './image/img6.jpg';
import logo from './image/logo2.jpg';
class Accueil extends Component {

  constructor(props) {
    super(props);

}

render(){
    return(
<div className="Acceuil" class="is-preload homepage">
		<div id="page-wrapper">


<br></br>
<div>
                <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100" bg="373940" text="First slide" width="600px" height="600px"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100" bg="373940" text="First slide" width="600px" height="600px"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100" bg="373940" text="First slide" width="600px" height="600px"
      src={img3}
      alt="First slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>



				<div id="features-wrapper">
					<div class="container">
						<div class="row">
							<div class="col-4 col-12-medium">

								
									<section class="box feature">
										<a href="#" class="image featured"><img src={img4} alt="" /></a>
									</section>

							</div>
							<div class="col-4 col-12-medium">

									<section class="box feature">
										<a href="#" class="image featured"><img src={img5} alt="" /></a>
									</section>

							</div>
							<div class="col-4 col-12-medium">

									<section class="box feature">
										<a href="#" class="image featured"><img src={img6} alt="" /></a>
									</section>

							</div>
						</div>
					</div>
				</div>

					<div id="footer-wrapper">
					<footer id="footer" class="container">
						<div class="row">
							<div class="col-3 col-6-medium col-12-small">

								
									<section class="widget links">
										<h3>Nos services</h3>
										<ul class="style2">
											<li><a href="#">Excursions</a></li>
											<li><a href="#">Reservation</a></li>
											<li><a href="#">Paiement</a></li>
										</ul>
									</section>

							</div>
							<div class="col-3 col-6-medium col-12-small">

																<section class="widget links">
										<h3>Qui somme nous</h3>
										<ul class="style2">
											<li><a href="#">A propos</a></li>
										</ul>
									</section>

							</div>
							<div class="col-3 col-6-medium col-12-small">

								
									<section class="widget links">
										<h3>Contacter nous</h3>
										<ul class="style2">
											<li><a href="#">Contact</a></li>
										</ul>
									</section>

							</div>
							<div class="col-3 col-6-medium col-12-small">

															<section class="widget contact last">
										<h3>Contact Us</h3>
										<ul>
											<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
											<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
											<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
											<li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
											<li><a href="#" class="icon brands fa-pinterest"><span class="label">Pinterest</span></a></li>
										</ul>
										<p>Sfax Route Mahdia<br />
										Tunisie<br />
										Faten Gargouri/
										Amira Ghorbel<br/>
										23575190/93606602</p>
									</section>

							</div>
						</div>
						<div class="row">
							<div class="col-12">
								<div id="copyright">
									<ul class="menu">
										<li>&copy; All rights reserved</li><li>Design: <a href="iset Sfax">Iset Sfax</a></li>
									</ul>
								</div>
							</div>
						</div>
					</footer>
				</div>

			</div>
            </div>
   );
}
}
export default Accueil;