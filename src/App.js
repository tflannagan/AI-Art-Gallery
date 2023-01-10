import './App.css';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import Placeholder from './Placeholder'; //Placeholder component.
//Import the css file if using blur, black and white, or opacity effects. 
import 'react-lazy-load-image-component/src/effects/blur.css';

import Header from './components/Header';




function App(image) {    
  return (
    <>
     <Header />
    
      <section className="App">
           <img className="image" alt="img" src={require("./images/img-1.png")} />
           <img className="image prof" alt="img" src={require("./images/img-6.jpg")} />
           <img className="image" alt="img" src={require("./images/img-17.png")} />            
           <img className="image" alt="img" src={require("./images/img-2.png")} />
           <img className="image prof" alt="img" src={require("./images/img-4.jpg")} /> 
           <img className="image" alt="img" src={require("./images/img-7.png")} />  
           <img className="image" alt="img" src={require("./images/img-3.png")} />
           <img className="image" alt="img" src={require("./images/img-8.png")} />    
           <img className="image" alt="img" src={require("./images/img-10.png")} />  
           <img className="image prof" alt="img" src={require("./images/img-9.jpg")} />  
           <img className="image" alt="img" src={require("./images/img-11.png")} />       
           <img className="image" alt="img" src={require("./images/img-12.png")} /> 
           <img className="image prof" alt="img" src={require("./images/img-13.png")} />  
           <img className="image" alt="img" src={require("./images/img-14.png")} />   
           <img className="image" alt="img" src={require("./images/img-16.png")} /> 
           <img className="image" alt="img" src={require("./images/img-15.png")} /> 
           <img className="image" alt="img" src={require("./images/img-5.png")} />  
           <img className="image prof" alt="img" src={require("./images/img-18.png")} />  
           <img className="image" alt="img" src={require("./images/img-19.png")} />  
           <img className="image" alt="img" src={require("./images/img-20.png")} />  
           <img className="image" alt="img" src={require("./images/img-21.png")} />
           <img className="image" alt="img" src={require("./images/img-22.png")} />
           <img className="image" alt="img" src={require("./images/img-23.png")} />    
           <img className="image" alt="img" src={require("./images/img-24.png")} />    
           <img className="image" alt="img" src={require("./images/img-25.png")} />    
           <img className="image" alt="img" src={require("./images/img-26.png")} />  
       {/* //Lazy Loaded Images */}
          
            {/* <LazyLoadImage
                  className="image"
                  alt="img"
                  effect="blur"
                  src={require("./images/img-19.png")}
            />   
            <LazyLoadImage
                  className="image"
                  alt="img"
                  effect="blur"
                  src={require("./images/img-20.png")}
            />  
            <LazyLoadImage
                  className="image prof"
                  alt="img"
                  effect="blur"
                  src={require("./images/img-21.png")}
            />     
            <LazyLoadImage
                  className="image"
                  alt="img"
                  effect="blur"
                  src={require("./images/img-22.png")}
            />    */}
          
      </section>
     
      <h3 align="center">Prompt Engineers:</h3>
      <p align="center">Alex & Ty Flannagan</p>
    </>
  );
}

export default App;
