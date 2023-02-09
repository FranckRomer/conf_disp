import React, { useState } from 'react'
import styles from "@/styles/Projects/Dana/ConfigItemTouch.module.css"
import internal from 'stream'

const ConfigItemTouch = (props: any) => {
    const [datos, setDatos] = useState(props.item)
    const [pantallas, setPantallas] = useState(1)
    const [ventanaBotones, setVentanaBotones] = useState(false)
    const [cambiarBoton, SetCambiarBoton] = useState()

    //
    const AbrirVentanaBotones = (num_boton: string) => {
        setVentanaBotones(true)
        const newBoton = "boton" + num_boton
        SetCambiarBoton(datos.newBoton)
    }

    //
    return (
        <div>
            <div className={styles.panel_oscuro} onClick={() => props.hijoAPadre()}></div>
            <div className={styles.panel} >
                <div className={styles.header}>
                    {props.item.sonarEsp ?
                        <div className={styles.sonar}>
                            <div className={styles.sonar_img}></div>
                        </div>
                        :
                        <div className={styles.sonar_false}>
                            <div className={styles.sonar_img}></div>
                        </div>
                    }
                    <div className={styles.titulo}>
                        <p>Identificador: </p>
                        <h1>{props.item.identificador}</h1>

                    </div>
                    <div className={styles.cerrar} onClick={() => props.hijoAPadre()}><p>✖</p></div>

                </div>

                <div className={styles.grid}>

                    {/* ------------------------------ */}
                    {pantallas == 1 ?
                        <div className={styles.pantalla_contain}>
                            <h3>Configuracion de botones:</h3>
                            <div className={styles.seleccion_pantalla}>
                                <h3>Pantalla 1</h3>
                                <p onClick={() => setPantallas(2)}>Pantalla 2</p>
                            </div>
                            <div className={styles.pantalla}>
                                <div className={styles.botones}>
                                    <button onClick={() => { AbrirVentanaBotones("01") }}>1</button>
                                    <button>2</button>
                                    <button>3</button>
                                </div>
                                <div className={styles.pantalla_img}></div>
                                <div className={styles.botones}>
                                    <button>4</button>
                                    <button>5</button>
                                    <button>6</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className={styles.pantalla_contain}>
                            <h3>Configuracion de botones:</h3>
                            <div className={styles.seleccion_pantalla}>
                                <p onClick={() => setPantallas(1)}>Pantalla 1</p>
                                <h3>Pantalla 2</h3>
                            </div>
                            <div className={styles.pantalla}>
                                <div className={styles.botones}>
                                    <button>7</button>
                                    <button>8</button>
                                    <button>9</button>
                                </div>
                                <div className={styles.pantalla_img}></div>
                                <div className={styles.botones}>
                                    <button>10</button>
                                    <button>11</button>
                                    <button>12</button>
                                </div>
                            </div>
                        </div>

                    }

                    {/* ------------------------------ */}
                    <div className={styles.ajustes_contain}>
                        <h3>Ajustes del Touch:</h3>



                        <form action="/send-data-here" method="post">
                            <label >Identificador:</label>
                            <input
                                type="text"
                                id="identificador"
                                name="identificador"
                                placeholder={props.item.identificador}
                                required
                            />
                            <button type="submit">Cambiar</button>
                        </form>
                        <hr />

                        <form action="/send-data-here" method="post">
                            <label >Proyecto:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder={props.item.project}
                                required
                            />
                            <label >Tiempo de envio:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder={props.item.tiempo_envio}
                            />
                            <button type="submit">Cambiar</button>
                        </form>
                        <hr />
                        <form action="/send-data-here" method="post">
                            <label >SSID:</label>
                            <input
                                type="text"
                                id="identificador"
                                name="identificador"
                                required
                                placeholder={props.item.ssid}
                            />
                            <label >Password:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder={props.item.password}
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* //?--------------------------------- */}

            {ventanaBotones ?
                <div>
                    <div className={styles.panel_oscuro2} onClick={() => setVentanaBotones(false)}></div>
                    <div className={styles.panel_botones}>
                        <div className={styles.cerrar} onClick={() => setVentanaBotones(false)}><p>✖</p></div>
                        {/* <p>Can: {cambiarBoton.can}</p>                        
                        <br />
                        <p>Pin: {cambiarBoton.pin}</p> */}
                        
                    </div>
                </div>
                :
                ""
            }
        </div>
    )
}

export default ConfigItemTouch
