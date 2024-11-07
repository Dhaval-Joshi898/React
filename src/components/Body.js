import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    // Super local State varaibles
    // let [listOfRestaurants, setlist0fRestaurants] = useState(resList) //hooks
    let [listOfRestaurants, setlist0fRestaurants] = useState([]) //hooks

    useEffect(() => {
        console.log('after ui rendered');
        fetchData();
    }, [])

    //fetching data from swiggy api
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2993420046926&lng=72.86991979871428&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json=await data.json() //converted to json
        console.log(json)
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setlist0fRestaurants( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)  //array jaa rha hai list0fRestaurants mein

    }

     //on laoding give shimmer UI (skeleton UI)
     if (listOfRestaurants.length === 0){
        return <Shimmer />   //this will not go below and exit it and if listOfrestaurants contain data this condition is ignored otherwise this coponent will render
     }


    return (
        <div className="body">
            <div className='filter'>
                <button className="filter-btn"
                    onClick={() => {
                        let filtered = listOfRestaurants.filter((res) => res.info.avgRating > 4.1);
                        console.log(filtered);
                        setlist0fRestaurants(filtered)
                    }}>Filter</button>
            </div>

            <div className='restaurant-container'>

                {listOfRestaurants.map((restaurant) => {
                    return < RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    // return < RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    //key is IMPORTANT to have unique key
                })}

            </div>
        </div>
    )
}

export default Body;