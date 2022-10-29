import React from "react";

function Introduction() {
  return (
    <div className="introduction">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Invest The Right Way</h6>
            <h5>Supercharge Your Returns</h5>
            <span>Save Time & Gas Fees Through Automation</span>
          </div>
          <div className="col-md-4">
            <div className="card">
              <p>
                Highest Auto <br />
                Compounding Pools
              </p>
              <div className="text">
                {" "}
                <p className="one" style={{ color: "#59c9bd" }}>
                  {" "}
                  Upto
                  <br />
                  <span style={{ color: "white" }}>7000</span>
                  <span style={{ color: "white" }}>%</span>
                </p>
              </div>
              <div className="text-center">
                <p style={{ color: "#59c9bd" }}> Annual Percentage Yield </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <p>
                PROJECTED
                <br />
                Total Value Locked (TVL)
              </p>
              <div className="text">
                {" "}
                <span>
                  {" "}
                  $
                  <span style={{ color: "white" }}>5000</span>
                  <span style={{ color: "white" }}>%</span>
                </span>
              </div>
              <div className="text-center mt-3 mb-2">
                <p style={{ color: "#59c9bd" }}>Within 6 Months of Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
