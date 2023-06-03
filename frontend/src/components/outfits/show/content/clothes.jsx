function ClothesElement({ item }) {
    
    return (
        <div className={"card card-compact border-primary h-60 w-40 bg-base-300 shadow-xl m-3"} >
            <figure className='h-40 w-40 '><img src={item.imageUrl} alt="Shoes" /></figure>
            <div className="card-body w-40 h-20">
                 <h2 className="card-title">
                    {item?.name}
                </h2>
                {/* <div className="card-actions justify-end mt-auto">
                    <div className="badge badge-outline">{item?.colorType}</div>
                    <div className="badge badge-outline">{item?.ocasion}</div>
                </div>  */}
            </div>
        </div>
    )
}

export default ClothesElement