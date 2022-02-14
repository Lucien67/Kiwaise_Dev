import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Loader from '../components/loader';
import RestaurantForm from '../components/restaurant-form';
import Restaurant from '../models/restaurant';
//import POKEMONS from '../models/mock-pokemon';
import RestaurantService from '../services/restaurant-service';
 

// On declare un type pour uen props nommé "id"
type Params = { id: string };
  
// on passe la Props au compsant "params"
const RestaurantEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
  // on charge le bon pokemon par rapport ç l'idantifiant de l'url
  const [restaurant, setRestaurant] = useState<Restaurant|null>(null);
  
  // on fait la recherche  
  useEffect(() => {
    RestaurantService.getRestaurant(+match.params.id).then(restaurant => setRestaurant(restaurant));
    
    
    /*fetch(`http://localhost:3001/pokemons/${match.params.id}`)
    .then(response => response.json())
    .then(pokemon => {
      if(pokemon.id) setPokemon(pokemon);
    })*/


    /*POKEMONS.forEach(pokemon => {
      if (match.params.id === pokemon.id.toString()) {
        setPokemon(pokemon);
      }
    })*/
  }, [match.params.id]);
    
  return (
    <div>
      { restaurant ? (
        <div className="row">
            <h2 className="header center">Éditer { restaurant.name }</h2>
            <RestaurantForm restaurant={restaurant} isEditForm={true}></RestaurantForm>
        </div>
      ) : (
          // si il y a une erreur
        <h4 className="center"><Loader/></h4>
      )}
    </div>
  );
}
  
export default RestaurantEdit;