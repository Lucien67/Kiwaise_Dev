import React, {FunctionComponent, useState} from "react";
import RestaurantForm from "../components/restaurant-form";
import Restaurant from "../models/restaurant";
//import formatDate from '../helpers/format-date';


const RestaurantAdd: FunctionComponent = () => {
    // génération d'un "id" uniqueconst [id] = useState<number>(new Date().getTime());
    const [id] = useState<number>(new Date().getTime());
    // création d'un restaurant vierge + affecte new "id"
    const [restaurant] = useState<Restaurant>(new Restaurant(id));

    return (
        <div className="row">
            <h2 className="header center">Ajouter un Restaurant</h2>
            <RestaurantForm restaurant={restaurant} isEditForm={false}></RestaurantForm>
        </div>
    );
}

export default RestaurantAdd;