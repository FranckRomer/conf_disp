import React from 'react'
import Link from 'next/link'
import styles from "@/styles/Header/HeaderHome.module.css"

const HeaderHome = (props: any) => {
    return (
        <div className={styles.header}>

            <div className={styles.logo}>
                <Link href={"/"}>
                    {props.tipo == "home" ? <h3>Inicio</h3> : <h4>Inicio</h4>}
                </Link>
            </div>

            <div className={styles.menus}>                
                <Link href={"projects/train/tellez"}>
                    {props.tipo == "trainz" ? <h3>TrainZ</h3> : <h4>TrainZ</h4>}
                </Link>
                <Link href={"projects/dana"}>
                    {props.tipo == "dana" ? <h3>Dana</h3> : <h4>Dana</h4>}
                </Link>
                <Link href={"projects/dana"}>
                    {props.tipo == "dana" ? <h3>Parking</h3> : <h4>Parking</h4>}
                </Link>
            </div>

            <div className={styles.login}>
                <Link href={"/login"}>
                    {props.tipo == "login" ? <h3>Login</h3> : <h4>Login</h4>}
                </Link>
                <Link href={"/profile"}>
                    {props.tipo == "user" ? <h3>User</h3> : <h4>User</h4>}                    
                </Link>
            </div>

        </div>
    )
}

export default HeaderHome