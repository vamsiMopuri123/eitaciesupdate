import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { MdHome } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import './index.css'



class Header extends Component{

    render(){
        const settings={
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
              {
                breakpoint: 1024, // for desktops
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
              {
                breakpoint: 768, // for tablets
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 480, // for mobile devices
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
            ]
      
          }
          const settings1={
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
      
          }
          const settings2={
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",responsive: [
              {
                breakpoint: 1024, // for desktops
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
              {
                breakpoint: 768, // for tablets
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 480, // for mobile devices
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
            ]
      
          }
        return(
          <div>
            <div className="header-container">
                <Navbar bg="transparent" expand="lg">
                    <Navbar.Brand href="#">
                        <img className='header-logo' src='https://www.eitacies.com/assets/img/home/logo-white.svg' alt='logo'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
                    <Navbar.Collapse id="navbarNavAltMarkup">
                        <Nav className="navbar-nav nav" id="header">
                            <Nav.Link href="#">HOME</Nav.Link>
                            <Nav.Link href="#">ABOUT US</Nav.Link>
                            <NavDropdown title="SERVICES" id="basic-nav-dropdown">
                                {/* Add your service options here */}
                            </NavDropdown>
                            <NavDropdown title="INDUSTRIES" id="basic-nav-dropdown">
                                {/* Add your industries options here */}
                            </NavDropdown>
                            <NavDropdown title="CAREERS" id="basic-nav-dropdown">
                                {/* Add your careers options here */}
                            </NavDropdown>
                            <Nav.Link href="#">BLOG</Nav.Link>
                            <Nav.Link href="#">CONTACT US</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <h1 className="header-txt">Propelling The Future</h1>
            </div>
             
            <div className='icon-container'>
                <MdHome className='icon-home'/>
                <FaChevronRight className='icon-arrow'/>
                <text className='icon-text'>About Us</text>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="card mb-4">
                        <img className='img1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJMZ_x-kN8ICWR6e4ZnBfMwg_JdbWtK5t6A&usqp=CAU' alt='image1'/>
                         <div style={{marginTop:'16px'}}>
                            <h2 className="card-heading">The Seed</h2>
                            <p className="card-container">
                            EITACIES Inc , established since 2008 
                            with globally integrated service centers, 
                            a pioneer in providing software development 
                            services in SOA, Cloud Integration, Cyber Security 
                            & Middleware, Master Data Management & Data Warehousing, 
                            Packaged Enterprise Applications, Cloud based applications & solutions.
                            </p>
                         </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card">
                        <img className='img1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1ZuVkLHYxZFUvGfM056gx7FoBCD44P7R_Y46kNyva7XsJpBUbqSeviyO37oswNqxk9s&usqp=CAU' alt='image1'/>
                         <div style={{marginTop:'16px'}}>
                            <h2 className="card-heading">The Sapling</h2>
                            <p className="card-container">
                                With persistence and passion, EITACIES grew strongly over the years. 
                                The team grew gradually, forging sturdy relationships with clients. 
                                We extended our operations by establishing delivery centers globally, 
                                leveraging the innovative capabilities of young minds.
                            </p>
                            <p className="card-container">
                            We also expanded our service offerings, adding newer technologies 
                            facilitating our clients to adapt to evolving digital landscapes.
                            </p>
                         </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card">
                        <img className='img1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJMZ_x-kN8ICWR6e4ZnBfMwg_JdbWtK5t6A&usqp=CAU' alt='image1'/>
                         <div style={{backgroundColor:'light blue',marginTop:'16px'}}>
                            <h2 className="card-heading">The Grove</h2>
                            <p className="card-container">
                            Today, EITACIES has transformed into a prolific grove with tech 
                            footprints across the globe. Our pool of experts excel at delivering 
                            tailored solutions for businesses, irrespective of their scale. 
                            As a proud start-up enabler, EITACIES has enabled multiple 
                            small-scale enterprises to enhance their service delivery 
                            and upscale their technical aspects.
                            </p>
                            <p className="card-container">
                            We have collaborated with promising organizations 
                            from their nascent phase and helped them grow phenomenally.
                            </p>
                         </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bridge-container'>
                <h1 className='bridge-heading'>Building Bridges to the Future</h1>
                <button className='bridge-button'>Explore Our Services</button>
            </div>
            <div className='image-slideshow-container'>
                    <h1 className='image-heading'>Our Team</h1>
                    <Carousel className='d-flex flex-row'>
                    <Carousel.Item>
                        <img
                        // className="d-block w-100"
                        src="https://www.eitacies.com/assets/img/home/team1.png"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        // className="d-block w-100"
                        src="https://www.eitacies.com/assets/img/home/team2.png"
                        alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        // className="d-block w-100"
                        src="https://www.eitacies.com/assets/img/home/team3.png"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        // className="d-block w-100"
                        src="https://www.eitacies.com/assets/img/home/team4.png"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        // className="d-block w-100"
                        src="https://www.eitacies.com/assets/img/home/team5.png"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    </Carousel>
            </div>
            <div>
                <h1 className='service-heading'>Our Services</h1>
            </div>
            <div className='container'>
              <div className='row'>
                 <div className='col-12 col-lg-4'>
                    <div className='card'>
                    <img className='g-image1' src='https://svitla.com/uploads_converted/0/1228-consulting.webp?1540820306' alt='consult'/>
                    <h4 className='g-content'>Consult</h4>
                    <p className='g-para'>Drive Innovation and Achieve Quantifiable Results with EITACIES’ Industry Leaders.</p>
                    </div>
                 </div>
                 <div className='col-12 col-lg-4'>
                    <div className='card'>
                        <img className='g-image1' src='https://d1m75rqqgidzqn.cloudfront.net/wp-data/2022/03/16180754/software-engineer-job-skills-1.jpg' alt='engineering'/>
                        <h4 className='g-content'>Engineering</h4>
                        <p className='g-para'>Discover and Leverage the latest technologies and advanced solutions, custom-made for your business.</p>
                    </div>
                 </div>
                 <div className='col-12 col-lg-4'>
                    <div className='card'>
                      <img className='g-image1' src='https://cdn.create.vista.com/api/media/small/39356305/stock-photo-future-touchscreen-interface-with-hand' alt='execution'/>
                      <h4 className='g-content'>Execute</h4>
                      <p className='g-para'>People, processes, and powerful innovations! - Explore the amalgamation of tools & talents.</p>
                    </div>
                 </div>
              </div>

            </div>
            {/* <div className='group-images'>
                <div className='g-consult'>
                    <img className='g-image1' src='https://svitla.com/uploads_converted/0/1228-consulting.webp?1540820306' alt='consult'/>
                    <h4 className='g-content'>Consult</h4>
                    <p className='g-para'>Drive Innovation and Achieve Quantifiable Results with EITACIES’ Industry Leaders.</p>
                </div>
                <div className='g-consult'>
                   <img className='g-image1' src='https://d1m75rqqgidzqn.cloudfront.net/wp-data/2022/03/16180754/software-engineer-job-skills-1.jpg' alt='engineering'/>
                   <h4 className='g-content'>Engineering</h4>
                   <p className='g-para'>Discover and Leverage the latest technologies and advanced solutions, custom-made for your business.</p>
                </div>
                <div className='g-consult'>
                   <img className='g-image1' src='https://cdn.create.vista.com/api/media/small/39356305/stock-photo-future-touchscreen-interface-with-hand' alt='execution'/>
                   <h4 className='g-content'>Execute</h4>
                   <p className='g-para'>People, processes, and powerful innovations! - Explore the amalgamation of tools & talents.</p>
                </div>
              
            </div> */}
            <div>
                    <h1 className='partners'>Technology Partners</h1>
            </div>
            <div className='container'>
              
            <Slider {...settings}>
                <div>
                <img src='https://www.eitacies.com/assets/img/partners/new/oracle-cloud.svg' alt='oracle'/>
                </div>
                <div>
                <img src='https://www.eitacies.com/assets/img/partners/new/google-cloud.svg' alt='google'/>
                </div>
                <div>
                <img src='https://www.eitacies.com/assets/img/partners/new/private-cloud.svg' alt='cloud'/>
                </div>
                <div>
                <img src='https://www.eitacies.com/assets/img/partners/new/workato.svg' alt='workato'/>
                </div>
                <div>
                <img src='https://www.eitacies.com/assets/img/partners/new/aws.svg' alt='amazon'/>
                </div>
                <div>
                <img src='https://www.eitacies.com/assets/img/partners/new/ibm-cloud.svg' alt='ibm-cloud'/>
                </div>
                <div>
                <img src='https://www.eitacies.com/assets/img/partners/new/microsoft-azure.svg' alt='azure'/>
                </div>
            </Slider>
          </div> 
         <div>
            <h1 className='partners'>Our Clients</h1>
         </div>  
         <div className='container'>
            <Slider {...settings}>
                <div className='img-container1'>
                <img src='https://www.eitacies.com/assets/img/partners/new/kohls.svg' alt='kohls'/>
                </div>
                <div className='img-container1'>
                <img className='citi-image' src='https://www.eitacies.com/assets/img/partners/new/citibank.svg' alt='citibank'/>
                </div>
                <div className='img-container1'>
                <img src='https://www.eitacies.com/assets/img/partners/new/shop-nbc.svg' alt='shop-nbc'/>
                </div>
                <div className='img-container1'>
                <img src='https://www.eitacies.com/assets/img/partners/new/paloalto.svg' alt='paloalto'/>
                </div>
                <div className='img-container1'>
                <img src='https://www.eitacies.com/assets/img/partners/new/fedility.svg' alt='fedility'/>
                </div>
                <div className='img-container1'>
                <img src='https://www.eitacies.com/assets/img/partners/new/citibank.svg' alt='citibank'/>
                </div>
                
            </Slider>
         </div> 
         <h1 className='amazing-heading'>Amazing EITACIES Customers and Users Testimonials</h1>
         <div className='container'>
          <Slider {...settings1}>
            <div>
              <p>
                Exemplary - that's how I'd describe Eitacies' contribution and dedication. 
                They're just a team of perfectionists, who leave no stones unturned when it 
                comes to offering solutions. I had the pleasure of working with their offshore 
                team, who managed our project and rendered the deliverables well before the 
                stated time frame! If you are new to the tech space, go ahead and chat with 
                the team, they'll figure out everything on your behalf!
              </p>
              <img src='https://www.eitacies.com/assets/img/home/hand.svg' alt='hand-image'/>
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
            </div>
            </Slider>
         </div>
         <div className='cards-container'>
           <h1 className='stories'>Stories</h1>
           <div className='container'>
          <Slider {...settings2}>
            
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
          <h3 className='started'>Ready To Get Started ?</h3>
         <button className='btn btn-primary button1'>Submit</button>
         </div>
        </div>
        );
    }
}

export default Header;

