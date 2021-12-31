import './App.css';
import Homme from './composent/Homme';
import Payment from './composent/Payment';
import Card from './composent/Card';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
 
function App() {



  return (
  
    <div className="App"> 
 <Router>
        
        <Routes>
            <Route exact path='/Panier' element={< Payment />}></Route>
            <Route exact path='/' element={< Homme />}></Route>
            <Route exact path='/payemnt' element={< Card />}></Route>
          </Routes>
      </Router>
      
       
  </div>
  );
}

export default App;
