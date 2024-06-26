import React from "react";
import { Link } from "react-router-dom";

function FooterPage(){
  return(
  
<section className="about-section footer">
      <h2 className="about-section__primary">
        <Link className="nav-link white" to="/">
          <img className="logo" src={"Carousel.jpg"} alt="Car Rentals" />
        </Link>
      </h2>
      <p>
        Car Rental Cameroon
        {' '}
        <br />
        +237 672-526-097
      </p>
      <p>
        Car Rentals
        { ' ' }
        {new Date().getFullYear()}
        . All rights reserved
      </p>
    </section>

  )
}
export default FooterPage();