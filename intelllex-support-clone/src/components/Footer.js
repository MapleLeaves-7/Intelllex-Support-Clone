import logo from '../images/intelllex-reversed-logo.png';
import { ReactComponent as TwitterIcon } from '../images/twitter_icon.svg';
import { ReactComponent as FacebookIcon } from '../images/facebook_icon.svg';
import { ReactComponent as LinkedinIcon } from '../images/linkedin_icon.svg';

export function Footer() {
  return (
    <div
      style={{ backgroundColor: '#1b2533' }}
      className="footer flex gap-16 px-24 py-14 font-primary text-gray-200 text-sm"
    >
      <div className="flex-grow">
        <img className="w-14 h-14" src={logo} alt="Intelllex Logo" />
      </div>
      <div style={{ flexGrow: '4' }}>
        <div className="flex gap-8 mb-12">
          <div>
            <a className="block mb-5" href="https://intelllex.com/">
              Products & Services
            </a>
            <a className="block" href="https://intelllex.com/company">
              Meet the team
            </a>
          </div>
          <div>
            <h3>Contact us</h3>
            <div className="flex flex-col gap-3 mb-14">
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
            <div className="flex gap-4">
              <a
                className="flex justify-center items-center w-10 h-10 bg-gray-500 rounded-full hover:bg-gray-400"
                href="https://www.facebook.com/intelllex/"
              >
                <FacebookIcon className="w-7 h-7" />
              </a>
              <a
                className="flex justify-center items-center w-10 h-10 bg-gray-500 rounded-full hover:bg-gray-400"
                href="https://sg.linkedin.com/company/intelllex"
              >
                <LinkedinIcon className="w-7 h-7" />
              </a>
              <a
                className="flex justify-center items-center w-10 h-10 bg-gray-500 rounded-full hover:bg-gray-400"
                href="https://twitter.com/intelllexhq"
              >
                <TwitterIcon className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <span className="mr-2 text-xs text-gray-300">&copy; INTELLLEX</span>
          <a href="https://intelllex.com/privacy">Privacy</a>
          <span className="mx-1"> | </span>
          <a href="https://intelllex.com/terms">Terms</a>
        </div>
      </div>
    </div>
  );
}
