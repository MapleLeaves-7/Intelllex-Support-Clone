import logo from '../images/intelllex-reversed-logo.png';
import { ReactComponent as NavSquareArrow } from '../images/nav-square-arrow.svg';

export function Banner() {
  return (
    <div>
      <div>
        <div>
          <img src={logo} alt="Intelllex logo" />
          <h1>Intelllex</h1>
        </div>
        <h2>Support</h2>
        <div>
          <NavSquareArrow />
          <a href="https://intelllex.com/">Back to INTELLLEX</a>
        </div>
      </div>
      <div>Get more out of INTELLLEX</div>
    </div>
  );
}
