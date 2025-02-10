import React from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to <strong>Fuzzy Trends</strong>, your go-to destination for the latest fashion trends! We specialize in elegant women’s clothing and stunning jewelry, curated to enhance your style and confidence.
          <br /><br />
          At <strong>Fuzzy Trends</strong>, we believe fashion is more than just clothing—it's a statement. Our collections are designed to bring you high-quality, chic, and trendy pieces that suit every occasion. Whether you're looking for casual wear, evening elegance, or eye-catching accessories, we have it all.
          <br /><br />
          We are committed to providing a seamless shopping experience with top-notch customer service and fashion that keeps you ahead of the curve.
          <br /><br />
          Thank you for choosing <strong>Fuzzy Trends</strong>—where style meets sophistication!
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/6311393/pexels-photo-6311393.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Women's Clothing" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/285173/pexels-photo-285173.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jewelry" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelry</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/994524/pexels-photo-994524.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Accessories" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Accessories</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
