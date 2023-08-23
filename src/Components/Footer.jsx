import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook ,FaTwitter,FaGoogle,FaGithub} from "react-icons/fa6";

export default function Footer() {
  return (
    <div class="footer">
      <div class="p1">
        <div class="log">
          <h1> MA-4</h1>
        </div>
        <div className="icon">
          <ul>
            <Link to="https://www.facebook.com">
              <li>
                <FaFacebook />
              </li>
            </Link>
            <Link to="https://twitter.com/?lang=ar">
            <li>
              <FaTwitter />
            </li>
          </Link>
          <Link to="https://www.gmail.com">
          <li>
            <FaGoogle />
          </li>
        </Link>
        <Link to="https://github.com/Ovi/DummyJSON">
        <li>
          <FaGithub />
        </li>
      </Link>
          </ul>
          <h6>&copy; copyright All rights reserves</h6>
        </div>
      </div>
      <div className="p2">
        <div className="cont">
        <h3>WEEBLY THEMES</h3>
        <h3>PRE-SALE FAQS</h3>
        <h3>SUBMIT A TRICKET</h3>

        </div>
        <div className="cont">
        <h3>SERVICES</h3>
        <h3>TEAM WORK</h3>
        <h3>SHOPPING</h3>
        </div>
        <div className="cont">
        <h3>ABOUT US</h3>
        <h3>CONTACT US</h3>
        <h3>AFFILIATES</h3>
        <h3>RESOURCES</h3>
        </div>
      </div>
      
    </div>
  );
}
