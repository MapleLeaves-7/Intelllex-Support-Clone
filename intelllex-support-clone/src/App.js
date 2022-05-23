import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Banner, Footer } from './components';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Banner />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
