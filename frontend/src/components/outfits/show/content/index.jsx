import OutfitElement from './element';
import { Link } from "react-router-dom"

function OutfitsContent({ outfits }) {
      return (
          <div className="flex flex-col flex-grow">
            {outfits.map((item, index) => {

              return <OutfitElement item={item} key={index} />
            //   return <button onClick={() => handleClick(item._id)} key={index}><ClothesElement item={item} key={index} isSelected={false}/></button>
            })}

          </div>
      )
}

export default OutfitsContent