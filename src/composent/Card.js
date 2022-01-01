import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { CheckoutForm } from '../Hook';
import logo from "./Logo.png";
import { BrowserRouter as Router,Link } from 'react-router-dom';

import "./card.css";
const stripePromise = loadStripe('pk_test_51KCos0BbvjBvzwSPdycLvKrUAzzfyb5XT8m6caeice8B38OJgjzC80KsjfRzpL31eIP7lbAO7G1sOZSb0CyxR1L80023bSuAOU');

function Card(){
    return(
        <div>
        <nav>
            <Link to="/">
                <img src={logo} alt=""  className='logo'/>
            </Link>
            <div id="progression">
                <span class="etape fait">
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
               
                        <div className='card'>
                            <div className='postxt'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm></CheckoutForm>
                        </Elements>
                            </div>
                        </div>
                
                        </div>  
                <div className="three" ></div>
            
        </div>
    </div>
    
   
    </div>
    )
}

export default  Card;