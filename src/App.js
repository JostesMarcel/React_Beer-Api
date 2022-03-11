import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='middleDiv'>
        <img className='frontImage' src="Bild1.png" alt="" />
        <div className='yellowLine'><Link to="/AllBeer">All Beers</Link></div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, est. Rem officiis recusandae adipisci. Explicabo ullam ut atque commodi maxime.</p>
      </div>
        <div className='middleDiv'>
        <img src="Bild2.png" alt="" />
        <div className='yellowLine'><Link to="/Detail/random">Random</Link></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio odit quis, iure eum quisquam dolores expedita reprehenderit hic accusantium vitae.</p>
      </div>    
    </div>
  );
}

export default App;
