import React, { useState } from 'react';
import "../App.css"
import achat from '../achat.png';
import './panier.css';
import './progresse.css';
import logo from "./Logo.png";
import { BrowserRouter as Router,Link } from 'react-router-dom';

function Payment({}) {
    ;
    
     
    var myboject = JSON.parse(localStorage.getItem("table"));
    
    const [input, setInput] = useState(myboject[0].quantiter);


    const onChange = (e) => {
        
        if(e.currentTarget.value > 0){
            var matable = [{nom:"boit tintin",prix: 255 *e.currentTarget.value ,quantiter:e.currentTarget.value}];
            localStorage.setItem("table", JSON.stringify(matable));
            console.log(255 *e.currentTarget.value)
        }
        setInput(e.currentTarget.value);
      
  

    };
    console.log(input);
    


    console.log(myboject[0].nom);   

    return (
        <div>
            <nav>
                <Link to="/">
                    <img src={logo} alt=""  className='logo'/>
                </Link>
                <div id="progression">
                    <span class="etape">
                        1<div class="desc">Panier</div>
                    </span><span class="ligne   ">
                    </span><span class="etape">
                        2<div class="desc">Payment</div>
                    </span><span class="ligne">
                    </span><span class="etape">
                        3<div class="desc">Valider</div>
                    </span>
                </div>
            </nav>
            <div className="parallax"> 
        <div className="const">
        <div className="one" ></div>
        <div className="tow" >
        <table>
        <tbody>
            <tr>
                <td > <img src={achat} alt="" className='img_cal' /></td>
                <td>{myboject[0].nom}</td>
                
                <td><input type="number" placeholder='1' min="0" onChange={onChange}/></td>
                <td> {  255 * input + "€"} </td>
            
                
            </tr>
            
        </tbody>
      
        </table>   
        <div className='trait'></div> 
      <Link to='/payemnt'>
            <button>Valider</button>
        </Link>
        </div>

        <div className="three" ></div>

    </div>
        </div>  
    </div>
    );
}

export default Payment;