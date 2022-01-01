import React from "react";
import valid from "./valid.gif";
import "./Godcard.css"
import { BrowserRouter as Router,Link } from 'react-router-dom';

const Godcard = () => {
    return(
        <div>
        <nav>
        <div id="progression">
            <span class="etape fait">
                1<div class="desc">Panier</div>
            </span><span class="ligne   ">
            </span><span class="etape fait">
                2<div class="desc">Payment</div>
            </span><span class="ligne">
            </span><span class="etape fait">
                3<div class="desc">Valider</div>
            </span>
        </div>
    </nav>
    <div className="parallax  ">
        <img src={valid} alt="" className="valid" />
        <h3>Payment Successful</h3>
        <Link to='/'>
            <h5>Retoure Boutique</h5>
        </Link>
        </div>
    </div>
    )
}

export default Godcard;