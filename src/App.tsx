import React, { FunctionComponent} from 'react';
import RestaurantList from './pages/restaurant-list';
import RestaurantsDetail from './pages/restaurant-detail';
import PageNotFound from './pages/page-not-found';
import RestaurantEdit from './pages/restaurant-edit';
import RestaurantAdd from './pages/restaurant-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';
import Accueil from './pages/accueil';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';





const App: FunctionComponent = () => {

 return (

    <Router>
      <div>
      <nav> 
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo center">Plats du jour</Link>
        </div> 
      </nav>
      {/* Le système de gestions des routes de l'application */}
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/restaurants" component={RestaurantList} />
        <PrivateRoute exact path="/restaurant/add" component={RestaurantAdd}/>
        <PrivateRoute exact path="/restaurant/edit/:id" component={RestaurantEdit}/>
        <Route path="/restaurant/:id" component={RestaurantsDetail} />
        <Route component={PageNotFound} />
      </Switch>
      </div>
    </Router>
  
 )
}
  
export default App; 