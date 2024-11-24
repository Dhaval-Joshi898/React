import { CDN_URL } from "../utils/constants";

const RestaurantCard = (prop) => {
    
    // console.log(prop)    RETURNS OBJECT
    const { resData } = prop
    
    // const {name,cuisines,costForTwo,deliveryTime,cloudinaryImageId,avgRating}=resData?.data
    const {name,cuisines,costForTwo,sla,cloudinaryImageId,avgRating}=resData?.info
    const {slaString}=sla
   
    return (
        <div className='restro-card' style={{ backgroundColor: 'f0f0f0' }}>
            <div className='restro-logo'>
                <img src={CDN_URL+cloudinaryImageId} alt="restro-logo" />
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating + ' stars'}</h4>
            <h4>{costForTwo}</h4>
            <h4>{slaString}</h4>

        </div>
    )
}

export default RestaurantCard;