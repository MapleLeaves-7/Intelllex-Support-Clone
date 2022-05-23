import logo from '../images/intelllex-reversed-logo.png';
import { ReactComponent as TwitterIcon } from '../images/twitter_icon.svg';
import { ReactComponent as FacebookIcon } from '../images/facebook_icon.svg';
import { ReactComponent as LinkedinIcon } from '../images/linkedin_icon.svg';

export function Footer() {
  return (
    <div>
      <div>
        <img src={logo} alt="Intelllex Logo" />
      </div>
      <div>
        <div>
          <div>
            <a href="https://intelllex.com/">Products & Services</a>
            <a href="https://intelllex.com/company">Meet the team</a>
          </div>
          <div>
            <h3>Contact us</h3>
            <div>
              <div>
                <p>For support issues:</p>
                <a href="mailto:support@intelllex.com">support@intelllex.com</a>
              </div>
              <div>
                <p>Contact sales:</p>
                <a href="mailto:contact@intelllex.com">contact@intelllex.com</a>
              </div>
            </div>
            <div>276A South Bridge Rd, Singapore 058825</div>
          </div>
          <div>
            <h3>Connect with us</h3>
            <div>
              <a href="https://www.facebook.com/intelllex/">
                <FacebookIcon />
              </a>
              <a href="https://sg.linkedin.com/company/intelllex">
                <LinkedinIcon />
              </a>
              <a href="https://twitter.com/intelllexhq">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        <div>
          <span>&copy; INTELLLEX</span>
          <a href="https://intelllex.com/privacy">Privacy</a>
          <span> | </span>
          <a href="https://intelllex.com/terms">Terms</a>
        </div>
      </div>
    </div>
  );
}
