// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Carousel } from 'bootstrap';

// const Slider = () => {
//   return (
     
  
    
// <div className="container">
// 	<div className="row">
// 		<div className="col-md-12">
// 			<div className="lc-block">
// 				<div id="carouselLogos" className="carousel slide pt-5 pb-4" data-bs-ride="carousel">

// 					<div className="carousel-inner px-5">
// 						<div className="carousel-item active">
// 							<div className="row">
// 								<div className="col-6 col-lg-2 align-self-center">
// 									<img className="d-block w-100 px-3 mb-3" src="https://cdn.livecanvas.com/media/logos/11.png" alt="" />
// 								</div>
// 								<div className="col-6 col-lg-2  align-self-center">
// 									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/2.png" alt="" />
// 								</div>
// 								<div className="col-6 col-lg-2  align-self-center">
// 									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/3.png" alt="" />
// 								</div>
// 								<div className="col-6 col-lg-2  align-self-center">
// 									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/12.png" alt="" />
// 								</div>
// 								<div className="col-6 col-lg-2  align-self-center">
// 									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/5.png" alt="" />
// 								</div>
// 								<div className="col-6 col-lg-2  align-self-center">
// 									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/6.png" alt="" />
// 								</div>
// 							</div>

// 						</div>
// 						<div className="carousel-item">
// 							<div className="row">
// 								<div className="col-6 col-lg-2 align-self-center">
// 									<img className="d-block w-100 px-3 mb-3" src="https://cdn.livecanvas.com/media/logos/11.png" alt="" />
// 								</div>
// 								<div className="col-6 col-lg-2  align-self-center">
// 									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/2.png" alt="" />
// 								</div>
// 								<div className="col-6 col-lg-2  align-self-center">
// 									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/3.png" alt="" />
// 								</div>
// 								<div className="col-6 col-lg-2  align-self-center">
// 									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/12.png" alt="" />
// 								</div>
// 								<div class="col-6 col-lg-2  align-self-center">
// 									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/5.png" alt="" />
// 								</div>
// 								<div className="col-6 col-lg-2  align-self-center">
// 									<img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/6.png" alt="" />
// 								</div>
// 							</div>

// 						</div>

// 					</div>

// 					{/* <!--
// 	<ol class="carousel-indicators list-unstyled position-relative mt-3">
// 		<li data-bs-target="#carouselLogos" data-bs-slide-to="0" class="active bg-dark carousel-control-prev-icon"></li>
// 		<li data-bs-target="#carouselLogos" data-bs-slide-to="1" class="bg-dark"></li>
// 	</ol>
// 	--> */}

// 					<div class="w-100 px-3 text-center mt-4">
// 						<a class="carousel-control-prev position-relative d-inline me-4" href="#carouselLogos" data-bs-slide="prev">
// 							<svg width="2em" height="2em" viewBox="0 0 16 16" class="text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
// 								<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
// 							</svg>
// 							<span class="visually-hidden">Previous</span>
// 						</a>
// 						<a class="carousel-control-next position-relative d-inline" href="#carouselLogos" data-bs-slide="next">
// 							<svg width="2em" height="2em" viewBox="0 0 16 16" class="text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
// 								<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
// 							</svg>
// 							<span class="visually-hidden">Next</span>
// 						</a>





// 					</div>


// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
 
 
  
//   );
// };

// export default Slider;

import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'; 


class Sliders extends Component{
  
