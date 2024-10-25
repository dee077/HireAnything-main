import React from 'react';
import { Helmet } from 'react-helmet';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const websiteName = "Hire Anything"; // Replace with your website name

  return (
    <>
      {/* Start Footer Area */}
      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            {/* About Section */}
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="single-footer-widget">
                <h6>About Agency</h6>
                <p>
                  The world has become so fast-paced that people don’t want to stand by reading a page of information; they would much rather look at a presentation and understand the message.
                </p>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="single-footer-widget">
                <h6>Newsletter</h6>
                <p>
                  For business professionals caught between high OEM price and mediocre print and graphic output.
                </p>
              </div>
            </div>

            {/* InstaFeed Section */}
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="single-footer-widget mail-chimp">
                <h6 className="mb-20">InstaFeed</h6>
                <ul className="instafeed d-flex flex-wrap">
                  <li><img src="img/i1.jpg" alt=""/></li>
                  <li><img src="img/i2.jpg" alt=""/></li>
                  <li><img src="img/i3.jpg" alt=""/></li>
                  <li><img src="img/i4.jpg" alt=""/></li>
                  <li><img src="img/i5.jpg" alt=""/></li>
                  <li><img src="img/i6.jpg" alt=""/></li>
                  <li><img src="img/i7.jpg" alt=""/></li>
                  <li><img src="img/i8.jpg" alt=""/></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
            <p className="copyright">
              © {currentYear} {websiteName}. All rights reserved.
            </p>

            <div className="footer-social d-flex align-items-center">
              <a href="https://www.facebook.com/profile.php?id=61565067325640&sk=photos">
                <i className="fa fa-facebook"></i>acebook
              </a>
              {/* Add more social icons if needed */}
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer Area */}

      {/* Load external scripts using Helmet */}
      <Helmet>
        <script src="js/vendor/jquery-2.2.4.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/vendor/bootstrap.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>
        <script src="js/jquery-ui.js"></script>
        <script src="js/easing.min.js"></script>
        <script src="js/hoverIntent.js"></script>
        <script src="js/superfish.min.js"></script>
        <script src="js/jquery.ajaxchimp.min.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="js/jquery.nice-select.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/mail-script.js"></script>
        <script src="js/main.js"></script>
      </Helmet>
    </>
  );
}
