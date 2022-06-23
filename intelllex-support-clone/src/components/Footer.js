import logo from '../images/intelllex-reversed-logo.png';
import { ReactComponent as TwitterIcon } from '../images/twitter_icon.svg';
import { ReactComponent as FacebookIcon } from '../images/facebook_icon.svg';
import { ReactComponent as LinkedinIcon } from '../images/linkedin_icon.svg';

export function Footer() {
  return (
    <footer className="flex flex-col gap-10 px-24 py-14 font-primary bg-midnight text-gray-200 text-sm md:flex-row">
      <div className="flex-grow flex-shrink-0">
        <img className="mt-0 w-14 h-14" src={logo} alt="Intelllex Logo" />
      </div>
      <div style={{ flexGrow: '10' }}>
        <div className="flex flex-col gap-8 mb-12 md:flex-row">
          {/* More information section */}
          <section className="flex-grow">
            <a className="block mb-5" href="https://intelllex.com/">
              Products & Services
            </a>
            <a className="block" href="https://intelllex.com/company">
              Meet the team
            </a>
          </section>

          {/* Contact us section */}
          <section className="flex-grow">
            <h3>Contact us</h3>
            <dl className="flex flex-col gap-3 mb-14">
              <dt>For support issues:</dt>
              <dd>
                <a href="mailto:support@intelllex.com">support@intelllex.com</a>
              </dd>
              <dt>Contact sales:</dt>
              <dd>
                <a href="mailto:contact@intelllex.com">contact@intelllex.com</a>
              </dd>
            </dl>
            <div>276A South Bridge Rd, Singapore 058825</div>
          </section>

          {/* Connect with us section */}
          <section className="flex-grow">
            <h3>Connect with us</h3>
            <div className="flex gap-4">
              <a
                className="social-icon"
                href="https://www.facebook.com/intelllex/"
              >
                <FacebookIcon />
              </a>
              <a
                className="social-icon"
                href="https://sg.linkedin.com/company/intelllex"
              >
                <LinkedinIcon />
              </a>
              <a className="social-icon" href="https://twitter.com/intelllexhq">
                <TwitterIcon />
              </a>
            </div>
          </section>
        </div>

        {/* Copyright section */}
        <section className="flex-grow">
          <span className="mr-2 text-xs text-gray-300">&copy; INTELLLEX</span>
          <a href="https://intelllex.com/privacy">Privacy</a>
          <span className="mx-1"> | </span>
          <a href="https://intelllex.com/terms">Terms</a>
        </section>
      </div>
    </footer>
  );
}
