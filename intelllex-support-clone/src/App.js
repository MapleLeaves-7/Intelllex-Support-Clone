import { Footer } from './components';
import { Main, Source, Stacks, Admin, Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/source/:page" element={<Source />} />
          <Route path="/stacks/:page" element={<Stacks />} />
          <Route path="/admin/:page" element={<Admin />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
