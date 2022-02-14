import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import Restaurant from '../models/restaurant';
import RestaurantService from '../services/restaurant-service';
import imgRestoTemp from '../../src/photo/restaurant-1515164783716-8e6920f3e77c.jpg'
import restaurant from '../models/restaurant';

const RestaurantSearch: FunctionComponent = () => {

  const [term, setTerm] = useState<string>('');
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setTerm(term);

    if (term.length <= 1) {
      setRestaurants([]);
      return;
    }

    RestaurantService.searchRestaurant(term).then(restaurants => setRestaurants(restaurants));
  }

  return (
    <div className="container py-6 py-md-7 text-white z-index-20">
      <div className="row">
        <div className="col-xl-10 offset-1">
          <div className="text-center ">

            <h4 className="display-5 fw-bold text-shadow">Rechercher un restaurants</h4>
            <p className="text-lg text-shadow">Découvrez les meilleurs endroits pour manger, boire et faire du shopping près de chez vous.</p>
          </div>
          <div className="search-bar mt-5 p-3 p-lg-1 ps-lg-4">
            <form action="#">
              <div className="row">


                <div className="col-lg-10 d-flex align-items-center form-group no-divider">
                  <input className="form-control border-0 shadow-0" type="text" value={term} onChange={e => handleInputChange(e)} placeholder="Rechercher un restaurant" />
                </div>


                <div className="col-lg-2 d-grid">
                  <button className="btn btn-primary rounded-pill h-100" type="submit">Recherche </button>
                </div>

              </div>

            </form>

          </div>
        </div>
      </div>
      <div className='collection'>
        
        {restaurants.map((restaurant) => (
          
            <div>
        <img src={restaurant.picture} alt={restaurant.name} style={{width: '250px', margin: '0 auto' }} />
        
              <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`} className="collection-item">
            {restaurant.name}
          </Link>
          </div>
         
          
        ))}
      </div>
    </div>



  );

}

export default RestaurantSearch;