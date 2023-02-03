import React, { useState } from 'react'
import stylesBasic from "@/styles/Projects/Dana/Touch.module.css"
import styles from "@/styles/Projects/Dana/TouchHome.module.css"
import Link from 'next/link'
import Image from 'next/image'
import TouchMenu from '@/components/dana/touchMenu'

const TouchPage = () => {
    const [menu, setMenu] = useState("home")

    return (
        <>

            <main className={stylesBasic.main}>
                <TouchMenu tipo="home"></TouchMenu>
                <section className={stylesBasic.show}>
                    <main className={styles.home}>
                        <h1>Configuración de Touchs </h1>
                        <p>Todos los touch necesitan internet para poder ser configurados. La configuracion se guarda en una base de datos. Aqui se puede modificar cada parametro de ellos.</p>
                        <p>"Por defecto al programar un touch entra a la plantilla de <b>NO ASIGNADO</b>"</p>

                        <div className={styles.tarjetas_contain}>

                            <Link href={"/projects/dana/touch/sinAsignar"} className={styles.tarjeta}>
                                <div className={styles.tarjeta_img}>
                                    <Image
                                        src="/icons/no_asignado.png"
                                        alt="Pagina oficial de accesa: https://accesa.me/"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                {/* <hr /> */}
                                <div className={styles.tarjeta_info}> 
                                    <h1>No Asignado</h1>
                                    <p>Touch que aun no se les a asignado un proyecto</p>
                                </div>
                            </Link>
                            
                            <Link href={"/projects/dana/touch/proyectos"} className={styles.tarjeta}>
                                <div className={styles.tarjeta_img}>
                                    <Image
                                        src="/icons/proyectos_asignados.png"
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
                            </Link>

                            <Link href={"/projects/dana/touch/tabla"} className={styles.tarjeta}>
                                <div className={styles.tarjeta_img}>
                                    <Image
                                        src="/icons/tablas.png"
                                        alt="Pagina oficial de accesa: https://accesa.me/"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                {/* <hr /> */}
                                <div className={styles.tarjeta_info}> 
                                    <h1>Tablas de datos</h1>
                                    <p>Todos los dispostivos en caso de ver su estatus </p>
                                    </div>
                            </Link>
                            
                        </div>
                    </main>
                </section>
            </main>
        </>
    )
}

export default TouchPage
