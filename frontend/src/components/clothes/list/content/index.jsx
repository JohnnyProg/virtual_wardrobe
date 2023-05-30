import ClothesElement from "./element"
import styles from './style.module.css'
import { Link } from "react-router-dom"

function ClothesContent({ clothes }) {
  console.log(clothes)
  return (
    <div>
      <div className={styles.flexbox_container}>
        {clothes.map((item, index) => {
          const address = '/clothes/show/' + item._id
          return <><Link to={address}><ClothesElement item={item} key={index} /></Link></>
        })}

      </div>
    </div>
  )
}

export default ClothesContent