import React from "react";
function Gateway() {
  return (
    <div className="gateway">
      <div className="container">
        <div className="text-center">
          <h3>EASIEST GATEWAY TO</h3>
          <h1>Cross-Chain Yield Farming For All</h1>
          <p>
            Octafarm will be deployed on various blockchain networks so anyone
            can access supercharged yields seamlessly cross-chain, thereby
            maximizing opportunities to access the highest yields.
          </p>
        </div>
        <div className="row mt-5">
          <div className="col">
            <div>
              <h6>
                Binance
                <img
                  className="img-fluid"
                  src="Assests/BSC.svg"
                  alt=""
                  width={"60px"}
                />
              </h6>
            </div>
            <div className="mt-5">
              <h6>
                Polygon
                <img
                  className="img-fluid"
                  src="Assests/polygon.svg"
                  alt=""
                  width={"60px"}
                />
              </h6>
            </div>
            <div className="mt-5">
              <h6>
                Moonbeam
                <img
                  className="img-fluid"
                  src="Assests/moon.svg"
                  alt=""
                  width={"60px"}
                />
              </h6>
            </div>
            <div className="mt-5">
              <h6>
                Avalanche
                <img
                  className="img-fluid"
                  src="Assests/AVAX.svg"
                  alt=""
                  width={"60px"}
                />
              </h6>
            </div>
          </div>
          <div className="col bg1 mt-3"></div>
          <div className="col">
            <div className="octa">
              <img
                className="img-fluid"
                src=" Assests/octa1.svg"
                alt=""
                width={"100%"}
              />
            </div>
          </div>
          <div className="col bg2"></div>
          <div className="col mt-4">
            <div className="list">
              <span className="sp1">PancakeSwap Vaults</span>
            </div>
            <div className="list">
              <span className="sp1">QuickSwap Vaults</span>
            </div>
            <div className="list">
              <span className="sp1 ">SolarBeam Vaults</span>
            </div>
            <div className="list">
              <span className="sp1">Trader Joe Vaults</span>
            </div>
          </div>
          <div className="col bg3"></div>
          <div className="col mt-5">
            <div className="list-2">
              <div className="list">
                <span className="sp1 ">QuickSwap Vaults</span>
              </div>
              <div className="list">
                <span className="sp1">SolarBeam Vaults</span>
              </div>
              <div className="list">
                <span className="sp1 px-4">Trader Joe Vaults</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gateway;
