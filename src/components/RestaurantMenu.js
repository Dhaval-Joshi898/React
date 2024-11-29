import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantMenu = () => {
  const { resId } = useParams(); // Destructuring resId from dynamic route

  const resInfo = useRestaurantMenu(resId)

  const[showIndex,setShowIndex]=useState(0)

  if (resInfo === null) {
    return <Shimmer />;
  }

  // Extracting basic restaurant details
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info || {};

  // Finding the index of the card with title "Recommended" 
  //Doing this because recommended title is at cards[2] index then .card.card.title and some are at cards[1].card.card.title 
  const recommendedCard = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
    (card) => card?.card?.card?.title === "Recommended"
    //the first card is name to current element of array i.e json so it is like card{card:{card:{title}}}
  );

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
    return c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  })

  // console.log(categories)

  return (
    <div className="text-center">
      <h2 className="font-bold text-2xl my-6">{name}</h2>
      <span className="font-bold text-lg"> {cuisines?.join(",")} - {costForTwoMessage}</span>

      {categories.map((category,index) => {
        // console.log(category)

        //Controlled Component
        return <RestaurantCategory 
        key={index} data={category.card.card} 
        showItemList={index===showIndex && true}
        // setShowIndex={()=>{setShowIndex(index)}}  // try inside setShowIndex console.log('setSHowindex',index)}}
        setShowIndex={() => {
          setShowIndex(showIndex === index ? null : index); // Toggle logic to close the open one if it is open
        }}
        index={index===showIndex}  
        > </RestaurantCategory>
      })}

    </div>

  );
};


export default RestaurantMenu;
