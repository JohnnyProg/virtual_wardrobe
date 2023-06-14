import { useState } from "react"
import axios from "axios"
import { Link, Outlet, useNavigate } from "react-router-dom"
import styles from './styles.module.css'
import { useCollapse } from 'react-collapsed'

function Navbar() {

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
        }

    return (
        <>
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl" href="/clothes">Virtual Wardrobe</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li tabIndex={0}>
                        <Link to='/clothes'>
                            Clothes
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                        <ul className="p-2 bg-base-300 z-10">
                            <li><Link to='/clothes'>Clothes</Link></li>
                            <li><Link to='/clothes/add'>Add Clothes</Link></li>
                        </ul>
                    </li>
                    <li tabIndex={0}>
                    <Link to='/outfits'>
                            Outfits
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                        <ul className="p-2 bg-base-300 z-10">
                            <li><Link to='/outfits'>Outfits</Link></li>
                            <li><Link to='/outfits/add'>Add Outfit</Link></li>
                        </ul>
                    </li>
                    <li tabIndex={0}>
                        <a>
                            Profile
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 bg-base-300 z-10">
                            {/* <li><Link to='/myprofile'>My Profile</Link></li>
                            <li><Link to='/myprofile/edit'>Settings</Link></li>
                            <div className="divider"></div> */}
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </li>
                    
                </ul>
            </div>
        </div>
        <Outlet/>
        </>
    )


    // return (
    //     <>
    //     {/* // main container for 
    //     <div className={styles.navbar_container}>
    //         {/* logo */}
    //         <div className={styles.navbar_logo}>
    //             <h3>Virtual Wardrobe</h3>
    //         </div>
    //         <div className={styles.navbar_profile}>
    //         <Link to='/profile' style={{ textDecoration: 'none' }}><h3 className={styles.navbar_link}>Mój profil</h3></Link>
    //         </div>
    //         <div className={styles.navbar_button}>
    //             <Link to='/outfits' style={{ textDecoration: 'none' }}><h3 className={styles.navbar_link}>Outfity</h3></Link>
    //         </div>
    //         <div className={styles.navbar_button}>
    //             <Link to='/clothes' style={{ textDecoration: 'none' }}><h3 className={styles.navbar_link}>Ubrania</h3></Link>
    //         </div>
    //         {/* profil with rozszerzane menu */}

    //     </div> */}
    //     <Outlet/>
    //     </>
    // )
}

export default Navbar