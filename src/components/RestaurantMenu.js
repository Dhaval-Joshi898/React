import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams(); // Destructuring resId from dynamic route

  const resInfo=useRestaurantMenu(resId)

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
  
  console.log("recommendedCArdssssssssssss",recommendedCard)
  // Extract itemCards from the "Recommended" card if it exists
  const {itemCards} = recommendedCard?.card?.card || [];
  console.log("items cardsssssssss",itemCards)

  return (
    <div className="menu-card-container">
      <h2>{name}</h2>
      <h3>{cuisines?.join(",")}</h3>
      <h4>{costForTwoMessage}</h4>
      <div className="menu-list">
        <ul>
          {itemCards.map((item) => {
            return (
              <li key={item?.card?.info?.id}> {item?.card?.info?.name} - Rs{" "}  {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};


export default RestaurantMenu;
