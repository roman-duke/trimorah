import DropDown from "./dropdown";
import LinkedInIcon from "../../../assets/icons/linkedin";
import InstagramIcon from "../../../assets/icons/instagram";
import TwitterIcon from "../../../assets/icons/twitter";
import YouTubeIcon from "../../../assets/icons/youtube";
import './footer.scss';

export default function Footer() {

  return (
    <footer className="footer-section">
      <nav className="footer-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <DropDown title={<>Drones & Accessories</>}>
              <li>Optimus</li>
              <li>Bumble Bee</li>
            </DropDown>
          </li>

          <li className="nav-item">
            <DropDown title={<>Software</>}>
              <li>Dji Terra</li>
              <li>Pix4D</li>
              <li>DroneDeploy</li>
            </DropDown>
          </li>

          <li className="nav-item">
            <DropDown title={<>Industries</>}>
              <li>Agriculture</li>
              <li>Environmental Conservation</li>
            </DropDown>
          </li>

          <li className="nav-item">
            <DropDown title={<>Services</>}>
              <li>Precision Agriculture</li>
              <li>Aerial Mapping and Surveying</li>
            </DropDown>
          </li>

          <div className="newsletter-container">
            <a href="#">Subscribe</a>
            <p className="newsletter-text">Receive latest news about Trimorah</p>
            <div className="newsletter-form-container">
              <form className="newsletter-form">
                <label className="contact-label">
                  <input
                    className="input"
                    type="text"
                    name="email"
                    placeholder="richard@feynman.com"
                    autoComplete="on"
                  />
                </label>

                <button className="newsletter-btn" type="submit">Send</button>
              </form>
            </div>
          </div>
        </ul>
      </nav>

      <div className="socials">
        <LinkedInIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </div>

      {/* <div className="contact">
        <a href="tel:+2349077643548"><span className="number">+2349077643548</span></a>
        <span className="demarcation"></span>
        <a href="tel:+2349066675168"><span className="number">+2349066675168</span></a>
      </div> */}

      <section className="footer-footer">

        <div className="policies">
          <span className="policy">Privacy Policy</span>
          <span className="demarcation"></span>
          <span className="policy">Terms & Conditions</span>
          <span className="demarcation"></span>
          <span className="policy">Legal</span>
        </div>

        <div className="credit">
          <span>2023 © All rights reserved to Trimorah</span>
          <span>Developed by Gravenite</span>
        </div>
      </section>
    </footer>
  )
}
