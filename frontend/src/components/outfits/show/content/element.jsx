import { Link } from "react-router-dom"
import ClothesElement from "./clothes"

function OutfitElement({ item }) {
    return (

        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200 m-6 mb-0 rounded">
            <div className="collapse-title text-xl font-medium">
                {item.name}
            </div>
            <div className="collapse-content">
                <div className="flex flex-row">
                    {console.log("inside outfitElement", item)}
                    {item.clothes.map((item, index) => {

                        return <ClothesElement item={item} key={index} />
                        //   return <button onClick={() => handleClick(item._id)} key={index}><ClothesElement item={item} key={index} isSelected={false}/></button>
                    })}
                </div>

            </div>
        </div>
    )
}

export default OutfitElement