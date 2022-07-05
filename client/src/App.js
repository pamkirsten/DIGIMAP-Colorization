import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import ReactCompareImage from "react-compare-image";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


import "typeface-inter";
const before = "/before.png";
const after =
  "/after.png";






function App() {

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (

    <div className="contentWrapper">

      <Navbar  bg="dark">
        <Container  style={{padding:"0px 40px"}}>
          <Navbar.Brand href="#home"><img src='/icon.png'></img></Navbar.Brand>
         
        </Container>
      </Navbar>

      <section className='Hero'>
        <ReactCompareImage leftImage={before} rightImage={after} rightImageCss={{ objectFit: 'contain', objectPosition: 'left' }}
          leftImageCss={{ objectFit: 'contain', objectPosition: 'left' }} />

        <div className="heading">

          <h1 className='headingTitle'> Image Colorization</h1>
          <p className='headingSub'> Image Colorization, an algorithm that takes in your black and white photos and returns the colorized version of it. The algorithm uses deep learning to classify objects/regions within the image and color them accordingly.</p>
          
            <input type="file" id="image_input" accept="image/png, image/jpg" onChange={handleChange} className="custom-file-input"/>
            <img src={file}/>
          
        </div>
      </section>

      <section className='Results'>
      <h1 style={{fontWeight:"600"}}>Results</h1>

        <div className='resContainer'>
          
          <div className='origContainer'>
            <h4> Original</h4>
            <img style={{objectFit:"contain" , borderRadius:"16px", maxWidth:"600px"}} src={"/before.png"} />


          </div>
          <div className='colorContainer'>
          <h4> Colorized</h4>

          <img style={{objectFit:"contain", borderRadius:"16px",  maxWidth:"600px"}} src={"/after.png"}   />




          </div>

        </div>

        <button className='bDownload'> <h6 className='dText'> Download Image</h6></button>
        <button className='bUpload'> <h6 className='uText'> Upload New Image</h6></button>


      </section>




</div>
  );

}

export default App;
