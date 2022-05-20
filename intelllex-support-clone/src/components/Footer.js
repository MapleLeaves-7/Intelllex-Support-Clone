import logo from '../images/intelllex-reversed-logo.png';
import { ReactComponent as TwitterIcon } from '../images/twitter_icon.svg';
import { ReactComponent as FacebookIcon } from '../images/facebook_icon.svg';
import { ReactComponent as LinkedinIcon } from '../images/linkedin_icon.svg';

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Intelllex Logo" />
      </div>
      <div className="footer-content">
        <div className="footer-row">
          <div className="moreinfo footer-column">
            <a className="footer-heading-link" href="https://intelllex.com/">
              Products & Services
            </a>
            <a
              className="footer-heading-link"
              href="https://intelllex.com/company"
            >
              Meet the team
            </a>
          </div>
          <div className="footer-column">
            <h3>Contact us</h3>
            <div className="email-links">
              <div className="email">
                <p>For support issues:</p>
                <a href="mailto:support@intelllex.com">support@intelllex.com</a>
              </div>
              <div className="email">
                <p>Contact sales:</p>
                <a href="mailto:contact@intelllex.com">contact@intelllex.com</a>
              </div>
            </div>
            <div className="address">
              276A South Bridge Rd, Singapore 058825
            </div>
          </div>
          <div className="social footer-column">
            <h3>Connect with us</h3>
            <div className="social-icons-section">
              <a
                className="social-icon-link"
                href="https://www.facebook.com/intelllex/"
              >
                <FacebookIcon className="social-icon" />
              </a>
              <a
                className="social-icon-link"
                href="https://sg.linkedin.com/company/intelllex"
              >
                <LinkedinIcon className="social-icon" />
              </a>
              <a
                className="social-icon-link"
                href="https://twitter.com/intelllexhq"
              >
                <TwitterIcon className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <span className="copyright">&copy; INTELLLEX</span>
          <a href="https://intelllex.com/privacy">Privacy</a>
          <span className="copyright-divider"> | </span>
          <a href="https://intelllex.com/terms">Terms</a>
        </div>
      </div>
    </div>
  );
}
