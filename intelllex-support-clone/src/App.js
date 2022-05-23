import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, SubPage } from './components';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<SubPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
