import React from 'react';
import "../App.css"
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { BrowserRouter as Router,Link } from 'react-router-dom';
import achat from '../achat.png';
import "./homme.css";

function Homme({}) {
    const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings:["FIGURINE TINTIN","FIGURINA DI TINTIN","ESTATUETA DE TINTIN","タンタンの置物","ФИГУРКА ТИНТИНА"],
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
        <div className="parallax"> <h1 className="typing"> <span ref={el}></span></h1></div>

        <div className="wrapper" >
        <div className="one">
        <p className="text">Huic Arabia est conserta, ex alio latere Nabataeis contigua; opima varietate conmerciorum castrisque oppleta validis et castellis, quae ad repellendos gentium vicinarum excursus sollicitudo pervigil veterum per oportunos saltus erexit et cautos. haec quoque civitates habet inter oppida quaedam ingentes Bostram et Gerasam atque Philadelphiam murorum firmitate cautissimas. hanc provinciae inposito nomine rectoreque adtributo obtemperare legibus nostris Traianus conpulit imperator incolarum tumore saepe contunso cum glorioso marte Mediam urgeret et Parthos.</p>
        
    
        
      <Link to='/Panier'>
        <button className="price_card" onClick={test}> <h4> Prix :  255€  </h4></button>
        </Link>
        
        
        </div>
        <div className="two">
            <img src={achat} alt="" />
        </div>
        </div>       
      </div>
    );
}

export default Homme;