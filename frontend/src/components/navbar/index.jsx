import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styles from './styles.module.css'
import { useCollapse } from 'react-collapsed'

function Navbar() {

    return (

        // main container for 
        <div className={styles.navbar_container}>
            {/* logo */}
            <div className={styles.navbar_logo}>
                <h3>Virtual Wardrobe</h3>
            </div>
            <div className={styles.navbar_profile}>
            <Link to='/profile' style={{ textDecoration: 'none' }}><h3 className={styles.navbar_link}>Mój profil</h3></Link>
            </div>
            <div className={styles.navbar_button}>
                <Link to='/outfits' style={{ textDecoration: 'none' }}><h3 className={styles.navbar_link}>Outfity</h3></Link>
            </div>
            <div className={styles.navbar_button}>
                <Link to='/clothes' style={{ textDecoration: 'none' }}><h3 className={styles.navbar_link}>Ubrania</h3></Link>
            </div>
            {/* profil with rozszerzane menu */}

        </div>
    )
}

export default Navbar