import React from "react";

function Media() {
  return (
    <div className="media">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <div className="img1">
              <img src="Assests/Media1.webp" alt="" width={"200px"} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="img1">
              <img src="Assests/m2.png" alt="" width={"200px"} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="img1">
              <img src="Assests/m3.svg" alt="" width={"200px"} />
            </div>
          </div>
        </div>
        <hr style={{color:"white"}}/>
        <div className="row">
          <div className="col-md-4">
            <div className="img1">
              <img src="Assests/m4.png" alt="" width={"200px"} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="img1">
              <img src="Assests/m5.png" alt="" width={"200px"}  />
            </div>
          </div>
          <div className="col-md-4">
            <div className="img1">
              <img src="Assests/m6.png" alt="" width={"200px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;
