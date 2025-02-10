import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="https://eskipaper.com/images/shopping-wallpaper-4.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container text-center">
              <div 
                className="p-3 mb-2" 
                style={{ backgroundColor: "pink", display: "inline-block", borderRadius: "10px" }}
              >
                <h5 className="card-title fs-1 fw-lighter">
                  Fresh Trends, Just In!
                </h5>
              </div>
              <br />
              <div 
                className="p-3 mt-2" 
                style={{ backgroundColor: "pink", display: "inline-block", borderRadius: "10px" }}
              >
                <p className="card-text fs-5 d-none d-sm-block">
                  Discover the latest fashion and jewelry collections, handpicked just for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
