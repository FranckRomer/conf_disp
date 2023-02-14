import React, { useState } from 'react'
import styles from "@/styles/Projects/Dana/ConfigItemTouch.module.css"
import internal from 'stream'
import { log } from 'console'
import axios from 'axios'
import { Anybody } from '@next/font/google'

const ConfigItemTouch = (props: any) => {
    const [datos, setDatos] = useState(props.item)
    const [pantallas, setPantallas] = useState(1)
    const [ventanaBotones, setVentanaBotones] = useState(false)
    const [error, setError] = useState(false)
    const [numeroboton, SetNumeroBoton] = useState(0)
    const [cambiarBoton, SetCambiarBoton] = useState({
        can: "",
        pin: "",
        percentaje: "",
        tiempo: "",
        rgb: "",
    })

    //
    // const activarVentanaBotones = (boton:any)=>{
    //     boton = "boton01"

    //     SetCambiarBoton(datos.[boton])
    //     // SetNumeroBoton(1)
    //     setVentanaBotones(true)
    // }

    //
    // *---------------------------------------------
    const handleChangeBoton = (e: any) => {
        SetCambiarBoton({
            ...cambiarBoton,
            [e.target.name]: e.target.value
        })
    }
    const handleChangeData = (e: any) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    // *---------------------------------------------
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const DatosBoton = {
            boton: cambiarBoton,
            num: numeroboton,
            datos: datos
        }
        console.log(cambiarBoton)
        try {
            console.log("Hola Mundo");
            const response = await axios.post('/api/dana/changeBotonesTouch', DatosBoton)
            console.log(response)
            if (response.status === 200) {
                // router.push('/trainz')
                setVentanaBotones(false)
                props.hijoAPadre()
            }
        } catch (error) {
            setError(false)
            console.log(error);
            setTimeout(() => {
                console.log("1 Segundo esperado")
                setError(true)
            }, 150);
        }
    }

    const enviarDatos = async (e: any) => {
        e.preventDefault()
        console.log(datos)
        try {
            const response = await axios.post('/api/dana/changeDataTouch', datos)
            console.log(response)
            if (response.status === 200) {
                // router.push('/trainz')
                setVentanaBotones(false)
                props.hijoAPadre()
            }
        } catch (error) {
            setError(false)
            console.log(error);
            setTimeout(() => {
                console.log("1 Segundo esperado")
                setError(true)
            }, 150);
        }
    }

    //
    const HacerSonar = async (sonar :boolean) => {
        //
        if(sonar){
            //
            datos.sonarEsp = false            
        } else {
            //
            datos.sonarEsp = true
        }
        try {
            const response = await axios.post('/api/dana/changeDataTouch', datos)
            console.log(response)
            if (response.status === 200) {
                // router.push('/trainz')
                setVentanaBotones(false)
                props.hijoAPadre()
            }
        } catch (error) {
            setError(false)
            console.log(error);
            setTimeout(() => {
                console.log("1 Segundo esperado")
                setError(true)
            }, 150);
        }
    }

    //
    return (
        <div>
            <div className={styles.panel_oscuro} onClick={() => props.hijoAPadre()}></div>
            <div className={styles.panel} >
                <div className={styles.header}>
                    {props.item.sonarEsp ?
                        <div className={styles.sonar_false} onClick={()=> HacerSonar(props.item.sonarEsp)}>
                            <div className={styles.sonar_img}></div>
                        </div>
                        :
                        <div className={styles.sonar} onClick={()=> HacerSonar(props.item.sonarEsp)}>
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
                                    <button onClick={() => { setVentanaBotones(true); SetCambiarBoton(datos.boton01); SetNumeroBoton(1) }}>1</button>
                                    <button onClick={() => { setVentanaBotones(true); SetCambiarBoton(datos.boton02); SetNumeroBoton(2) }}>2</button>
                                    <button onClick={() => { setVentanaBotones(true); SetCambiarBoton(datos.boton03); SetNumeroBoton(3) }}>3</button>
                                </div>
                                <div className={styles.pantalla_img}></div>
                                <div className={styles.botones}>
                                    <button onClick={() => { setVentanaBotones(true); SetCambiarBoton(datos.boton04); SetNumeroBoton(4) }}>4</button>
                                    <button onClick={() => { setVentanaBotones(true); SetCambiarBoton(datos.boton05); SetNumeroBoton(5) }}>5</button>
                                    <button onClick={() => { setVentanaBotones(true); SetCambiarBoton(datos.boton06); SetNumeroBoton(6) }}>6</button>
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
                                    <button onClick={() => { setVentanaBotones(true); SetCambiarBoton(datos.boton07); SetNumeroBoton(7) }}>7</button>
                                    <button onClick={() => { setVentanaBotones(true); SetCambiarBoton(datos.boton08); SetNumeroBoton(8) }}>8</button>
                                    <button onClick={() => { setVentanaBotones(true); SetCambiarBoton(datos.boton09); SetNumeroBoton(9) }}>9</button>
                                </div>
                                <div className={styles.pantalla_img}></div>
                                <div className={styles.botones}>
                                    <button onClick={() => { setVentanaBotones(true); SetCambiarBoton(datos.boton10); SetNumeroBoton(10) }}>10</button>
                                    <button onClick={() => { setVentanaBotones(true); SetCambiarBoton(datos.boton11); SetNumeroBoton(11) }}>11</button>
                                    <button onClick={() => { setVentanaBotones(true); SetCambiarBoton(datos.boton12); SetNumeroBoton(12) }}>12</button>
                                </div>
                            </div>
                        </div>

                    }

                    {/* ------------------------------ */}
                    <div className={styles.ajustes_contain}>
                        <h3>Ajustes del Touch:</h3>

                        <form onSubmit={enviarDatos}>
                            <label >Identificador:</label>
                            <input
                                name='identificador'
                                type="text"
                                placeholder={datos.identificador}
                                onChange={handleChangeData}
                            />
                            <button type="submit" onClick={enviarDatos}>Cambiar</button>

                        </form>

                        <hr />

                        <form action="/send-data-here" method="post">
                            <label >Proyecto:</label>
                            {/* <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder={props.item.project}
                            /> */}
                            <input
                                name='project'
                                type="text"
                                placeholder={datos.project}
                                onChange={handleChangeData}
                                required
                            />
                            <label >Tiempo de envio:</label>
                            {/* <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder={datos.tiempo_envio}
                            /> */}
                            <input
                                name='tiempo_envio'
                                type="text"
                                placeholder={datos.tiempo_envio}
                                onChange={handleChangeData}
                            />
                            <button type="submit" onClick={enviarDatos}>Cambiar</button>
                        </form>
                        <hr />
                        <form action="/send-data-here" method="post">
                            <label >SSID:</label>
                            {/* <input
                                type="text"
                                id="identificador"
                                name="identificador"
                                required
                                placeholder={props.item.ssid}
                            /> */}
                            <input
                                name='ssid'
                                type="text"
                                placeholder={datos.ssid}
                                onChange={handleChangeData}
                                required
                            />
                            <label >Password:</label>
                            {/* <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder={props.item.password}
                            /> */}
                            <input
                                name='password'
                                type="text"
                                placeholder={datos.password}
                                onChange={handleChangeData}
                                required
                            />
                            <button type="submit" onClick={enviarDatos}>Cambiar</button>

                        </form>
                    </div>
                </div>
            </div>

            {/* //?------------------------------------------------------------ */}

            {ventanaBotones ?
                <div>
                    <div className={styles.panel_oscuro2} onClick={() => setVentanaBotones(false)}></div>
                    <div className={styles.panel_botones}>
                        <div className={styles.cerrar} onClick={() => setVentanaBotones(false)}><p>✖</p></div>
                        <h1>Boton: {numeroboton}</h1>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div>
                                <p>Can:</p>
                                <input
                                    name='can'
                                    type="text"
                                    placeholder={cambiarBoton.can}
                                    onChange={handleChangeBoton}
                                />
                            </div>
                            <div>
                                <p>Pin:</p>
                                <input
                                    name='pin'
                                    type="text"
                                    placeholder={cambiarBoton.pin}
                                    onChange={handleChangeBoton}
                                />
                            </div>
                            <div>
                                <p>Percentaje:</p>
                                <input
                                    name='percentaje'
                                    type="text"
                                    placeholder={cambiarBoton.percentaje}
                                    onChange={handleChangeBoton}
                                />
                            </div>
                            <div>
                                <p>Tiempo:</p>
                                <input
                                    name='tiempo'
                                    type="text"
                                    placeholder={cambiarBoton.tiempo}
                                    onChange={handleChangeBoton}
                                />
                            </div>
                            <div>
                                <p>RGB:</p>
                                <input
                                    name='rgb'
                                    type="text"
                                    placeholder={cambiarBoton.rgb}
                                    onChange={handleChangeBoton}
                                />
                            </div>


                            <button type="button" onClick={handleSubmit}>Iniciar</button>
                        </form>

                    </div>
                </div>
                :
                ""
            }
        </div>
    )
}

export default ConfigItemTouch
