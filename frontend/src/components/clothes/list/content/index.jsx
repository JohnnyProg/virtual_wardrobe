import ClothesElement from "./element"
import styles from './style.module.css'

function ClothesContent({clothes}) {
  console.log(clothes)
  return (
    <div>
      <div className={styles.flexbox_container}>
        {clothes.map((item, index) => <ClothesElement item={item} key={index}/>)}
        
      </div>
    </div>
  )
}

export default ClothesContent