import React, { useState } from 'react'
import stylesBasic from "@/styles/Projects/Dana/Touch.module.css"
import styles from "@/styles/Projects/Dana/TouchHome.module.css"
import Link from 'next/link'
import Image from 'next/image'
import TouchMenu from '@/components/dana/touchMenu'

const TablasTouchConf = () => {
    const [menu, setMenu] = useState("home")

    return (
        <>

            <main className={stylesBasic.main}>
                <TouchMenu tipo="tabla"></TouchMenu>
                <section className={stylesBasic.show}>
                    <main className={styles.home}>
                        <h1>Tabla con todos los proyectos</h1>
                        
                    </main>
                </section>
            </main>
        </>
    )
}

export default TablasTouchConf
