import React from "react";

const NFT = () => {
  return (
    <section>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card-body">
              <div className="card text-white">
                <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-eaf5ndwlTCX_SJ6KxAGgKQOVTqWiSKzbnBXgFXDiDNhMl70s8RW8djqp7xOS4D8lH5k&usqp=CAU"
                  className="img-fluid"
                  alt="Apple Computer"
                />

                <div className="text-left">
                  <br />
                  <h5 className="card-title ">Equilibrium #3429</h5>
                  <p className="text-muted  text-black-50">
                    Our equilibrium collection promotes balance and calm.
                  </p>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span className="text-info">0.041ETH</span>
                    <span className="text-muted"> 3 days left</span>
                  </div>

                  <div className="d-flex justify-content-between">
                    <span className="text-dark">
                      ______________________________________________
                    </span>
                  </div>

                  <div className="d-flex justify-content-around total ">
                    <span className="text-info">Creation of </span>

                    <span className="text-muted"> Ankit Shiwakoti</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFT;
