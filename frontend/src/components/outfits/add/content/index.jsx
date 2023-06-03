import ClothesElement from './element';

function ClothesContent({ clothes, selected, handleClick }) {
    return (
    <div>
      <div className="flex flex-wrap">
        {clothes.map((item, index) => {
          if(selected.includes(item._id)) {
            return <button onClick={() => handleClick(item._id)} key={index}><ClothesElement item={item} key={index} isSelected={true}/></button>
          }
          //return <><Link to={address}><ClothesElement item={item} key={index} /></Link></>
          return <button onClick={() => handleClick(item._id)} key={index}><ClothesElement item={item} key={index} isSelected={false}/></button>
        })}

      </div>
    </div>
  )
}

export default ClothesContent