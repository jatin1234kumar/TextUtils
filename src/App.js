import './App.css';
import Navbar from './components/Navbar.mjs';
import Textbox from './components/Textbox.mjs';
import Alert from './components/Alert.mjs';
import About from './components/About.mjs';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
          msg : message,
          type : type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }

  const togglemode = ()=>{
    if(mode === "light"){
       setMode("dark");
       document.body.style.backgroundColor = "#212834";
       document.body.style.color = "white";
    }else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  
  return (
    <>
    <Router>

      <Navbar title="TextUtils" mode={mode} toggle={togglemode} about="About Us"/>
      <Alert alert={alert}/>

      <Routes>
        <Route exact path="/about" element={ <About mode={mode}/>} />
        <Route exact path='/' element={<Textbox title="TextUtils" mode={mode} about="About Us" showAlert={showAlert}/>}/>
      </Routes>

    </Router>
      
    </>
  );
}

export default App;
