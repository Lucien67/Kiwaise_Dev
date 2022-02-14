import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Restaurant from '../models/restaurant';
//import POKEMONS from '../models/mock-pokemon';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';
import RestaurantService from '../services/restaurant-service';
import Loader from '../components/loader';
import imgRestoTemp from '../../src/photo/restaurant-1515164783716-8e6920f3e77c.jpg'

type Params = { id: string };

const RestaurantsDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    RestaurantService.getRestaurant(+match.params.id).then(restaurant => setRestaurant(restaurant));

    /* fetch(`http://localhost:3001/pokemons/${match.params.id}`)
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
      {restaurant ? (

        <div className="row">
          <section  className="pt-7 pb-5 d-flex align-items-end dark-overlay bg-cover" >
            
            <div className="container overlay-content">
            <img src={imgRestoTemp} alt={restaurant.name} style={{width: '250px', margin: '0 auto' }} />
              <div className="d-flex justify-content-between align-items-start flex-column flex-lg-row align-items-lg-end">
                <div className="text-white mb-4 mb-lg-0">
                  {/*<div className="badge badge-pill badge-transparent px-3 py-2 mb-4">Eat &amp; Drink</div>*/}
                  <h1 className="text-shadow verified">{restaurant.name}</h1>
                  <p><i className="fa-map-marker-alt fas me-2" /> 5330 Broadway, Brooklyn, NY 1129</p>
                  {/*<p className="mb-0 d-flex align-items-center"><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-primary" /><i className="fa fa-xs fa-star text-gray-200 me-4">                 </i>8 Reviews</p>*/}
                </div>
                {/*<div className="calltoactions"><a className="btn btn-primary" href="#leaveReview" onClick="$('#leaveReview').collapse('show')" data-smooth-scroll>Leave a Review</a></div>*/}
              </div>
            </div>
            <Link to={`/restaurant/edit/${restaurant.id}`} className="btn-floating halfway-fab waves-effect waves-light"><i className="material-icons">edit</i></Link>
          </section>
          <div>
            <p><small>{formatDate(restaurant.created)}</small></p>
            <p><small>{restaurant.created}</small></p>
            <Link to="/">Retour</Link>

            {restaurant.types.map(type => (
              <span key={type} className={formatType(type)}> @{type}</span>
            ))}
            <p>{restaurant.hp}</p>
            <p>{restaurant.cp}</p>
          </div>
          <section className="py-6">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  {/* About Listing*/}
                  <div className="text-block">
                    <h3 className="mb-3">About</h3>
                    <p className="text-muted"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                    <p className="text-muted"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                  <div className="text-block">
                    {/* Listing Location*/}
                    <h3 className="mb-4">Location</h3>
                    <div className="map-wrapper-300 mb-3">
                      <div className="h-100" id="detailMap" />
                    </div>
                  </div>
                  <div className="text-block">
                    {/* Gallery*/}
                    <h3 className="mb-4">Gallery</h3>
                    <div className="row gallery ms-n1 me-n1">
                      <div className="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/restaurant-1515164783716-8e6920f3e77c.jpg"><img className="img-fluid" src="img/photo/restaurant-1515164783716-8e6920f3e77c.jpg" alt="..." /></a></div>
                      <div className="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/restaurant-1466978913421-dad2ebd01d17.jpg"><img className="img-fluid" src="img/photo/restaurant-1466978913421-dad2ebd01d17.jpg" alt="..." /></a></div>
                      <div className="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/restaurant-1477763858572-cda7deaa9bc5.jpg"><img className="img-fluid" src="img/photo/restaurant-1477763858572-cda7deaa9bc5.jpg" alt="..." /></a></div>
                      <div className="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/restaurant-1505275350441-83dcda8eeef5.jpg"><img className="img-fluid" src="img/photo/restaurant-1505275350441-83dcda8eeef5.jpg" alt="..." /></a></div>
                      <div className="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/restaurant-1508766917616-d22f3f1eea14.jpg"><img className="img-fluid" src="img/photo/restaurant-1508766917616-d22f3f1eea14.jpg" alt="..." /></a></div>
                      <div className="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/restaurant-1430931071372-38127bd472b8.jpg"><img className="img-fluid" src="img/photo/restaurant-1430931071372-38127bd472b8.jpg" alt="..." /></a></div>
                    </div>
                  </div>
                  {/* Amenities*/}
                  <div className="text-block">
                    <h3 className="mb-4">Amenities</h3>
                    <ul className="amenities-list list-inline">
                      <li className="list-inline-item mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-circle bg-secondary me-2"><i className="fa fa-check" /></div><span>Elevator</span>
                        </div>
                      </li>
                      <li className="list-inline-item mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-circle bg-secondary me-2"><i className="fa fa-check" /></div><span>Vegan friendly</span>
                        </div>
                      </li>
                      <li className="list-inline-item mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-circle bg-secondary me-2"><i className="fa fa-check" /></div><span>Alcohol served</span>
                        </div>
                      </li>
                      <li className="list-inline-item mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-circle bg-secondary me-2"><i className="fa fa-check" /></div><span>No smoking</span>
                        </div>
                      </li>
                      <li className="list-inline-item mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-circle bg-secondary me-2"><i className="fa fa-check" /></div><span>Parking spaces (paid)</span>
                        </div>
                      </li>
                      <li className="list-inline-item mb-3">
                        <div className="d-flex align-items-center">
                          <div className="icon-circle bg-secondary me-2"><i className="fa fa-check" /></div><span>WiFi</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                 
                </div>
                <div className="col-lg-4">
                  <div className="ps-xl-4">
                    {/* Opening Hours      */}
                    <div className="card border-0 shadow mb-5">
                      <div className="card-header bg-gray-100 py-4 border-0">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="subtitle text-sm text-primary">Opening in 5 minutes</p>
                            <h4 className="mb-0">Opening Hours </h4>
                          </div>
                          <svg className="svg-icon svg-icon svg-icon-light w-3rem h-3rem ms-3 text-muted flex-shrink-0">
                            <use xlinkHref="#wall-clock-1"> </use>
                          </svg>
                        </div>
                      </div>
                      <div className="card-body">
                        <table className="table text-sm mb-0">
                          <tbody><tr>
                            <th className="ps-0 border-0">Sunday</th>
                            <td className="pe-0 text-end border-0">8:00 am - 6:00 pm</td>
                          </tr>
                            <tr>
                              <th className="ps-0">Monday</th>
                              <td className="pe-0 text-end">8:00 am - 6:00 pm</td>
                            </tr>
                            <tr>
                              <th className="ps-0">Tuesday</th>
                              <td className="pe-0 text-end">8:00 am - 6:00 pm</td>
                            </tr>
                            <tr>
                              <th className="ps-0">Wednesday</th>
                              <td className="pe-0 text-end">8:00 am - 6:00 pm</td>
                            </tr>
                            <tr>
                              <th className="ps-0">Thursday</th>
                              <td className="pe-0 text-end">8:00 am - 6:00 pm</td>
                            </tr>
                            <tr>
                              <th className="ps-0">Friday</th>
                              <td className="pe-0 text-end">8:00 am - 6:00 pm</td>
                            </tr>
                            <tr>
                              <th className="ps-0">Saturday</th>
                              <td className="pe-0 text-end">Closed</td>
                            </tr>
                          </tbody></table>
                      </div>
                    </div>
                    {/* Contact*/}
                    <div className="card border-0 shadow mb-5">
                      <div className="card-header bg-gray-100 py-4 border-0">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="subtitle text-sm text-primary">Drop Us a Line</p>
                            <h4 className="mb-0">Contact</h4>
                          </div>
                          <svg className="svg-icon svg-icon svg-icon-light w-3rem h-3rem ms-3 text-muted flex-shrink-0">
                            <use xlinkHref="#fountain-pen-1"> </use>
                          </svg>
                        </div>
                      </div>
                      <div className="card-body">
                        <ul className="list-unstyled mb-4">
                          <li className="mb-2"> <a className="text-gray-00 text-sm text-decoration-none" href="#"><i className="fa fa-phone me-3" /><span className="text-muted">(020) 123 456 789</span></a></li>
                          <li className="mb-2"> <a className=" text-sm text-decoration-none" href="#"><i className="fa fa-envelope me-3" /><span className="text-muted">info@example.com</span></a></li>
                          <li className="mb-2"> <a className=" text-sm text-decoration-none" href="#"><i className="fa fa-globe me-3" /><span className="text-muted">www.example.com</span></a></li>
                          <li className="mb-2"> <a className="text-blue text-sm text-decoration-none" href="#"><i className="fab fa-facebook me-3" /><span className="text-muted">Facebook</span></a></li>
                          <li className="mb-2"> <a className=" text-sm text-decoration-none" href="#"><i className="fab fa-twitter me-3" /><span className="text-muted">Twitter</span></a></li>
                          <li className="mb-2"> <a className=" text-sm text-decoration-none" href="#"><i className="fab fa-instagram me-3" /><span className="text-muted">Instagram</span></a></li>
                          <li className="mb-2"> <a className=" text-sm text-decoration-none" href="#"><i className="fab fa-google-plus me-3" /><span className="text-muted">Google+</span></a></li>
                        </ul>
                        <div className="d-grid text-center"><a className="btn btn-outline-primary" href="#"> <i className="far fa-paper-plane me-2" />Send a Message</a></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <p><a className="text-secondary" href="#"> <i className="fa fa-heart" /> Bookmark This Listing</a></p><span>79 people bookmarked this place </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


        </div>
      ) : (
        <h4 className="center"><Loader /></h4>
      )}
    </div>
  );
}

export default RestaurantsDetail;