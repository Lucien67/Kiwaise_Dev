import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import RestaurantSearch from '../components/restaurant-search';
import data from "../data/index.json"
import imgResto01 from '../assets/img/photo/photo-1525610553991-2bede1a236e2.jpg'
import RestaurantList from './restaurant-list';
import imgResto02 from '../assets/img/photo/restaurant-1508766917616-d22f3f1eea14.jpg'
import pResto01 from '../assets/img/photo/photo-1429554429301-1c7d5ae2d42e.jpg'
import avatar01 from '../assets/img/avatar/avatar-6.jpg'

import Restaurant from '../models/restaurant';
import RestaurantService from '../services/restaurant-service';
import restaurant from '../models/restaurant';




const Accueil = () => {

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
    <div>
      <section className="hero-home">
        <div className="swiper-container hero-slider">
          <div className="swiper-wrapper dark-overlay">
            <div className="swiper-slide"  > <img className="swiper-slide" src={imgResto01} alt="" /> </div>
            <div className="swiper-slide" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_960_720.jpg)' }} />
            <div className="swiper-slide" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/09/14/11/12/food-3676796_960_720.jpg)' }} />
            <div className="swiper-slide" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg)' }} />
          </div>
        </div>
        <div className="container py-6 py-md-7 text-white z-index-20">
          <div className="row">
            <div className="col-xl-10 offset-1">
              <div className="text-center ">

                <h4 className="display-5 fw-bold text-shadow">Rechercher un restaurant</h4>
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

        </div>
      </section>
      <div className='container'>
        <div className="row">

          {restaurants.map((restaurant) => (
              
            <div>
              <div className="col-sm-6 col-lg-4 mb-5 hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92" >
              
                <div className="card h-100 border-0 shadow">
                <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`} className="collection-item">
                  <div className="card-img-top overflow-hidden dark-overlay bg-cover" > <img src={restaurant.picture} alt={restaurant.name} />
                    {/*<img src="%PUBLIC_URL%\asset\img\photo\restaurant-1430931071372-38127bd472b8.jpg" alt="" /> */}
                    <div className="card-img-overlay-bottom z-index-10">
                      <h4 className="text-white text-shadow">
                        {restaurant.name}
                      </h4>
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
                  </Link>
                  <div className="card-body">
                    <p className="text-sm text-muted mb-3"> Cupidatat excepteur non dolore laborum et quis nostrud veniam dolore deserunt. Pariatur dolore ut in elit id nulla. Irur...</p>
                    <p className="text-sm text-muted text-uppercase mb-1">By <a href="#" className="text-dark">Matt Damon</a></p>
                    {restaurant.types.map(type => <a className="me-1" key={type} href="#">#{type}</a>)}
                    {/*<p className="text-sm mb-0"><a className="me-1" href="#">Restaurant</a><a className="me-1" href="#">Contemporary</a>
                </p>*/}
                  </div>
                </div>
              
            </div>
            </div>






          ))}

        </div>
        {/*<section className="py-6">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-8">
          <p className="subtitle text-primary">Les ???? les plus populaires</p>
          <h2>Quelle est la tendance</h2>
        </div>
        <div className="col-md-4 d-md-flex align-items-center justify-content-end">
        <Link className="text-muted text-sm" to="/restaurants"> Voir touts les restaurants<i className="fas fa-angle-double-right ms-2"></i></Link>
        </div>
     

      </div>
      <div className="row">
        <div className="d-flex align-items-lg-stretch mb-4 col-lg-8">
          <div className="card shadow-lg border-0 w-100 border-0 hover-animate" style={{background: 'center center url(img/photo/photo-1449034446853-66c86144b0ad.jpg) no-repeat', backgroundSize: 'cover'}}><a className="tile-link" href="category.html"> </a>
            <div className="d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7">
              <h3 className="text-shadow text-uppercase mb-0">San Francisco</h3>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-lg-stretch mb-4 col-lg-4">
          <div className="card shadow-lg border-0 w-100 border-0 hover-animate" style={{backgroundImage: 'center center url(https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg) no-repeat', backgroundSize: 'cover'}}><a className="tile-link" href="category.html"> </a>
            <div className="d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7">
              <h3 className="text-shadow text-uppercase mb-0">Los Angeles</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex align-items-lg-stretch mb-4 col-lg-4">
          <div className="card shadow-lg border-0 w-100 border-0 hover-animate" ><a className="tile-link" href="category.html"> </a>
            <div className="d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7">
              
              <h3 className="text-shadow text-uppercase mb-0">Santa Monica</h3>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-lg-stretch mb-4 col-lg-4">
          <div className="card shadow-lg border-0 w-100 border-0 hover-animate" style={{background: 'center center url(img/photo/photo-1505245208761-ba872912fac0.jpg) no-repeat', backgroundSize: 'cover'}}><a className="tile-link" href="category.html"> </a>
            <div className="d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7">
              <h3 className="text-shadow text-uppercase mb-0">San Diego</h3>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-lg-stretch mb-4 col-lg-4">
          <div className="card shadow-lg border-0 w-100 border-0 hover-animate" style={{background: 'center center url(img/photo/photo-1519867850-74775a87e783.jpg) no-repeat', backgroundSize: 'cover'}}><a className="tile-link" href="category.html"> </a>
            <div className="d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7">
              <h3 className="text-shadow text-uppercase mb-0">Fresno</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>*/}
        <section className="pt-4 pb-6">
          <div className="container">
            <div className="pb-lg-4">
              <p className="subtitle text-secondary">One-of-a-kind directory app</p>
              <h2 className="mb-5">Découvrez les restaurants autour de vous</h2>
            </div>
            <div className="row">

              <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
                <div className="px-0 pe-lg-3">
                  <Link className="text-muted text-sm" to="/restaurants">
                    <div className="icon-rounded mb-3 bg-secondary-light">
                      <svg className="svg-icon w-2rem h-2rem text-secondary">
                        <use xlinkHref="#love-pin-1"> </use>
                      </svg>
                    </div>
                    <h3 className="h6 text-uppercase">Trouvez le rerstaurant idéal</h3>
                  </Link>
                  <p className="text-muted text-sm">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in</p>
                </div>

              </div>

              <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
                <div className="px-0 pe-lg-3">
                  <div className="icon-rounded mb-3 bg-primary-light">
                    <svg className="svg-icon w-2rem h-2rem text-primary">
                      <use xlinkHref="#pay-by-card-1"> </use>
                    </svg>
                  </div>
                  <h3 className="h6 text-uppercase">Book your seats</h3>
                  <p className="text-muted text-sm">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
                <div className="px-0 pe-lg-3">
                  <div className="icon-rounded mb-3 bg-secondary-light">
                    <svg className="svg-icon w-2rem h-2rem text-secondary">
                      <use xlinkHref="#food-1"> </use>
                    </svg>
                  </div>
                  <h3 className="h6 text-uppercase">Enjoy your evening</h3>
                  <p className="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
                <div className="px-0 pe-lg-3">
                  <div className="icon-rounded mb-3 bg-primary-light">
                    <svg className="svg-icon w-2rem h-2rem text-primary">
                      <use xlinkHref="#pay-1"> </use>
                    </svg>
                  </div>
                  <h3 className="h6 text-uppercase">Gagnez des points</h3>
                  <p className="text-muted text-sm">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>




      <section className="py-7 position-relative dark-overlay"><img className="bg-image" src={imgResto02} alt="" />
        <div className="container">
          <div className="overlay-content text-white py-lg-5">
            <h3 className="display-3 fw-bold text-serif text-shadow mb-5">Ready for your next holidays?</h3><a className="btn btn-light" href="category-rooms.html">Get started</a>
          </div>
        </div>
      </section>





    </div>
  )

}

export default Accueil

function goToRestaurant(id: any): void {
  throw new Error('Function not implemented.');
}
