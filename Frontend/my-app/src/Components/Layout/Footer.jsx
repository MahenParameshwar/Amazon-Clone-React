import React from "react";
import "../../Styles/footer.css"


function Footer(props) {
    
   
 
  return (
    <div className="footer">
      <div className="footer__links">
        <div className="footer_links_container">
        <div className="footer__linksColumn">
          <ul>
            <li className="font-bold mb-1 footer__listParent">
              Let Us Help You
            </li>
            
              <li className="text-sm footer__listChild">Amazon and COVID-19</li>
              <li className="text-sm footer__listChild">Your Account</li>
              <li className="text-sm footer__listChild">Your Orders</li>
              <li className="text-sm footer__listChild">
                Shipping Rates & Policies
              </li>
              <li className="text-sm footer__listChild">
                Returns & Replacements
              </li>
              <li className="text-sm footer__listChild">
                Manage Your Content and Devices
              </li>
              <li className="text-sm footer__listChild">Amazon Assistant</li>
              <li className="text-sm footer__listChild">Help</li>
            
          </ul>
        </div>
        <div className="footer__linksColumn">
          <ul>
            <li className="font-bold mb-1 footer__listParent">
              Make Money with Us
              
            </li>
           
              <li className="text-sm footer__listChild">
                Sell products on Amazon
              </li>
              <li className="text-sm footer__listChild">Sell apps on Amazon</li>
              <li className="text-sm footer__listChild">Become an Affiliate</li>
              <li className="text-sm footer__listChild">
                Advertise Your Products
              </li>
              <li className="text-sm footer__listChild">
                Self-Publish with Us
              </li>
              <li className="text-sm footer__listChild">Host an Amazon Hub</li>
              <li className="text-sm footer__listChild">
                See More Make Money with Us
              </li>
           
          </ul>
        </div>
        <div className="footer__linksColumn">
          <ul>
            <li className="font-bold mb-1 footer__listParent">
              Amazon Payment Products
              
            </li>
           
              <li className="text-sm footer__listChild">
                Amazon Business Card
              </li>
              <li className="text-sm footer__listChild">Shop with Points</li>
              <li className="text-sm footer__listChild">Reload Your Balance</li>
              <li className="text-sm footer__listChild">
                Amazon Currency Converter
              </li>
            
          </ul>
        </div>
        <div className="footer__linksColumn">
          <ul>
            <li className="font-bold mb-1 footer__listParent">
              Get to Know Us
            </li>
           
              <li className="text-sm footer__listChild">Careers</li>
              <li className="text-sm footer__listChild">Blog</li>
              <li className="text-sm footer__listChild">About Amazon</li>
              <li className="text-sm footer__listChild">Sustainability</li>
              <li className="text-sm footer__listChild">Investor Relations</li>
              <li className="text-sm footer__listChild">Amazon Devices</li>
              <li className="text-sm footer__listChild">Amazon Tours</li>
           
          </ul>
        </div>
      </div>
      </div>
      <div className="footer__tradeMark ">
        <div className="footer__logoContainer">
          <img className="footer__logo ml-2" src={"/img/logo.png"} alt="" />
        </div>
        <a href="/#" className="footer__legal">
          Conditions of Use
        </a>
        <a href="/#" className="footer__legal">
          Privacy Notice
        </a>
        <a href="/#" className="footer__legal">
          Interest-Based Ads
        </a>
        <span className="footer__iso">
          © 1996-2020, Amazon.com, Inc. or its affiliates
        </span>
      </div>
    </div>
  );
}


export default Footer;