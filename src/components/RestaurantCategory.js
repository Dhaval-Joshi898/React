const RestaurantCategory=({data})=>{
    // console.log(items)  //on the go destructuring it  category items data like recommended ,veg ,sides  data
    return(
        // <div className="my-6 font-bold content-between">
        <div>
            {/* Accordian Header */}
            {/* ResCategory */}
            <div className=" w-6/12 bg-gray-100 shadow-lg  my-6  mx-auto flex justify-between p-4">
                <span>{data.title}</span>
                <span>🔽</span>
            </div>
        
            {/* Accordian Body */}
        </div>
    )
}

export default RestaurantCategory;