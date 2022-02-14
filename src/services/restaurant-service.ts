import Restaurant from "../models/restaurant";
 
export default class RestaurantService {
 
  static getRestaurants(): Promise<Restaurant[]> {
    return fetch('http://localhost:3001/pokemons')
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }
 
  static getRestaurant(id: number): Promise<Restaurant|null> {
    return fetch(`http://localhost:3001/pokemons/${id}`)
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(error => this.handleError(error));
  }

  static updateRestaurant(restaurant: Restaurant): Promise<Restaurant> {
      return fetch(`http://localhost:3001/pokemons/${restaurant.id}`, {
          method: 'PUT',
          body: JSON.stringify(restaurant),
          headers: { 'Content-Type': 'application/json' }
      })
        .then(response => response.json())
        .catch(error => this.handleError(error));
  }

  static deleteRestaurant(restaurant: Restaurant): Promise<{}> {
    return fetch(`http://localhost:3001/pokemons/${restaurant.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .catch(error => this.handleError(error));
  }

  static addRestaurant(restaurant: Restaurant): Promise<Restaurant> {
      //delete pokemon.created;

    return fetch(`http://localhost:3001/pokemons/`, {
        method: 'POST',
        body: JSON.stringify(restaurant),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .catch(error => this.handleError(error));
  }
        
 
  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  static handleError(error: Error): void {
      console.log(error);
      
  }

  static searchRestaurant(term: string): Promise<Restaurant[]> {
    return fetch(`http://localhost:3001/pokemons?q=${term}`)
    .then(response => response.json())
    .catch(error => this.handleError(error));
  }
}