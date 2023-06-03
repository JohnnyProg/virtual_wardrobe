function ClothesElement({ item, isSelected }) {
    let selected = ""
    if(isSelected) {
        selected = " card-bordered border-2"
    }
    return (
        <div className={"card card-compact border-primary h-96 w-60 bg-base-300 shadow-xl m-7" + selected} >
            <figure className='h-64 w-60 '><img src={item.imageUrl} alt="Shoes" /></figure>
            <div className="card-body w-60 h-32">
                 <h2 className="card-title">
                    {item?.name}
                </h2>
                <div className="card-actions justify-end mt-auto">
                    <div className="badge badge-outline">{item?.colorType}</div>
                    <div className="badge badge-outline">{item?.ocasion}</div>
                </div> 
            </div>
        </div>
    )
}

export default ClothesElement