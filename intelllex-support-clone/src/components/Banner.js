import logo from '../images/intelllex-reversed-logo.png';
import { ReactComponent as NavSquareArrow } from '../images/nav-square-arrow.svg';

export function Banner() {
  return (
    <div id="banner">
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="Intelllex logo" className="logo" />
          <h1 className="heading">Intelllex</h1>
        </div>
        <h2 className="subheading">Support</h2>
        <div className="nav-to-intelllex">
          <NavSquareArrow className="nav-square-arrow" />
          <a href="https://intelllex.com/">Back to INTELLLEX</a>
        </div>
      </div>
      <div className="caption">Get more out of INTELLLEX</div>
    </div>
  );
}
