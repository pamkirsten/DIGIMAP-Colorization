import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect}  from 'react'


function App() {

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div>
      <h1>Colorization</h1>
      <input type="file" id="image_input" accept="image/png, image/jpg" onChange={handleChange}></input>
      <img src={file}/>
    </div>
    
  );
}

export default App;
