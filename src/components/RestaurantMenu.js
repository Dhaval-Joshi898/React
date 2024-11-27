import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams(); // Destructuring resId from dynamic route

  const resInfo = useRestaurantMenu(resId)

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

  // console.log("recommendedCArdssssssssssss",recommendedCard)
  // Extract itemCards from the "Recommended" card if it exists
  const { itemCards } = recommendedCard?.card?.card || [];
  // console.log("items cardsssssssss",itemCards)

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
    return c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  })

  // console.log(categories)

  return (
    <div className="text-center">
      <h2 className="font-bold text-2xl my-4">{name}</h2>
      <span className="font-bold text-lg"> {cuisines?.join(",")} - {costForTwoMessage}</span>

      {categories.map((category) => {
        return <RestaurantCategory data={category.card.card}></RestaurantCategory>
      })}

    </div>

  );
};


export default RestaurantMenu;
