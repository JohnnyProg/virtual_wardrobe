import styles from './style.module.css'

function ClothesElement({item}) {
    return(
        // whole object
        <div className={styles.element_container}>
            {/* for centering */}
            <div className={styles.element_centering}>
                {/* picture */}
                <div>
                    <img src="https://dictionary.cambridge.org/pl/images/thumb/shirt_noun_002_33400.jpg?version=5.0.318"/>
                </div>
                {/* data */}
                <div>
                    <h5>{item?.name}</h5>
                    <div>materiał : {item?.material}</div>
                    <div>okazja: {item?.ocasion}</div>
                </div>
            </div>
        </div>
    )
}

export default ClothesElement