import React, { FunctionComponent, useState } from 'react';
import Restaurant from '../models/restaurant';
import './restaurant-card.css';
//import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';
import { useHistory } from 'react-router-dom';

type Props = {
  restaurant: Restaurant,
  borderColor?: string
};

const RestaurantCard: FunctionComponent<Props> = ({ restaurant, borderColor = '#009688' }) => {

  const [color, setColor] = useState<string>();
  const history = useHistory();

  const showBorder = () => {
    setColor(borderColor);
  };

  const hideBorder = () => {
    setColor('#f5f5f5');
  };

  const goToRestaurant = (id: number) => {
    history.push(`/restaurant/${id}`);
  }

  return (

    <div className="col-sm-6 col-lg-4 mb-5 hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92" onClick={() => goToRestaurant(restaurant.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
      <div className="card h-100 border-0 shadow">
        <div className="card-img-top overflow-hidden dark-overlay bg-cover" > <img src={restaurant.picture} alt={restaurant.name} />
          {/*<img src="%PUBLIC_URL%\asset\img\photo\restaurant-1430931071372-38127bd472b8.jpg" alt="" /> */}
          <div className="card-img-overlay-bottom z-index-10">
            <h4 className="text-white text-shadow">{restaurant.name}</h4>
            {/*<p className="mb-2 text-xs"><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-gray-300"></i>
                  </p>*/}
          </div>
          <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
            <div className="badge badge-transparent badge-pill px-3 py-2"></div>
            {/*<a className="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                    <svg className="svg-icon text-white">
                      <use xlinkHref="#heart-1"> </use>

                </svg></a>*/}
          </div>
        </div>
        <div className="card-body">
          <p className="text-sm text-muted mb-3"> Cupidatat excepteur non dolore laborum et quis nostrud veniam dolore deserunt. Pariatur dolore ut in elit id nulla. Irur...</p>
          <p className="text-sm text-muted text-uppercase mb-1">By <a href="#" className="text-dark">Matt Damon</a></p>
          {restaurant.types.map(type => <a className="me-1" key={type} href="#">#{type}</a>
          )}
          {/*<p className="text-sm mb-0"><a className="me-1" href="#">Restaurant</a><a className="me-1" href="#">Contemporary</a>
                </p>*/}
        </div>
      </div>
    </div>
    /* *************************************************** */
    /*<div className="card-group" onClick={() => goToRestaurant(restaurant.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
  <div className="card">
    
    <div className="card-body">
      <h5 className="card-title">{restaurant.name}</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    {restaurant.types.map(type =>
                <span key={type} className={formatType(type)}>{type}</span>    
            )}
    <div className="card-footer">
      <small className="text-muted">{restaurant.created}</small>
    </div>
  </div>
</div>*/
  );
}

export default RestaurantCard;