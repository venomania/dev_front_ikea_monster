import React from 'react';
import "./card.css";
import './progresse.css';

function Card(){

    return(
        <div>
             <nav>
                <div id="progression">
                    <span className="etape fait">
                        1<div className="desc">Panier</div>
                    </span><span className="ligne   ">
                    </span><span className="etape">
                        2<div className="desc">Payment</div>
                    </span><span className="ligne">
                    </span><span className="etape">
                        3<div className="desc">Valider</div>
                    </span>
                </div>
            </nav>
            <div className='const'>
            <div className="one" ></div>
            <div className="tow" > 
            
            </div>
            <div className="three" ></div>
            </div>
        </div>
    )
}

export default  Card;