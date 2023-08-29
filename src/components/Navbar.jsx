import "./Navbar.css";
import facebookIcon from "../assets/icons/facebook.png"
import instagramIcon from "../assets/icons/instagram.png"
import linkedinIcon from "../assets/icons/linkedin.png"
import pinterestIcon from "../assets/icons/pinterest.png"
import youtubeIcon from "../assets/icons/youtube.png"
import websiteLogo from "../assets/logos/websitelogo.png"
import searchIcon from "../assets/logos/searchicon.png"
import favouriteIcon from "../assets/logos/favourite.png"
import userIcon from "../assets/logos/user.png"
import cartIcon from "../assets/logos/cart.png"
import menuIcon from "../assets/icons/burgermenu.png"
import closeIcon from "../assets/icons/close.png"
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
      <>
        <div className="desktop">

        <header>
          <div className="header-top">
            <div className="header-top-main">
              <a href="#" target="_blank">
                <img src={facebookIcon} alt="Facebook"/>
              </a>

              <a href="#" target="_blank">
                <img src={instagramIcon} alt="Instagram"/>
              </a>

              <a href="#" target="_blank">
                <img src={linkedinIcon} alt="Linkedin"/>
              </a>

              <a href="#" target="_blank">
                <img src={pinterestIcon} alt="Pinterest"/>
              </a>

              <a href="#" target="_blank">
                <img src={youtubeIcon} alt="Youtube"/>
              </a>
            </div>
          </div>
          <div className="header-mid">
            <div className="header-mid-main">
              <Link to="/">
                <img src={websiteLogo} alt="Website name"/>
              </Link>
            </div>
          </div>
        </header>

        <nav className="header-bottom">
          <div className="header-bottom-left">
            <Link to={window.location.pathname + "?action=search"}> <img src={searchIcon} alt="Website name"/></Link>
          </div>

          <div className="header-bottom-mid">
            <ul>
              <Link to="/collection/all">
                <li>
                  <p>Shop All</p>
                </li>
              </Link>
              <Link to="/collection/serum">
                <li>
                  <p>Skin Care</p>
                  <div className="header-dropdown-menu">
                    <ul className="header-dropdown">
                      <Link to="/collection/serum">
                        <li>
                          <p>Face serum</p>
                        </li>
                      </Link>
                      <Link to="#">
                        <li>
                          <p>Option 2</p>
                        </li>
                      </Link>
                      <Link to="#">
                        <li>
                          <p>Option 3</p>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <p>BATH & BODY</p>
                  <div className="header-dropdown-menu">
                    <ul className="header-dropdown">
                      <Link to="#">
                        <li>
                          <p>Option 1</p>
                        </li>
                      </Link>
                      <Link to="#">
                        <li>
                          <p>Option 2</p>
                        </li>
                      </Link>
                      <Link to="#">
                        <li>
                          <p>Option 3</p>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <p>COMBO OFFERS</p>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <p>ABOUT US</p>
                  <div className="header-dropdown-menu">
                    <ul className="header-dropdown">
                      <Link to="#">
                        <li>
                          <p>Option 1</p>
                        </li>
                      </Link>
                      <Link to="#">
                        <li>
                          <p>Option 2</p>
                        </li>
                      </Link>
                      <Link to="#">
                        <li>
                          <p>Option 3</p>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <p>OUR BLOGS</p>
                </li>
              </Link>
            </ul>
          </div>

          <div className="header-bottom-right">
            <Link to="/user"> <img src={userIcon} alt="user"/></Link>
            <Link to="/favourite"> <img src={favouriteIcon} alt="favourite"/></Link>
            <Link to={window.location.pathname + "?action=cart"}><img src={cartIcon} alt="cart"/></Link>
          </div>
        </nav>
        </div>

        <div className="mobile">
          <header className="mobile-header-top">
            <Link to={window.location.pathname + "?action=menu"}>
              <img src={menuIcon} alt="Menu button"/>
            </Link>
            <img src={websiteLogo} alt="Website name"/>

            <div className="mobile-header-top-right">
              <Link to="/user"> <img src={userIcon} alt="user"/></Link>
              <Link to="/favourite"> <img src={favouriteIcon} alt="favourite"/></Link>
              <Link to={window.location.pathname + "?action=cart"}><img src={cartIcon} alt="cart"/></Link>
            </div>
          </header>

          <nav className="mobile-header-menu">
            <ul>
              <Link to="#">
                <li>
                  <p>Shop All</p>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <p>Skin Care</p>
                  <div className="mobile-header-submenu">
                    <ul>
                      <Link to="#">
                        <li>
                          <p>Option 1</p>
                        </li>
                      </Link>
                      <Link to="#">
                        <li>
                          <p>Option 2</p>
                        </li>
                      </Link>
                      <Link to="#">
                        <li>
                          <p>Option 3</p>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <p>BATH & BODY</p>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <p>COMBO OFFERS</p>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <p>ABOUT US</p>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <p>OUR BLOGS</p>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </>
  );
};

export default Navbar;
