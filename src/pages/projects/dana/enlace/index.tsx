import React from 'react'
import Link from 'next/link'
import styles from "@/styles/Projects/Enlace/Enlace.module.css"

const Enlace = () => {
    return (
        <div className={styles.enlace}>
            <header className={styles.header}>
                <div className={styles.header_home}>
                    <Link href="/projects/dana">Home</Link>
                </div>
            </header>
            <main className={styles.main}>
                <h1>Datos</h1>
            </main>
        </div>
    )
}

export default Enlace
