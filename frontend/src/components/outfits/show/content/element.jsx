import { Link } from "react-router-dom"
import ClothesElement from "./clothes"

function OutfitElement({ item }) {
    return (
        <div className="collapse collapse-arrow border border-base-300 bg-base-300 m-6 mb-0 rounded">
            <input type="checkbox" name="test1"/>
            <div className="collapse-title text-2xl font-medium">
                {item.name}
            </div>
            <div className="collapse-content bg-base-200">

                {item.clothes.map((item, index) => {
                    let address = '/clothes/show/' + item._id
                    // return <Link tabIndex={0} to={address} key={item._id} onClick={(e) => console.log("asd")}><ClothesElement item={item} key={index} /></Link>
                    return <button onClick={() => window.location = address} key={index}><ClothesElement item={item} key={index} /></button>
                    // return <ClothesElement item={item} key={index} />
                    //   return <button onClick={() => handleClick(item._id)} key={index}><ClothesElement item={item} key={index} isSelected={false}/></button>
                })}
            </div>
        </div>
    )

    // return (

    //     <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200 m-6 mb-0 rounded">
    //         <div className="collapse-title text-xl font-medium">
    //             {item.name}
    //         </div>
    //         <div className="collapse-content">
    //             <div className="flex flex-row">
    //                 {console.log("inside outfitElement", item)}
    //                 {item.clothes.map((item, index) => {
    //                     let address = '/clothes/show/' + item._id
    //                     // return <Link tabIndex={0} to={address} key={item._id} onClick={(e) => console.log("asd")}><ClothesElement item={item} key={index} /></Link>
    //                     return <button onClick={() => window.location = address}><ClothesElement item={item} key={index} /></button>
    //                     // return <ClothesElement item={item} key={index} />
    //                     //   return <button onClick={() => handleClick(item._id)} key={index}><ClothesElement item={item} key={index} isSelected={false}/></button>
    //                 })}
    //             </div>

    //         </div>
    //     </div>
    // )
}

export default OutfitElement