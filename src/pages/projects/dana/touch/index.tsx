import React, { useState } from 'react'
import styles from "@/styles/Projects/Dana/Touch.module.css"
import Link from 'next/link'
import Image from 'next/image'

const TouchPage = () => {
    const [queChille, setQueChille] = useState(false)

    return (
        <>
            <header className={styles.header}>
                <Link href={"/projects/dana"}>
                    <Image
                        src="/icons/atras.png"
                        alt="Pagina oficial de accesa: https://accesa.me/"
                        width={30}
                        height={30}
                    />
                    Volver
                </Link>
            </header>

           
        </>
    )
}

export default TouchPage
