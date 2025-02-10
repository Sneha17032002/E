import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0 fs-5">Connect with us:</p>

            {/* Social Media Icons */}
            <a className="text-dark fs-4 mx-3" href="https://instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
            <a className="text-dark fs-4 mx-3" href="https://facebook.com/YOUR_FACEBOOK" target="_blank" rel="noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a className="text-dark fs-4 mx-3" href="https://twitter.com/YOUR_TWITTER" target="_blank" rel="noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a className="text-dark fs-4 mx-3" href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
