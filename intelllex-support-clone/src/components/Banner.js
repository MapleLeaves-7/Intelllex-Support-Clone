import logo from '../images/intelllex-reversed-logo.png';
import { ReactComponent as NavSquareArrow } from '../images/nav-square-arrow.svg';

const Banner = () => {
  return (
    <div id="banner">
      <img src={logo} alt="Intelllex logo" width="50px" height="50px" />
      <h1>Intelllex</h1>
      <h2>| Support </h2>
      <div className="nav-to-intelllex">
        <NavSquareArrow
          className="nav-square-arrow"
          width="50px"
          height="50px"
        />
        Back to INTELLLEX
      </div>
      <div className="caption">Get more out of INTELLLEX</div>
    </div>
  );
};

export default Banner;
