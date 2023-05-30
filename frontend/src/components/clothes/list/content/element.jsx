import styles from './style.module.css'

function ClothesElement({ item }) {

    return (
        <div className="card card-compact h-80 w-60 bg-base-300 shadow-xl m-7">
            <figure className='h-60 w-60 '><img src={item.imageUrl} alt="Shoes" /></figure>
            <div className="card-body w-60 h-20">
                 <h2 className="card-title">
                    {item?.name}
                </h2>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{item?.colorType}</div>
                    <div className="badge badge-outline">{item?.ocasion}</div>
                </div> 
            </div>
        </div>
    )

    // return(
    //     // whole object
    //     <div className='h-64 w-44 flex items-center justify-center shadow-2xl m-7'>
    //         {/* for centering */}
    //         <div className='h-60 w-40'>
    //             {/* picture */}
    //             <div className='h-40 w-36 m-auto'>
    //                 <img className='max-h-full max-w-full mx-auto' src={item.imageUrl}/>
    //             </div>
    //             {/* data */}
    //             <div>
    //                 <h5>{item?.name}</h5>
    //                 <div>color : {item?.colorType}</div>
    //                 <div>okazja: {item?.ocasion}</div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default ClothesElement