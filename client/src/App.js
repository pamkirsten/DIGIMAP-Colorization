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
  return (

    <div className="contentWrapper">

      <Navbar bg="dark">
        <Container >
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav  >
            <Nav.Link style={{ color: "#32A05F", width: "100px", textAlign: "center" }} href="#home">Home</Nav.Link>
            <Nav.Link style={{ color: "#32A05F", width: "100px", textAlign: "center" }} href="#features">Features</Nav.Link>
            <Nav.Link style={{ color: "#32A05F", width: "100px", textAlign: "center" }} href="#pricing">Pricing</Nav.Link>
            <button> Upload File </button>
          </Nav>
        </Container>
      </Navbar>

      <section className='Hero'>
        <ReactCompareImage leftImage={before} rightImage={after} rightImageCss={{ objectFit: 'contain', objectPosition: 'left' }}
          leftImageCss={{ objectFit: 'contain', objectPosition: 'left' }} />

        <div className="heading">

          <h1 className='headingTitle'> Image Colorization</h1>
          <p className='headingSub'> Bring color to your black and
            white photographs.</p>
          <button className='headingButton'> <p className="butTitle">Upload Photo  </p>  </button>

        </div>
      </section>

      <section className='Results'>

        <div className='resContainer'>
          <div className='origContainer'>
            <h4> Original</h4>
            <img style={{objectFit:"cover" , borderRadius:"16px"}} src={"/before.png"} width="390" height="500" />


          </div>
          <div className='colorContainer'>
          <h4> Colorized</h4>

          <img style={{objectFit:"cover", borderRadius:"16px"}} src={"/after.png"} width="390" height="500" />




          </div>

        </div>

        <button className='bDownload'> <h6 className='dText'> Download Image</h6></button>
        <button className='bDownload'> <h6 className='dText'> Upload New Image</h6></button>


      </section>



    </div>


  );
}

export default App;
