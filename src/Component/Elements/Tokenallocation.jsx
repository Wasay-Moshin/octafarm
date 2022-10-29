import React from "react";

function Tokenallocation() {
  return (
    <div className="tokenallocation">
      <div className="container">
        <div className="row">
          <div>
            <h1 style={{ color: "white" }}>Token Allocation</h1>
          </div>
          <div className="col-md-3 mt-3">
            <div className="text-center">
              <p>Ticker</p>
              <h1>OCTF</h1>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="text-center">
              <p>Network</p>
              <h1>BSC</h1>
            </div>
          </div>{" "}
          <div className="col-md-3 mt-3">
            <div className="text-center">
              <p>Total Fixed Supply</p>
              <h1>10 Million</h1>
            </div>
          </div>{" "}
          <div className="col-md-3 mt-3">
            <div className="text-center">
              <p>Emission</p>
              <h1>2 Years</h1>
            </div>
          </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-6">

            </div>
            <div className="col-md-6 mt-5">
                <img  className="img-fluid" src="Assests/app.png" alt="" />

            </div>

        </div>
      </div>
    </div>
  );
}

export default Tokenallocation;
