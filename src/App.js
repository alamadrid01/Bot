import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Upload from './pages/upload/Upload';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Upload />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
