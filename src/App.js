import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React  from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const[alertData, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled Successfully!", "success");
    } else{
      setMode("light");
      document.body.style.backgroundColor = "#f8f9fa";
      showAlert("Light Mode Enabled Successfully!", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text Utils"
          aboutText="About Us"
          modeType={mode}
          toggleChange={toggleMode}
        />
        <Alert alert={alertData} />
        {/* <div className="container my-3"> */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm
              heading="Enter the text to analyze"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
        </Switch>
        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
