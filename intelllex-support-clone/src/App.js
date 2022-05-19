import './App.css';
import Banner from './components/Banner';
import Main from './components/Main';
import { Footer } from './components';

function App() {
  const scrollToID = id => {
    return () => {
      let element = document.getElementById(id);
      console.log(element);
      let yOffset = element.offsetTop;
      console.log(yOffset);
      element &&
        window.scroll({
          top: yOffset,
          behavior: 'smooth',
        });
    };
  };
  return (
    <div>
      <Banner />
      <Main scrollToID={scrollToID} />
      <Footer />
    </div>
  );
}

export default App;
