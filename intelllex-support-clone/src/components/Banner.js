import logo from '../images/intelllex-reversed-logo.png';
import { ReactComponent as NavSquareArrow } from '../images/nav-square-arrow.svg';

export function Banner() {
  return (
    <div
      style={{
        background: 'linear-gradient(to right,#2a4072 0, #4c78db)',
      }}
      className="pt-10 px-20 pb-9 text-white"
    >
      <div className="flex items-center font-banner mb-10">
        <div className="flex items-center">
          <img className="w-12 h-12 mr-4" src={logo} alt="Intelllex logo" />
          <h1
            style={{ letterSpacing: '0.4rem' }}
            className="font-banner uppercase text-3xl pr-6"
          >
            Intelllex
          </h1>
        </div>
        <h2
          style={{ borderLeft: '3px solid', fontSize: '1.68rem' }}
          className="inline-block pl-6 font-banner font-bold text-yellow-400 uppercase tracking-widest"
        >
          Support
        </h2>
        <div className="flex items-center ml-auto">
          <NavSquareArrow className="w-6 h-6 mr-2" />
          <a
            className="font-primary text-lg font-bold"
            href="https://intelllex.com/"
          >
            Back to INTELLLEX
          </a>
        </div>
      </div>
      <div style={{ fontSize: '3.125rem' }} className="font-primary mb-6">
        Get more out of INTELLLEX
      </div>
    </div>
  );
}
