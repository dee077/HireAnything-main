import React from 'react';
import user1 from './img/elements/user1.png'; // Correct path to image
import user2 from './img/elements/user2.png'; // Correct path to image


export default function Testimonial() {
  return (
    <>
      <section className="testimonial-area section-gap">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-30 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">Testimonial from our Clients</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur aom</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="active-testimonial">
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <img className="img-fluid" src={user1} alt="User 1" />
                </div>
                <div className="desc">
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur a"Lorem ipsum dolor sit amet, consectetur a you put into improving your skills, the bigger the payoff you.
                  </p>
                  <h4>Harriet Maxwell</h4>
                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <img className="img-fluid" src={user2} alt="User 2" />
                </div>
                <div className="desc">
                  <p>
                    A purpose is t"Lorem ipsum dolor sit amet, consectetur ap smoking cigarettes. However.
                  </p>
                  <h4>Carolyn Craig</h4>
                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <img className="img-fluid" src={user1} alt="User 1" />
                </div>
                <div className="desc">
                  <p>
                    Do you wan"Lorem ipsum dolor sit amet, consectetur a"Lorem ipsum dolor sit amet, consectetur at into improving your skills, the bigger the payoff you.
                  </p>
                  <h4>Harriet Maxwell</h4>
                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <img className="img-fluid" src={user2} alt="User 2" />
                </div>
                <div className="desc">
                  <p>
                    A purpose is"Lorem ipsum dolor sit amet, consectetur agarettes. However.
                  </p>
                  <h4>Carolyn Craig</h4>
                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <img className="img-fluid" src={user1} alt="User 1" />
                </div>
                <div className="desc">
                  <p>
                    Do"Lorem ipsum dolor sit amet, consectetur art you put into improving your skills, the bigger the payoff you.
                  </p>
                  <h4>Harriet Maxwell</h4>
                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <img className="img-fluid" src={user2} alt="User 2" />
                </div>
                <div className="desc">
                  <p>
                    A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes. However.
                  </p>
                  <h4>Carolyn Craig</h4>
                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
