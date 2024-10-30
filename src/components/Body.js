import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className='search'>
                Search
            </div>
            <div className='restaurant-container'>

                {resList.map((restaurant) => {
                    return < RestaurantCard key={restaurant.data.id} resData={restaurant} /> 
                    //key is IMPORTANT to have unique key
                })}

            </div>
        </div>
    )
}

export default Body;