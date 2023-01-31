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

            <main className={styles.main}>
                <h1 className={styles.titulo}>Touch</h1>
                <section className={styles.grid}>

                    <div className={styles.seleccionar_contain}>
                        <h1>Seleccionar Dispositivo</h1>
                        <div className={styles.tabla}>
                            <div className={styles.tabla_head}>
                                <p>Nombre</p>
                                <p>Projecto</p>
                                <p>Num Serie</p>
                                <p>Seleccionar</p>
                            </div>
                            <div className={styles.tabla_body}>
                                <div className={styles.tabla_dato}>
                                    <p>Cocina</p>
                                    <p>Casa cidi</p>
                                    <p>12:43:23:f3:22</p>
                                    <button>Select</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className={styles.pantalla_contain}>
                        <div className={styles.nombre_touch}>
                            <div>
                                <p>Identificador:</p>
                                <h2>Cocina</h2>
                                <button>Modificar</button>
                            </div>
                            <div>
                                <p>Proyecto:</p>
                                <h2>casa cidi</h2>
                                <button>Modificar</button>
                            </div>
                        </div>

                        {/* <hr /> */}

                        {!queChille ?
                            <div className={styles.sonar} onClick={() => setQueChille(true)}>
                                <Image
                                    src="/icons/bocina.png"
                                    alt="Pagina oficial de accesa: https://accesa.me/"
                                    width={45}
                                    height={45}
                                />
                                <p >
                                    Que Chille! ... ༼ つ ◕_◕ ༽ つ
                                </p>
                            </div>
                            :
                            <div className={styles.sonando} onClick={() => setQueChille(false)}>
                                <Image
                                    src="/icons/bocina_off.png"
                                    alt="Pagina oficial de accesa: https://accesa.me/"
                                    width={45}
                                    height={45}
                                />
                                <p>
                                    Chillando! ... (ノ ಠ 益 ಠ) ノ 彡 ┻━┻
                                </p>
                            </div>
                        }
                        <div className={styles.selecionar_pantalla}>
                            <h3>Pantalla1</h3>
                            <p>Pantalla2</p>
                        </div>

                        <div className={styles.pantalla}>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                        </div>

                        <div className={styles.ssid_pass}>
                            <h3>Modificar Red:</h3>
                            <div className={styles.ssid}>
                                <p>Ssid:</p>
                                <input
                                    type="text"
                                    placeholder='Nombre de la Red'
                                />
                            </div>
                            <div className={styles.pass}>
                                <p>Password:</p>
                                <input
                                    type="text"
                                    placeholder='Contraseña'
                                />
                            </div>
                            <div className={styles.ssid_button}>
                                <button>Modificar</button>
                            </div>
                        </div>

                    </div>

                </section>
            </main>
        </>
    )
}

export default TouchPage
