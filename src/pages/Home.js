import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { FaInstagram, FaFacebook, FaGoogle, FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import ContactUs from "./ContactUs";

function Home(){
    return(
        <div>
          

  {/* <div class="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000" >
      <img src="/images/home1.jpg" class="d-block w-100" alt="img1" height={670}/>
      <div className="carousel-caption d-none d-md-block mt-1">
        <div id="colors">
        <h5>Unbeatable Price</h5>
        <h5 >Rent-A-Car Experts</h5>
        <p>4.48 / 5 by 227244 customers</p>

        </div>
      
      </div>
    </div>
    
  </div> */}
<div id="header1">
          <DefaultLayout>             
            </DefaultLayout>
          </div>
<div class="content">

  <div id="content1">
  <h1 >Unbeatable Price</h1>
        <h1 >Rent-A-Car Experts</h1>
        <h5>4.0 / 5 <FaStar id="star"/><FaStar id="star"/><FaStar id="star"/><FaStar id="star"/><FaStar /> by 2744 customers</h5>
        <h5>175 cars in 20 locations inside Nepal!</h5>
  </div>

  <div className="flexing">
    <h1 id="search">Search for a car Rental!</h1>
    <form class="d-flex " role="search" id="layout2">
     <input class="form-control me-2" type="search" placeholder="Search"  id="searchbar" aria-label="Search"/>
     <button class="btn btn-outline-success" type="submit">Search</button>
     </form>
     <h6 className="ps-5 pt-2">Note: Insurance Provided</h6>
  </div>
        
    </div>

<section className="about-section" id="about-section">
      <h4 className="about-section__sub">Comfort is Priceless</h4>
      <h2 className="about-section__primary pb-4">
        Comfortable rides from reliable and experienced people
      </h2>
      <Row className="mt-5">
        <Col sm={6}>
          <h4 className="about-section__left-title">
            A ride is always available for you 24/7
          </h4>
          <p className="about-section__desc">
            We are a car rental service available to you 24/7. We provide the most
            confortable and cheapest rides in the country. Hook us up for your trips and
            get the best confort can offer.
          </p>
          <p>
            <a href="#register" className="btn btn-oval">
              Learn more
            </a>
          </p>
        </Col>
        <Col sm={6}>
          <img src="/images/carousel.jpg" className="img-fluid" alt="ride" />
        </Col>
      </Row>
    </section>

    <div className="background1" id="background2">
        
        <div class="second">
            <h2 >Popular Destinations</h2>
            </div> 
            <div class="main-div">
            <div class="flex1">
            <img src={'/images/pokharaa.jpg'} className="img-thumbnail" id="profile2"/>
                <h1>Pokhara</h1> 
                <p>Pokhara. Pokhara ticks all the right boxes, with spectacular scenery, adventure activities, and accommodation and food choices galore. Whether you've returned from a three-week trek or endured a bus trip from hell, Lakeside Pokhara is the perfect place to recharge your batteries. </p>
            </div>
            <div class="flex1">
            <img src={'/images/janakpur.jpg'} className="img-thumbnail" id="profile2"/>
                <h1>Janakpur</h1> 
                <p>During the Treta Yug/ period about 12,000 years ago Janakpur used to be the capital of King Janak's Kingdom of Mithila. Janakpur the birthplace of Janaki or Sita, the consort of Lord Ram, is an important religious pilgrimage site in the Terai plains, in south central Nepal.</p>
            </div>
            <div class="flex1 ">
            <img src={'/images/rara.jpg'} className="img-thumbnail" id="profile2"/>
                <h1>Rara</h1> 
                <p>Rara Lake is known as the Queen of the Lakes. It is beautifully situated at 2990 meters above sea level in western Nepal and is surrounded by the Rara national park. You can explore this largest lake in Nepal, surrounded by huge white peaks and surrounded by pine forests.</p> 
            </div>
            <div class="flex1">
            <img src={'/images/illam.jpg'} className="img-thumbnail" id="profile2"/>
                <h1>Illam</h1>
                <p>Ilam is a district in the Eastern part of Nepal, famous for its beautiful tea gardens, breathtaking landscapes. In just an hour's drive on the East West Highway, one can reach Kanyam, which offers mesmerizing landscape views and a pleasant weather throughout the year.</p>
            </div>                      
            </div>         
    </div>
    <div>
    <img src={'/images/app.jpg'} className="img-thumbnail"/>
    </div>


    <section className="call-action">
      <h4>Be where you want to be on time with our comfortable rides</h4>
      <p>
        <Link className="btn btn-oval" to="/displayproducts">Book your ride</Link>
      </p>
    </section> 

    <div>
    <ContactUs ></ContactUs> 
    </div>
     

<section className=" footer" id="footer_background">
  <div>
  <h3 className="__primary ms-5 ">
        <Link className="nav-link white" to="/">
          <img className="logo" id="footer_logo" src="/images/logo.png" alt="Car Rentals" />
        </Link>
      </h3>
  </div>
      <div className="me-5 ms-5 mt-4">
      <h6>
        Hop-In | Maitidevi, Kathmandu, Nepal, Phone No: +977-9845763293, +977-9801284762
       </h6>
      
      <h6>
        Hop-In
        { ' ' }
        {new Date().getFullYear()}
        . All rights reserved
      </h6>
      </div>
      <div className=" mp-5 mt-4">
        <h6>Find us on:</h6>
        <h5 className="ms-5"><FaInstagram />  <FaFacebook/> <FaGoogle/></h5>

      </div>
      
    </section>
    

{/* <div class="map">
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7079.624428575919!2d153.016397!3d-27.475105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a0835840a2f%3A0xdd5e3f5c208dc0e1!2sMelbourne%20St%2C%20South%20Brisbane%20QLD%204101%2C%20Australia!5e0!3m2!1sen!2sin!4v1625244217588!5m2!1sen!2sin" width="1500" height="450" style="border:0;" allowfullscreen="" loading="lazy">
    </iframe>
   </div> */}
   



        </div>
        
    )
}
export default Home;