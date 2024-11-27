import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    // Super local State varaibles
    // let [listOfRestaurants, setlist0fRestaurants] = useState(resList) //hooks
    let [listOfRestaurants, setlist0fRestaurants] = useState([]) //hooks
    const [filteredRestaurants, setfilteredRestaurants] = useState([])  //this state variable created to keep above variable intact(not touched or changed) and mnipulated
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        console.log('after ui rendered body use effect');
        fetchData();
    }, [])

    //fetching data from swiggy api
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2993420046926&lng=72.86991979871428&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json()


        setlist0fRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)  //array jaa rha hai list0fRestaurants mein
        setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)  //Will be using this manipulation like search filtered

    }


    // //THIS is called CONDITIONAL RENDERING        //on laoding give shimmer UI (skeleton UI)
    //  if (listOfRestaurants.length === 0){
    //     return <Shimmer />   
    //  }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
            <div>
                <h1>Looks Like you are offline!! Check Your Internet connection</h1>
            </div>
        )
    }


    //THE Below code is like if else using TERNARY OPERATOR
    return listOfRestaurants.length === 0 ?
        <Shimmer /> : (
            <div className="body">
                <div className='filter flex'>

                    <div className="search m-4 p-4">
                        <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                            setSearchText(e.target.value)
                        }} ></input>

                        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                            onClick={() => {
                                let searchFiltered = listOfRestaurants.filter(
                                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                                setfilteredRestaurants(searchFiltered)
                            }}>Search</button>
                    </div>
                     
                    <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() => {
                            let filtered = listOfRestaurants.filter((res) => res.info.avgRating > 4.1);
                            console.log(filtered);
                            setfilteredRestaurants(filtered)
                        }}>Filter</button>
                        </div>
                </div>

                <div className='flex flex-wrap'>

                    {filteredRestaurants.map((restaurant) => {
                        return <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id} > < RestaurantCard resData={restaurant} /> </Link>
                        // return < RestaurantCard key={restaurant.data.id} resData={restaurant} />
                        //key ,it is IMPORTANT to have unique key
                    })}

                </div>
            </div>
        )
}

export default Body;