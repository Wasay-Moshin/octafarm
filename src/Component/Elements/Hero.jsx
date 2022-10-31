import React from "react";

function Hero() {
  return (
    <div className="hero position-relative">
      <div className="h-img position-absolute">
        <img className="img-fluid" src="Assests/octa-bg.png" alt="" />
      </div>
      <div className="container bg">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h1>
                Maximize Staking Returns
                <br />
                with Auto-Compounding
              </h1>
              <h3>
                Automate your DeFi reinvestment with Octafarm to compound your
                returns even when you sleep!
              </h3>
            </div>
            <div>
              <button class="btn btn-primary">Buy on Pancakeswap</button>
            </div>
            <div className="mt-3">
              <code>
                Official Contract: 0x04d4F38Dcdfe976Cb325dB16b868F0020104014e
              </code>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="mt-3">
                  <button class="btn btn-outline-primary"> Launch App</button>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="mt-3">
                  <button type="button" class="btn btn-outline-primary">
                    {" "}
                    Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <video controls src="" width={"100%"}></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
