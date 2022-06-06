import { Banner, Footer, Error } from './components';
import { Main, Stacks } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Banner />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/stacks/:page" element={<Stacks />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
