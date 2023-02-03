import React, { useState } from 'react'
import stylesBasic from "@/styles/Projects/Dana/Touch.module.css"
import styles from "@/styles/Projects/Dana/TouchHome.module.css"
import Link from 'next/link'
import Image from 'next/image'
import TouchMenu from '@/components/dana/touchMenu'

const SinAsignar = () => {
    const [menu, setMenu] = useState("home")

    return (
        <>

            <main className={stylesBasic.main}>
                <TouchMenu tipo="sin_asignar"></TouchMenu>
                <section className={stylesBasic.show}>
                    <main className={styles.home}>
                        <h1>Touch con proyecto "Sin Asignar" </h1>

                        <div className={styles.tarjetas_contain}>

                            <div className={styles.tarjeta}>
                                <div className={styles.tarjeta_img}>
                                    <Image
                                        src="/icons/desconocido.png"
                                        alt="Pagina oficial de accesa: https://accesa.me/"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                {/* <hr /> */}
                                <div className={styles.tarjeta_info}>
                                    <h1>Proyectos</h1>
                                    <p>Touchs que ya tiene un proyecto asignado</p>
                                </div>
                            </div>
                            <div className={styles.tarjeta}>
                                <div className={styles.tarjeta_img}>
                                    <Image
                                        src="/icons/desconocido.png"
                                        alt="Pagina oficial de accesa: https://accesa.me/"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                {/* <hr /> */}
                                <div className={styles.tarjeta_info}>
                                    <h1>Proyectos</h1>
                                    <p>Touchs que ya tiene un proyecto asignado</p>
                                </div>
                            </div>
                            <div className={styles.tarjeta}>
                                <div className={styles.tarjeta_img}>
                                    <Image
                                        src="/icons/desconocido.png"
                                        alt="Pagina oficial de accesa: https://accesa.me/"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                {/* <hr /> */}
                                <div className={styles.tarjeta_info}>
                                    <h1>Proyectos</h1>
                                    <p>Touchs que ya tiene un proyecto asignado</p>
                                </div>
                            </div>
                            <div className={styles.tarjeta}>
                                <div className={styles.tarjeta_img}>
                                    <Image
                                        src="/icons/desconocido.png"
                                        alt="Pagina oficial de accesa: https://accesa.me/"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                {/* <hr /> */}
                                <div className={styles.tarjeta_info}>
                                    <h1>Proyectos</h1>
                                    <p>Touchs que ya tiene un proyecto asignado</p>
                                </div>
                            </div>
                            <div className={styles.tarjeta}>
                                <div className={styles.tarjeta_img}>
                                    <Image
                                        src="/icons/desconocido.png"
                                        alt="Pagina oficial de accesa: https://accesa.me/"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                {/* <hr /> */}
                                <div className={styles.tarjeta_info}>
                                    <h1>Proyectos</h1>
                                    <p>Touchs que ya tiene un proyecto asignado</p>
                                </div>
                            </div>
                            <div className={styles.tarjeta}>
                                <div className={styles.tarjeta_img}>
                                    <Image
                                        src="/icons/desconocido.png"
                                        alt="Pagina oficial de accesa: https://accesa.me/"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                {/* <hr /> */}
                                <div className={styles.tarjeta_info}>
                                    <h1>Proyectos</h1>
                                    <p>Touchs que ya tiene un proyecto asignado</p>
                                </div>
                            </div>
                            <div className={styles.tarjeta}>
                                <div className={styles.tarjeta_img}>
                                    <Image
                                        src="/icons/desconocido.png"
                                        alt="Pagina oficial de accesa: https://accesa.me/"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                {/* <hr /> */}
                                <div className={styles.tarjeta_info}>
                                    <h1>Proyectos</h1>
                                    <p>Touchs que ya tiene un proyecto asignado</p>
                                </div>
                            </div>
                            <div className={styles.tarjeta}>
                                <div className={styles.tarjeta_img}>
                                    <Image
                                        src="/icons/desconocido.png"
                                        alt="Pagina oficial de accesa: https://accesa.me/"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                {/* <hr /> */}
                                <div className={styles.tarjeta_info}>
                                    <h1>Proyectos</h1>
                                    <p>Touchs que ya tiene un proyecto asignado</p>
                                </div>
                            </div>
                            <div className={styles.tarjeta}>
                                <div className={styles.tarjeta_img}>
                                    <Image
                                        src="/icons/desconocido.png"
                                        alt="Pagina oficial de accesa: https://accesa.me/"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                {/* <hr /> */}
                                <div className={styles.tarjeta_info}>
                                    <h1>Proyectos</h1>
                                    <p>Touchs que ya tiene un proyecto asignado</p>
                                </div>
                            </div>
                            <div className={styles.tarjeta}>
                                <div className={styles.tarjeta_img}>
                                    <Image
                                        src="/icons/desconocido.png"
                                        alt="Pagina oficial de accesa: https://accesa.me/"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                {/* <hr /> */}
                                <div className={styles.tarjeta_info}>
                                    <h1>Proyectos</h1>
                                    <p>Touchs que ya tiene un proyecto asignado</p>
                                </div>
                            </div>

                        </div>

                    </main>
                </section>
            </main>
        </>
    )
}

export default SinAsignar
