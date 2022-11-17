import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Upload from './pages/upload/Upload';
import UploadData from './pages/uploadData/UploadData';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

export const UserContext = React.createContext()

function App() {
  const [file,setFile]= useState()
  const [fileName,setFileName]= useState('')
  const Provider = UserContext.Provider

  return (
    <div className="App">
      <Provider value= {{ file, setFile, fileName, setFileName }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Upload />} />
          <Route path='/upload-data' element={<UploadData />} />
        </Routes>
        <Footer />
      </Router>
      </Provider>
    </div>
  );
}

export default App;
