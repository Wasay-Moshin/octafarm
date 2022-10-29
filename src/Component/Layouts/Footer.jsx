import React from "react";
import { BsGithub } from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsTelegram} from "react-icons/bs"
import {FaInstagramSquare} from "react-icons/fa"
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div>
              <p>COMPANY</p>
            </div>
            <div>
              <ul className="list-unstyled">
                <li>Bug Bounty</li>
                <li>Jobs / Career</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <p>DEVELOPER</p>
            </div>
            <div>
              <ul className="list-unstyled">
                <li>Octa Farm Documentation</li>
                <li>Explore Github</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <p>COMMUNITY</p>
            </div>
            <div>
              <ul className="list-unstyled">
                <li>Telegram</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <p>LEGAL</p>
            </div>
            <div>
              <ul className="list-unstyled">
                <li>Privacy & Terms</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="pt-3 pb-3" style={{ color: "#6d8bb0" }} />
        <div className="row">
          <div className="col-md-4">
            <div>
              <img src="Assests/octa-logo.png" alt="" width={"150px"} />
            </div>
          </div>
          <div className="col-md-4 text-center">
            <p style={{color:"#6d8bb0"}}>© 2021-22 Octa Farm. All rights reserved.</p>
          </div>
          <div className="col-md-4 text-end rc">
            <BsGithub size={"30px"} color={"#69EFDC"} />
            <AiFillTwitterCircle size={"35px"} color={"#69EFDC"} />
            <BsTelegram size={"30px"} color={"#69EFDC"} />
            <FaInstagramSquare size={"30px"} color={"#69EFDC"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
