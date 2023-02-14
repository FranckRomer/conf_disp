import React from 'react'
import styles from "@/styles/Projects/Dana/DanaHome.module.css"
import Image from 'next/image'
import Link from 'next/link'

const DanaHome = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_home}>
                    <Link href="/">Home</Link>
                </div>
                <div className={styles.header_login}>
                    <Link href="/login">Login</Link>
                    <Link href="/profile">User</Link>
                </div>
            </header>
            <main className={styles.main}>
                <h1 className={styles.titulo}>Configuracion Dana</h1>
                <h2 className={styles.subtitulo}>Dispositivos</h2>
                <section className={styles.tarjeta_contain}>

                    <Link href={"/projects/dana/enlace"} className={styles.tarjeta}>
                        <div className={styles.tarjeta_img}>
                            <Image
                                src="/imgs/enlace.png"
                                alt="Pagina oficial de accesa: https://accesa.me/"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className={styles.tarjeta_info}>
                            <h3>Tarjeta de enlace</h3>
                            <p>Visualizador de dispositivos de tarjeta de enlace</p>
                        </div>
                    </Link>

                    <Link href={"/projects/dana/touch"} className={styles.tarjeta}>
                        <div className={styles.tarjeta_img}>
                            <Image
                                src="/imgs/touch_color.png"
                                alt="Pagina oficial de accesa: https://accesa.me/"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className={styles.tarjeta_info}>
                            <h3>Tarjetas Touch</h3>
                            <p>Configuracion de touch y visualizacion de dispositivos</p>
                        </div>
                    </Link>

                    <Link href={"/projects/dana"} className={styles.tarjeta}>
                        <div className={styles.tarjeta_img}>
                            <Image
                                src="/imgs/salidas.png"
                                alt="Pagina oficial de accesa: https://accesa.me/"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className={styles.tarjeta_info}>
                            <h3>Tarjeta de Salidas</h3>
                            <p>Configuracion de tarjeta de salidas</p>
                        </div>
                    </Link>
                    
                </section>
            </main>
        </>
    )
}

export default DanaHome