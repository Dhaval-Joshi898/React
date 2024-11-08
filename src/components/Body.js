import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  
    // Super local State varaibles
    // let [listOfRestaurants, setlist0fRestaurants] = useState(resList) //hooks
    let [listOfRestaurants, setlist0fRestaurants] = useState([]) //hooks
    const [filteredRestaurants,setfilteredRestaurants]=useState([])  //this state variable created to keep above variable intact(not touched or changed) and mnipulated
    const [searchText,setSearchText]=useState('')

    useEffect(() => {
        console.log('after ui rendered body use effect');
        fetchData();
    }, [])
    
    //fetching data from swiggy api
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2993420046926&lng=72.86991979871428&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json() //converted to json
        // console.log(json)
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setlist0fRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)  //array jaa rha hai list0fRestaurants mein
        setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)  //Will be using this manipulation like search filtered
        

    }


    // //THIS is called CONDITIONAL RENDERING        //on laoding give shimmer UI (skeleton UI)
    //  if (listOfRestaurants.length === 0){
    //     return <Shimmer />   
    //  }

    //THE Below code is like if else using TERNARY OPERATOR
    return listOfRestaurants.length === 0 ?
        <Shimmer /> : (
            <div className="body">
                <div className='filter'>

                    <div className="search-div">
                        <input type="text"  value={searchText} onChange={(e)=>{
                            setSearchText(e.target.value)
                        }} ></input>

                        <button onClick={()=>{
                            let searchFiltered=listOfRestaurants.filter(
                                (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
                            setfilteredRestaurants(searchFiltered)
                        }}>Search</button>
                    </div>
                    
                    <button className="filter-btn"
                        onClick={() => {
                            let filtered = listOfRestaurants.filter((res) => res.info.avgRating > 4.1);
                            console.log(filtered);
                            setlist0fRestaurants(filtered)
                        }}>Filter</button>
                </div>

                <div className='restaurant-container'>

                    {filteredRestaurants.map((restaurant) => {
                        return < RestaurantCard key={restaurant.info.id} resData={restaurant} />
                        // return < RestaurantCard key={restaurant.data.id} resData={restaurant} />
                        //key ,it is IMPORTANT to have unique key
                    })}

                </div>
            </div>
        )
}

export default Body;