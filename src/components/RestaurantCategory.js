import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data }) => {
    // console.log('category data',data)  //on the go destructuring it  category items data like recommended ,veg ,sides  data
    const [itemsList,setItemsList]=useState(false)

    return (
       
        <div>
            <div onClick={()=>{
                    if(itemsList===false){
                    setItemsList(true)}
                    else{
                        setItemsList(false)
                    }
                    
                }} className=" w-6/12 bg-gray-100 shadow-lg  my-6  mx-auto  p-4">
                <div  className="flex justify-between cursor-pointer">
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>

                {itemsList && <ItemList items={data.itemCards}></ItemList>}

            </div>
        </div>

    )
}

export default RestaurantCategory;