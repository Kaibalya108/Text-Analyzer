import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextArea from './Components/TextArea';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes // Add this import for Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
  }

  setTimeout(() => {
    setAlert(null);
  }, 1500);

  const modeToggling = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#12161a';
      showAlert("Dark mode Enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enabled", "success");
    }
  }

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={modeToggling} />
      <Alert alert={alert} />
    
      <div className="container my-5">
        <Routes>
          <Route exact path="/about" element={<About about="About the Application" mode={mode} />} />
          <Route exact path="/" element={<TextArea heading="Enter your Text below" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
