import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login.jsx';
import Expert from './expert.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/start" element={<Expert />} />
      </Routes>
    </Router>
  );
}

export default App;