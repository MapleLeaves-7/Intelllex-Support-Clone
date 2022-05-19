import Logo from '../images/intelllex-reversed-logo.png';
import { ReactComponent as TwitterIcon } from '../images/twitter_icon.svg';
import { ReactComponent as FacebookIcon } from '../images/facebook_icon.svg';
import { ReactComponent as LinkedinIcon } from '../images/linkedin_icon.svg';

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img className="logo" src={Logo} alt="Intelllex Logo" />
      </div>
      <div className="footer-content">
        <div>
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
        <div className="contact-info">
          <div className="email">
            <p>For support issues:</p>
            <a className="email-link" href="mailto:support@intelllex.com">
              support@intelllex.com
            </a>
          </div>
          <div className="email">
            <p>Contact sales:</p>
            <a className="email" href="mailto:contact@intelllex.com">
              contact@intelllex.com
            </a>
          </div>
        </div>
        <div>
          <div className="text-block">
            <p>Connect with us</p>
            <a href="https://www.facebook.com/intelllex/">
              <FacebookIcon className="social-icon" />
            </a>
            <a href="https://sg.linkedin.com/company/intelllex">
              <LinkedinIcon className="social-icon" />
            </a>
            <a href="https://twitter.com/intelllexhq">
              <TwitterIcon className="social-icon" />
            </a>
          </div>
          <div className="text-block">
            <div>276A South Bridge Rd, Singapore 058825</div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <span>&copy; INTELLLEX</span>
        <a className="footer-link" href="https://intelllex.com/privacy">
          Privacy
        </a>
        <span> | </span>
        <a className="footer-link" href="https://intelllex.com/terms">
          Terms
        </a>
      </div>
    </div>
  );
}
