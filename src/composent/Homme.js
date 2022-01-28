import React from 'react';
import "../App.css"
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { BrowserRouter as Router,Link } from 'react-router-dom';
import achat from '../achat.png';
import "./homme.css";
import shop from "../ShoppingBag.svg";

function Homme({}) {
    const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings:["IKEA MONSTER","宜家巨无霸","IKEA SZÖRNY","イケアモンスター","МОНСТР ИКЕА","وحش ايكيا"],
      // Speed settings, try diffrent values untill you get good results
      
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  
  const test = () =>{
    console.log("jioke") ;
    var matable = [{nom:"FIGURINE TINTIN",prix:255,quantiter:1}];
    localStorage.setItem("table", JSON.stringify(matable));
   const a = JSON.parse(localStorage.getItem("table"));
    console.log(a[0].quantiter);
  }
    return (
      <div>
        <div className='voirpanier'><img src={shop} alt="" /></div>
        <div className="parallax"> <h1 className="typing"> <span ref={el}></span></h1></div>

        <div className='containerAchat' > 
          <div className='article'>
            <img src={achat} alt="" />
            <div className="wrapper" >
              <div className='one'> 
                <h5> Meuble de Grand Mére pascale</h5>
              </div> 
              <div className='two'>
               <a href='/article/{id}'> <button>Voir les détail</button></a>
              </div> 
            </div>
          </div>

          <div className='article'>
            <img src={achat} alt="" />
            <div className="wrapper" >
              <div className='one'> 
                <h5> Meuble de Grand Mére pascale</h5>
              </div> 
              <div className='two'>
                <button>Voir les détail</button>
              </div> 
            </div>
          </div>

          <div className='article'>
            <img src={achat} alt="" />
            <div className="wrapper" >
              <div className='one'> 
                <h5> Meuble de Grand Mére pascale</h5>
              </div> 
              <div className='two'>
                <button>Voir les détail</button>
              </div> 
            </div>
          </div>



          <div className='article'>
            <img src={achat} alt="" />
            <div className="wrapper" >
              <div className='one'> 
                <h5> Meuble de Grand Mére pascale</h5>
              </div> 
              <div className='two'>
                <button>Voir les détail</button>
              </div> 
            </div>
          </div>
          
        </div>       
      </div>
    );
}

export default Homme;