  render(){
    const settings1={
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"

    }
    return(
      <div className='container'>
          <Slider {...settings1}>
            {/* <div>
              <p>
                Exemplary - that's how I'd describe Eitacies' contribution and dedication. 
                They're just a team of perfectionists, who leave no stones unturned when it 
                comes to offering solutions. I had the pleasure of working with their offshore 
                team, who managed our project and rendered the deliverables well before the 
                stated time frame! If you are new to the tech space, go ahead and chat with 
                the team, they'll figure out everything on your behalf!
              </p>
              <img src='https://www.eitacies.com/assets/imnpg/home/hand.svg' alt='hand-image'/>
              <div className='profile'>
              <img src='https://www.eitacies.com/assets/img/home/user.svg' alt='profile'/>
              <p>Javier Perez, Business Development Executive at a Fortune 500 Company</p>
              </div>
            </div>
            <div>
              <p>
              It has been our greatest pleasure to have collaborated with the team at Eitacies. 
              They possess extensive knowledge and are reliable in offering feasible solutions. 
              We had the unwavering support of team Eitacies, which helped us to scale rapidly 
              and establish ourselves in this niche industry. 
              </p>
              <img src='https://www.eitacies.com/assets/img/home/hand.svg' alt='hand-image'/>
              <div className='profile'>
              <img src='https://www.eitacies.com/assets/img/home/user.svg' alt='profile'/>
              <p>Daniel Wu, Product Manager at a Leading Cloud Security Enterprise</p>
              </div>
            </div>
            <div>
              <p>
              It feels like yesterday since we met team Eitacies for tech support. 
              Right from our first meeting, the team has been cooperative, understanding, 
              and always helpful. As an organization focusing on AI and ML capabilities, 
              we're thankful for Eitacies for paving our tech pathway to success!
              </p>
              <img src='https://www.eitacies.com/assets/img/home/hand.svg' alt='hand-image'/>
              <div className='profile'>
                <img src='https://www.eitacies.com/assets/img/home/user.svg' alt='profile'/>
                <p>Nadia Ryland, Founder of an AI-based Mobile App</p>
              </div>
            </div>
            <div>
              <p>
              Thank you, team, for your attention to detail and for solving complex problems. 
              We're happy to be associated with such a vibrant and agile organization.
              </p>
              <img src='https://www.eitacies.com/assets/img/home/hand.svg' alt='hand-image'/>
              <div className='profile'>
              <img src='https://www.eitacies.com/assets/img/home/user.svg' alt='profile'/>
              <p>Alma Aseigo, CEO of a budding Financial Advisory Organization</p>
              </div>
            </div> */}
            <div className='card-item'>
              <img className='cloud-image' src='https://www.eitacies.com/assets/img/home/cloud.svg' alt='cloud'/>
              <h5>Cloud-Computing</h5>
              <h3>Top 5 Questions Asked by CloudSwitch Customers</h3>
              <p>
              “New CloudSwitch customers and prospects are coming up to 
              speed every week and there are a number of questions that 
              show up frequently enough that I thought it would be helpful 
              to cover them in a blog.” 
              </p>
            </div>
            <div className='card-item'>
              <img className='cloud-image' src='https://www.eitacies.com/assets/img/home/integration.svg' alt='cloud'/>
              <h5>Integration</h5>
              <h3>B2B solution that could seamlessly integrate into existing systems</h3>
              <p>
              “Client is a leading provider of web‐based 
              resources and information in the life science 
              Industry, catering to businesses across the globe.” 
              </p>
            </div>
            <div className='card-item'>
              <img className='cloud-image' src='https://www.eitacies.com/assets/img/home/cloud-transformation.svg' alt='cloud'/>
              <h5>Manufacturing</h5>
              <h3>Enable the manufacturers and their trading partners to maximize supply chain integration and efficiency</h3>
              <p>
              “Ampire, a US based ISV, develops software to enable the 
              manufacturers and their trading partners to maximize supply 
              chain integration and efficiency.” 
              </p>
            </div>
            <div className='card-item'>
              <img className='cloud-image' src='https://www.eitacies.com/assets/img/home/enterprise-application.svg' alt='cloud'/>
              <h5>Energy</h5>
              <h3>
                Corporate relocation forces wholesale 
                power Generation Company to seek assistance 
                with multiple quality assurance initiatives
              </h3>
              <p>
              “EITACIES, a premier provider of technology 
              staffing and services, responded through its 
              QA &amp; Testing Center of Excellence by 
              developing an outsourced quality assurance solution.” 
              </p>
            </div>
            <div className='card-item'>
              <img className='cloud-image' src='https://www.eitacies.com/assets/img/home/banking.svg' alt='cloud'/>
              <h5>Banking-Financial</h5>
              <h3>Banking & Financial Services</h3>
              <p>
              “Client is one of the world’s leading 
              providers of investment, asset and fund 
              management, and administration. EITACIES 
              maximized their ROI with knowledge transfer 
              of quality assurance best practices and methodology.”  
              </p>
            </div>
             
          </Slider>
      </div>
    );
  }
}

export default Sliders;
