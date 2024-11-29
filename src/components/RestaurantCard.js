import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (prop) => {

    // console.log(prop)    RETURNS OBJECT
    const { resData } = prop

    // const {name,cuisines,costForTwo,deliveryTime,cloudinaryImageId,avgRating}=resData?.data
    const { name, cuisines, costForTwo, sla, cloudinaryImageId, avgRating } = resData?.info
    const { slaString } = sla

    //using react context
    const {loggedInName}=useContext(UserContext)

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">

            <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt="restro-logo" />

            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating + ' stars'}</h4>
            <h4>{costForTwo}</h4>
            <h4>{slaString}</h4>
            <h4>{slaString}</h4>
            <h4>{loggedInName}</h4>

        </div>
    )
}

export default RestaurantCard;