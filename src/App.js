import './App.css';
// import DisplayField from './components/DisplayField';
import Sidebar from './components/Sidebar';
import React, { useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  const [page, setPage] = useState()

  const changePage = () => {
    
  }

  return (
   
      <div className="View">
        <Sidebar />
        <div id='pageContent'>
        
        </div>
      
      </div>

  );
}

export default App;
