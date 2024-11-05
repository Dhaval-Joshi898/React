import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {

    // Super local State varaibles
    let [listOfRestaurants, setlist0fRestaurants] = useState(resList) //hooks

    useEffect(()=>{
        console.log('after ui rendered')
    },[])

    //fetching data from swiggy api
    const fetchData

    return (
        <div className="body">
            <div className='filter'>
                <button className="filter-btn"
                    onClick={() => {
                        let filtered = listOfRestaurants.filter((res) => res.data.avgRating > 4.1);
                        console.log(filtered);
                        setlist0fRestaurants(filtered)
                    }}>Filter</button>
            </div>

            <div className='restaurant-container'>

                {listOfRestaurants.map((restaurant) => {
                    return < RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    //key is IMPORTANT to have unique key
                })}

            </div>
        </div>
    )
}

export default Body;