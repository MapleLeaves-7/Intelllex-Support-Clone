import logo from '../images/intelllex-reversed-logo.png';
import { ReactComponent as NavSquareArrow } from '../images/nav-square-arrow.svg';

export function Banner({ isMainPage }) {
  return (
    <header
      style={{
        background: 'linear-gradient(to right,#2a4072 0, #4c78db)',
      }}
      className="pt-10 pb-9 px-10 md:px-20 text-white"
    >
      <div className="flex items-center font-banner">
        <div className="flex items-center">
          <img className="w-12 h-12 mr-4" src={logo} alt="Intelllex logo" />
          <h1
            style={{ letterSpacing: '0.4rem' }}
            className="hidden md:block font-banner uppercase text-2xl pr-6 "
          >
            Intelllex
          </h1>
        </div>
        <h2
          style={{ borderLeft: '3px solid' }}
          className="inline-block pl-6 font-banner font-bold text-2xl text-yellow-400 uppercase tracking-widest"
        >
          Support
        </h2>
        <div className="hidden sm:flex items-center ml-auto">
          <NavSquareArrow className="w-6 h-6 mr-2" />
          <a
            className="font-primary text-lg font-bold"
            href="https://intelllex.com/"
          >
            Back to INTELLLEX
          </a>
        </div>
      </div>
      {isMainPage && (
        <div
          style={{ fontSize: '3.125rem' }}
          className="mt-14 mb-8 font-primary font-bold tracking-tight"
        >
          Get more out of INTELLLEX
        </div>
      )}
    </header>
  );
}
