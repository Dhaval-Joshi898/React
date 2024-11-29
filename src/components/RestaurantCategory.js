import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItemList, setShowIndex, index }) => {
  // console.log('category data',data)  //on the go destructuring it  category items data like recommended ,veg ,sides  data

  const handleClick = () => {
    setShowIndex(index);
    // console.log(1)
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className=" w-6/12 bg-gray-100 shadow-lg  my-6  mx-auto  p-4"
      >
        <div className="flex justify-between cursor-pointer">
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {showItemList && <ItemList items={data.itemCards}></ItemList>}
     


    </div>
    </div>
    
  );
};

export default RestaurantCategory;
