import './App.css';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';
import CardView from './components/CardsView';

function App() {
  
  // -- consumir api
  const url = 'https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json';
  const [restaurants, setRestaurants] = useState([]);  //hooks

  const fetchApi =  (url) => {
    //const response =  fetch(url);
    // const responseJSON = await response.json();
    // console.log(responseJSON);
    // setRestaurants(responseJSON);
    fetch(url).then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.log(error));
    
  }

  useEffect(() =>{
    fetchApi(url);
    
    
  }, []);
  // fin consumo de APi
  
  return (
    <>
    <Navbar className="navbar" />
    <div className="App" id="hide-me">
      <h2 id='welcome'>Welcome to Melp</h2>
      <div className="container" >
        {restaurants.length >1 ?  
        <CardView restaurants={restaurants} /> : <h2>LOADING ...</h2>}
      </div>
      
    </div>
    </>
    
  );
}

export default App;
