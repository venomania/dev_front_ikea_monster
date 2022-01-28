import React from 'react';
import { useParams } from 'react-router-dom';
import achat from '../achat.png';
import "./article.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import back from '../icons8-back-48.png'

const ArticleDetails =() => {
    const {id} = useParams();
    var panier = [{}]

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src={achat} onDragStart={handleDragStart} role="presentation" className='mini' />,
    <img src={achat} onDragStart={handleDragStart} role="presentation" className='mini' />,
    <img src={achat} onDragStart={handleDragStart} role="presentation" className='mini' />,
    <img src={achat} onDragStart={handleDragStart} role="presentation" className='mini' />,
    <img src={achat} onDragStart={handleDragStart} role="presentation" className='mini' />,
    <img src={achat} onDragStart={handleDragStart} role="presentation" className='mini' />,

];

const add = () => {
 
var getpanier = localStorage.getItem("panier");
    // if(getpanier !== null){
    //     panier.push(JSON.parse(localStorage.getItem("panier")));
    // }
    console.log(getpanier);
   var nom = document.getElementById("nom").innerHTML;
   var price = document.getElementById("price").innerHTML;
   var color = document.getElementById("color").value;
    panier.push({
        Article : nom,
        Price :  price,
        Color: color
    })
    console.log(panier);
    localStorage.setItem("panier",JSON.stringify(panier));

}


    return(
        <div>
        <div id='contBack'>
            <a href="/"><img src={back} alt="" id='back'/></a>
        </div>
        <div className='wrapper'>
            <div className='one'>
                <img src={achat} alt="" />
            </div>
            <div className='two'>
                <p className='desc'>
                    <h2 id='nom'>Canape de Mémé</h2><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum tellus eget ante ultrices ullamcorper.
                     Duis vel bibendum nibh. Cras tempus, lorem ullamcorper rutrum interdum,
                      est sem finibus erat, id elementum lorem neque vitae justo. 
                      Curabitur elementum turpis ornare viverra ultrices.
                       Mauris a dui velit. Morbi ut augue vel nibh rhoncus sagittis. 
                       Praesent vel volutpat ex, eget mattis nulla. 
                       Maecenas sit amet volutpat elit. Suspendisse tristique pretium est, 
                       posuere accumsan est fermentum in. In dignissim, eros sit amet molestie mollis, nunc magna finibus augue, nec faucibus nibh quam nec mauris. Sed convallis blandit lorem id malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce at molestie purus. Phasellus eleifend quis ante ac elementum. Proin suscipit dolor sit amet elementum eleifend. 
                    Fusce efficitur, nisl ac pellentesque dictum, 
                    nisi libero vestibulum libero, in tristique lacus mauris et neque.
                    <h5 >Price : <span id='price'>250€</span></h5>
                    </p> <br />
                 
                <select name="color" className='choiseColor' id='color'>
                    <option value="red" >rouge</option>
                    <option value="brown" >marron</option>
                    <option value="blue" >bleu</option>
                    <option value="black">noir</option>
                    <option value="yellow">jaune</option>
                    <option value="orange">orange</option>
                    <option value="green">vert</option>
                </select>
          
            </div>
            <div className='four'>
                <button className='btn_add'  onClick={add}>Ajouter</button>
            </div>
        </div>
        <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"   
        autoPlay="true"
        animationDuration="1000"
        infinite="true"
        />
        </div>
    )

}

export default  ArticleDetails;