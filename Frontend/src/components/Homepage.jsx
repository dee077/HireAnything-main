import React from 'react';

const Homepage = ({ title, subtitle, description, buttonText, buttonLink, imgSrc }) => {
  return (
    <section className="home-about-area">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6 col-md-12 home-about-left">
            <h1>
              {title} <br />
              {subtitle} <br />
              We‘ll make it for you
            </h1>
            <p>{description}</p>
            <a href={buttonLink} className="primary-btn text-uppercase mb-5">{buttonText}</a>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 home-about-right ">
            <img className="img-fluid abtimg" src={imgSrc} alt="About Us" />
          </div>
        </div>
    </section>
  );
};

export default Homepage;
