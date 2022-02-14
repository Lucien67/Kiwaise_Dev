import React, { FunctionComponent, useState, useEffect } from 'react';
import Restaurant from '../models/restaurant';
//import POKEMONS from '../models/mock-pokemon';
import RestaurantCard from '../components/restaurant-card';
import RestaurantService from '../services/restaurant-service';
import { Link } from 'react-router-dom';
import RestaurantSearch from '../components/restaurant-search';
  
const RestaurantList: FunctionComponent = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  
  useEffect(() => {
    RestaurantService.getRestaurants().then(restaurants => setRestaurants(restaurants));

    
    
    /*fetch(`http://localhost:3001/pokemons`)
      .then(response => response.json())
      .then((pokemons) => {
        setPokemons(pokemons)
      });*/
  }, []);
 // console.log(restaurant);
  
  return (
    <div>
      
      <div className="container"> 
        <div className="row"> 
        <RestaurantSearch/>
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
        ))}
        <div>
          <Link className="btn-floating btn-large waves-effect -waves-light red z-depth-3"
          style={{position: 'fixed', bottom: '25px', right: '25px'}}
          to="/restaurant/add"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
        </div>
      </div>
    </div> 
  );
}
  
export default RestaurantList;