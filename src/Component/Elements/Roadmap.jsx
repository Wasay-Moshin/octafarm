import React from "react";

function Roadmap() {
  return (
    <div className="roadmap">
      <div className="container-fluid mt-5">
        <div className="road-line mt-5">
          <div className="road-circle">
            <span className="dot"></span>
            <div className="road-img"></div>
          </div>
          <div className="road-text">
            <div>
              <p>Highfield</p>
              <ul>
                <li>Protocol Development</li>
                <li>Documentation</li>
                <li>Testnet</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="road-line mt-5 ">
          <div className="road-circle">
            <span className="dot"></span>
            <div className="road-img1"></div>
          </div>
          <div className="road-text1">
            <div>
              <ul>
                <li>Token Generating Event</li>
                <li>Audit</li>
              </ul>
              <p>Heave</p>
            </div>
          </div>
        </div>
        <div className="road-line mt-5">
          <div className="road-circle">
            <span className="dot"></span>
            <div className="road-img"></div>
          </div>
          <div className="road-text">
            <div>
              <p>Frigate</p>
              <ul>
                <li>Protocol Launch</li>
                <li>Governance</li>
                <li>Partnerships</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="road-line mt-5">
          <div className="road-circle">
            <span className="dot"></span>
            <div className="road-img1"></div>
          </div>
          <div className="road-text1">
            <div>
              <ul>
                <li>Maximizer Pools</li>
                <li>Strategy Builder</li>
              </ul>
              <p>Armor</p>
            </div>
          </div>
        </div>
        <div className="road-line mt-5">
          <div className="road-circle">
            <span className="dot"></span>
            <div className="road-img"></div>
          </div>
          <div className="road-text">
            <div>
              <p>Ensign</p>
              <ul>
                <li>Multi-Token Maximizer</li>
                <li>User Dashboard</li>
              </ul>
            </div>
          </div>
       
        </div>   
      </div>
    </div>
  );
}

export default Roadmap;
