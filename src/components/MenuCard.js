import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {MENU_API} from "../../utils/constants";

const MenuCard = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId}=useParams()   //this was passed in dynamic route inside App.js liek this:resId
  //it gives object containing dynamic route (id) i.e resID we destructred it
  

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resId );
    const json = await data.json();

    // console.log(json.data);
    // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log(itemCards);
  return (
    <div className="menu-card-container">
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{costForTwoMessage}</h4>
      <div className="menu-list">
        <ul>
          {itemCards.map((items) => {
            // {console.log(items)}
            return (
              <li key={items?.card?.info?.id}>
                {items?.card?.info?.name} - Rs{" "}
                {items?.card?.info?.price / 100 ||
                  items?.card?.info?.defaultPrice / 100}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenuCard;
