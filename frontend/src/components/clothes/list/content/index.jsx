import ClothesElement from "./element"
import styles from './style.module.css'
import { Link } from "react-router-dom"

function ClothesContent({ clothes, handleClick }) {
  // console.log(clothes)
  return (
    <div>
      <div className={styles.flexbox_container}>
        {clothes.map((item, index) => {
          const address = '/clothes/show/' + item._id
          //return <><Link to={address}><ClothesElement item={item} key={index} /></Link></>
          return <button onClick={() => handleClick(item._id)} key={index}><ClothesElement item={item} key={index} /></button>
        })}

      </div>
    </div>
  )
}

export default ClothesContent