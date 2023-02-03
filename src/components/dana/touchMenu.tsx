import React from 'react'
import styles from "@/styles/Projects/Dana/Touch.module.css"
import Link from 'next/link'
import Image from 'next/image'

const TouchMenu = (prop:any) => {
    return (
        <section className={styles.menu}>
                    <div className={styles.menu_volver}>
                        <Link href={"/projects/dana"}>
                            <Image
                                src="/icons/atras.png"
                                alt="Pagina oficial de accesa: https://accesa.me/"
                                width={30}
                                height={30}
                            />
                            <div className={styles.menu_logo}>
                                <h3>Configuración</h3>
                                <p>Touch</p>
                                {/* <hr /> */}
                            </div>
                            {/* Volver */}
                        </Link>
                    </div>
                    <Link href={"/projects/dana/touch"} className={styles.menu_home}>     
                        {prop.tipo == "home" ? <h2>Home</h2> : <h3>Home</h3>}                   
                    </Link>
                    <Link href={"/projects/dana/touch/sinAsignar"} className={styles.menu_sin_asignar}>
                        {prop.tipo == "sin_asignar" ? <h2>Sin Asignar</h2> : <h3>Sin Asignar</h3>}                   
                    </Link>
                    <Link href={"/projects/dana/touch/proyectos"} className={styles.menu_proyectos}>
                        {prop.tipo == "proyectos" ? <h2>Proyectos</h2> : <h3>Proyectos</h3>}                   
                    </Link>
                    <Link href={"/projects/dana/touch/tabla"} className={styles.menu_tabla}>
                        {prop.tipo == "tabla" ? <h2>Tabla de Status</h2> : <h3>Tabla de Status</h3>}                   
                    </Link>
                </section>
    )
}

export default TouchMenu
