import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
    <nav>
      <ul className="navhorizontal">
        <li><a href="#AboutMe">Home</a></li>
        <li><a href="#AboutMe">About me</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="#Contact">Contact me</a></li>
      </ul>
    </nav>
    <header style={{textAlign:'center',border:'1px solid black'}}>
      <h1 style={{marginTop:'20px',marginBottom:'0px',paddingBottom:'0px'}}> Sally Sample Student </h1>
      <img src="images.jpg" alt="Sally from Nightmare Before Christmas"/>
      <address id="Contact" style={{marginTop:'0px',marginBottom:'20px'}}>
        1993 Tim Burton St. <br/>
        Halloween Town, Hinterlands 92221 <br/> 
        <a href="mailto:sally@student.com">sally@student.com</a> <br/>
        888-888-8888 <br/>
      </address>
    </header>
    

    
    <section>
      <h2 id="AboutMe">About Me</h2>
      <p style={{paddingLeft:'30px'}}> Hi! I am Sally! I love escaping from cages and kissing on moonlit hills! </p>
    </section>
    <hr/>
    <section>
      <h2> Education </h2>
      <ul>
        <li> University of Halloween </li> 
        <li>
          <ul>
            <li> Graduated at the top of her class in Hospice sCare </li>
          </ul>
        </li>
        <li> Scareful </li>
      </ul>

    </section>
    <hr/>
    <section>
      <h2> Skills </h2>
      <ul>
        <li> Being kind </li> 
        <li> Serving as an example of the wonders of even rudimentary plastic surgery </li>
        <li> Acting as a Damsel-in-Distress </li>
      </ul>
      
    </section>
    <hr/>
    <section>
      <h2> Employment </h2>
        <div className="employ">

        <p style={{marginBottom:'0px',display:'inline',float:'left'}}>
          <b> Scareful </b> <br/>
        </p>
        <p style={{marginBottom:'0px',display:'inline',float:'right'}}>
          <b> 2017- </b> <br/>
        </p>

        <p style={{marginBottom:'0px',clear:'both'}}>
          <em> Program Manager </em> 
        </p>
        <p style={{paddingLeft:'30px'}}>
          Helped all the wonderful students at Scareful find the KEY to their success by helping them to encode all the ways to terrify! 
        </p>
        </div>

        <div className="employ">

        <p style={{marginBottom:'0px',display:'inline',float:'left'}}>
          <b> Doctor Finkelstein's Lab </b> <br/>
        </p>
        <p style={{marginBottom:'0px',display:'inline',float:'right'}}>
          <b> 1992-1993 </b> <br/>
        </p>

        <p style={{marginBottom:'0px',clear:'both'}}>
          <em> Lab assistant </em> 
        </p>
        <p style={{paddingLeft:'30px'}}>
          Served as a creation stuck inside a cage under lock and key, studying cryptography of the physical kind. When stuck, watched a spider develope the web.
        </p>
        </div>
      
      
    </section>
    
  </main>
  );
}

export default App;
